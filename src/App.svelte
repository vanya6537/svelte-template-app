<script>
import ListItems from './components/ListItems.svelte';
import Header from './components/Header.svelte';
import { urlToFetch } from './stores';
import UserInfo from './components/UserInfo.svelte';
import { getFullName, prettifyKeys } from './utils';
import InputFile from './components/InputFile.svelte';
import Alert from './components/Alert.svelte';
import { alert, items } from './stores';
import ToggleName from './components/ToggleName.svelte';
import InputUrl from './components/InputUrl.svelte';

const fileReader = new FileReader();

let renderItemProps;
let displayOnlyNames = true;
let timer;
let needToFetch = false;
let isLoading = true;
let withPagination = true;
// TODO:  Юнит-тесты + комментирование кода + документация Readme на базовом уровне

const generateLabelFunction = (items) => `${items ? items.length : 0} users`;

$: renderItemProps = displayOnlyNames
  ? {
      formatItem: getFullName,
      pageSize: 48,
      maxCols: 4,
    }
  : {
      RenderItem: UserInfo,
      renderPropName: 'userProps',
      formatItem: prettifyKeys,
      pageSize: 18,
      maxCols: 3,
    };

const handleUrlChange = ({ target: { value } }) => {
  urlToFetch.set(value);
  isLoading = true;
  clearTimeout(timer);
  timer = setTimeout(async () => {
    needToFetch = true;
    alert.set('Fetching data...');
  }, 750);
};
</script>

<main>
  <!--  Header  -->
  <Header bind:checked="{displayOnlyNames}" />
  <div class="main-content">
    <!--  Control panel  -->
    <div class="controls">
      <h2>Get data from:</h2>
      <!--  Url Input  -->
      <InputUrl bind:value="{$urlToFetch}" handleChange="{handleUrlChange}" />
      <!--  File Input  -->
      <InputFile bind:isLoading />
      <!--  Username toggler  -->
      <ToggleName bind:checked="{displayOnlyNames}" />
    </div>
    <!--  List of our objects  -->
    <ListItems
      bind:needToFetch
      bind:items="{$items}"
      bind:isLoading
      url="{$urlToFetch}"
      generateLabel="{generateLabelFunction}"
      {...renderItemProps}
      withPagination
    />
  </div>

  <Alert />
</main>

<style>
.main-content,
main {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}

main {
  padding: 1em;
}

.main-content {
  padding-top: 100px;
  max-width: 1250px;
  width: 100%;
}

.controls {
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  min-width: 340px;
}

@media (max-width: 970px) {
  .main-content {
    flex-direction: column;
  }
}
@media (max-width: 340px) {
  .controls {
    max-width: 290px;
    padding: 0;
  }
  :global(main) {
    font-size: 0.7rem;
    overflow: hidden;
  }
}
</style>
