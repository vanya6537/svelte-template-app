<!-- components/AdaptiveInfo.svelte -->
<script>
export let item = {};
</script>

<div class="adaptive-info">
  <div class="keys-list">
    {#each Object.keys(item) as key}
      <div class="key">{key + ':'}</div>
    {/each}
  </div>
  <div class="values-list">
    {#each Object.values(item) as val}
      <div class="val">{val}</div>
    {/each}
  </div>
</div>

<style>
.adaptive-info {
  display: flex;
  flex-direction: row;
  font-size: 18px;
}

.key {
  font-weight: bold;
  padding-right: 0.7rem;
}
</style>
