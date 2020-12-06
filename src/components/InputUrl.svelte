<!-- components/InputUrl.svelte -->
<script>
export let handleChange;
export let value;
</script>

<label for="url-input">Request (JSON)</label>
<input id="url-input" value="{value}" on:input="{handleChange}" />

<style>
label {
  padding-bottom: 10px;
}
input {
  display: inline-block;
  /*width: 100%;*/

  /*max-width: 500px;*/
  height: 40px;
  padding: 9px 10px;
  font-size: inherit;
  font-weight: 400;
  line-height: 22px;
  color: #33475b;
  border: 1px solid #cbd6e2;
  box-sizing: border-box;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  border-radius: 3px;
}
</style>
