<!-- components/UserInfo.svelte -->
<script>
import AdaptiveInfo from './AdaptiveInfo.svelte';

export let userProps = {};
</script>

<div class="user-info">
  <!--  <label><i class="fa fa-user"></i>-->
  <AdaptiveInfo item="{userProps}" />
  <!--  </label>-->
</div>

<style>
.user-info {
  display: flex;
  flex-direction: row;
  padding: 0.3em 1em 0.3em 0;
  font-size: 18px;
}
</style>
