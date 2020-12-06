<!-- components/ToggleName.svelte -->
<script>
export let checked;
let buttonText;
const toggle = () => {
  console.log('toggle');
  checked = !checked;
};
$: buttonText = checked ? 'Show full info' : 'Show only names';
</script>

<a class="button--primary button" on:click="{toggle}">{buttonText}</a>

<style>
a {
  margin-top: 20px;
}
@media (max-width: 340px) {
  a {
    min-width: 100px;
  }
}
</style>
