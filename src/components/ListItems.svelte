<!-- components/ListItems.svelte -->
<script>
import { fade } from 'svelte/transition';
import { paginate, LightPaginationNav } from 'svelte-paginate';
import cn from 'classnames';
import { onMount, afterUpdate } from 'svelte';
import Spinner from 'svelte-spinner';
// Items that will be in our list
export let items = [];
// Url to fetch data from
export let url;
// Url to fetch data from
export let generateLabel;
export let RenderItem;
export let formatItem = (value) => value;
export let needToFetch;
export let renderPropName;
export let currentPage = 1;
export let pageSize = 12;
export let isLoading;
let componentHeight;
let itemHeight;

// Columns allowed not more than 4
export let maxCols = 3;
let paginatedItems = [];
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

if (url) {
  isLoading = true;
  onMount(fetchItems);
}

afterUpdate(async () => {
  // If we need - fetch items
  if (needToFetch) {
    isLoading = true;
    await fetchItems();
  }
  // Check of items is array
  if (!Array.isArray(items)) throw new Error('Received object is not array');

  needToFetch = false;
});

// Reactive label generation if function exists
$: {
  label = isLoading ? 'Loading...' : (generateLabel && generateLabel(items)) || label || '';
  paginatedItems = paginate({ items, pageSize, currentPage });
  if (!paginatedItems.length) currentPage = 1;
}

// Optimization for page height - for best accessibility
$: {
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
// if (componentHeight && componentHeight < window.innerHeight - 140) {
//   pageSize = Math.floor(((window.innerHeight / componentHeight) * pageSize) / 3) * 3;
// }
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
        {#each paginatedItems as item}
          <li
            class="{cn('list-item', `flex-basis-${Math.min(4, maxCols)}`)}"
            bind:clientHeight="{itemHeight}"
          >
            {#if RenderItem}
              <RenderItem {...{ [renderPropName]: formatItem(item) }} />
            {:else}{formatItem(item)}{/if}
          </li>
        {:else}
          <li class="{cn('list-item', `flex-basis-1 text-center`)}">Nothing to do here!</li>
        {/each}
      </ul>
      <!-- Pagination -->
      <LightPaginationNav
        totalItems="{items.length}"
        pageSize="{pageSize}"
        currentPage="{currentPage}"
        limit="{1}"
        showStepOptions="{true}"
        on:setPage="{(e) => (currentPage = e.detail.page)}"
      />
    </div>
  {:else}
    <div class="spinner-wrapper" out:fade="{{ duration: 1000 }}">
      <Spinner size="100" speed="750" color="#ba2025" thickness="2" gap="40" />
    </div>
  {/if}
</div>

<style>
.list-wrapper {
  float: left;
  width: 100%;
  overflow: auto;
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
