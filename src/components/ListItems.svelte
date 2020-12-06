<!-- components/ListItems.svelte -->
<script>
// import Spinner from 'svelte-spinner';
import fetch from 'node-fetch';
import { fade } from 'svelte/transition';
import { paginate, LightPaginationNav } from 'svelte-paginate';
import cn from 'classnames';
import { onMount, afterUpdate } from 'svelte';
// Items that will be in our list
export let items = [];
// Url to fetch data from
export let url;
export let withPagination = false;
// Function to render label for list, passes items as argument
export let generateLabel;
// Component for custom rendering
export let RenderItem = null;
// Property name to pass item in RenderItem
export let renderPropName = 'item';
// Item modifier function
export let formatItem = (value) => value;
// Flag to fetch data from url
export let needToFetch;
// Some pagination variables
export let currentPage = 1;
export let pageSize = 12;
export let isLoading;
// Height of the main component to optimize items per page
let componentHeight;
// Max columns in our list
export let maxCols = 3;
// items per page - reactive
let paginatedItems = [];
// Main label contains here - reactive
let label;

async function fetchItems() {
  items = await fetch(url)
    .then((data) => data.json())
    .catch((err) => {
      console.error(err);
      return [];
    });
  setTimeout(() => (isLoading = false), 500);
}

// If url passed - we will fetch items on mount
if (url) {
  isLoading = true;
  onMount(fetchItems);
}

afterUpdate(async () => {
  // If we need - fetch items
  if (needToFetch && url) {
    isLoading = true;
    await fetchItems();
  }
  // Check of items is array
  if (!Array.isArray(items)) throw new Error('Received object is not array');

  needToFetch = false;
});

// Reactive label generation if function exists
$: label = isLoading ? 'Loading...' : (generateLabel && generateLabel(items)) || label || '';

// Pagination is reactive
$: {
  if (withPagination) {
    paginatedItems = paginate({ items, pageSize, currentPage });

    // Optimization for page height - for best accessibility
    if (
      componentHeight &&
      pageSize > 3 &&
      window.innerWidth > 600 &&
      componentHeight > window.innerHeight * 3
    ) {
      pageSize =
        Math.floor(Math.max(3, Math.floor((window.innerHeight / componentHeight) * pageSize)) / 3) *
        3;
    }
  }
}
if (componentHeight && componentHeight < window.innerHeight - 140) {
  pageSize = Math.floor(((window.innerHeight / componentHeight) * pageSize) / 3) * 3;
}
// Small optimisation for small screens
if (window.innerWidth < 600) maxCols = Math.max(Math.min(maxCols, 2), 1);
</script>

<!-- Items List -->
<div bind:clientHeight="{componentHeight}" class="list-wrapper">
  <!-- Label -->

  {#if label}
    <h2 id="list-heading">{label}</h2>
  {/if}

  <!-- Items  -->
  {#if !isLoading}
    <div>
      <ul role="list" class="list" transition:fade="{{ duration: 1000 }}">
        {#each withPagination ? paginatedItems : items as item}
          <li class="{cn('list-item', `flex-basis-${Math.min(4, maxCols)}`)}">
            {#if RenderItem}
              <RenderItem {...{ [renderPropName]: formatItem(item) }} />
            {:else}{formatItem(item)}{/if}
          </li>
        {:else}
          <li class="{cn('list-item', `flex-basis-1 text-center`)}">Nothing to do here!</li>
        {/each}
      </ul>
      <!-- Pagination -->
      {#if withPagination}
        <LightPaginationNav
          totalItems="{items.length}"
          pageSize="{pageSize}"
          currentPage="{currentPage}"
          limit="{1}"
          showStepOptions="{true}"
          on:setPage="{(e) => (currentPage = e.detail.page)}"
        />
      {/if}
    </div>
  {:else}
    <div class="spinner-wrapper" out:fade="{{ duration: 1000 }}">
      <!--      <Spinner size="100" speed="750" color="#ba2025" thickness="2" gap="40" />-->
      <div class="svelte-spinner">
        <p>Data is processing</p>
      </div>
    </div>
  {/if}
</div>

<style>
.list-wrapper {
  float: left;
  width: 100%;
  overflow: hidden;
}

ul {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
}

li {
  flex: 0 0 calc(33.33% - 0.2em);
  margin: 0 0.1em 0.5em;
}

.flex-basis-1 {
  flex-basis: calc(100% - 0.2em);
}

.flex-basis-2 {
  flex-basis: calc(50% - 0.2em);
}

.flex-basis-3 {
  flex-basis: calc(33.33% - 0.2em);
}

.flex-basis-4 {
  flex-basis: calc(25% - 0.2em);
}

@media (max-width: 620px) {
  li {
    flex-basis: calc(50% - 0.2em);
  }
}

@media (max-width: 400px) {
  li {
    flex-basis: calc(100% - 0.2em);
    flex-grow: 1;
  }
}
:global(.spinner-wrapper) {
  display: flex;
}
:global(.svelte-spinner) {
  margin: auto;
}
:global(.pagination-nav) {
  background: none !important;
  box-shadow: none !important;
}
</style>
