<!-- components/Header.svelte -->
<script>
import ToggleName from './ToggleName.svelte';
export let checked;
</script>

<header id="header" class="site-header">
  <div class="flex-container">
    <div class="logo">
      <a class="custom-logo-link" rel="home" aria-current="page"><img
          src="https://www.taotesting.com/wp-content/uploads/2019/04/logo.svg"
          class="custom-logo"
          alt="TAO"
        /></a>
    </div>
    <nav id="main-navigation">
      <div class="inner">
        <ul id="primary-menu" class="inner">
          <li
            id="menu-item-1271"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1271"
          >
            <a>Product</a>
            <ul class="sub-menu">
              <li
                id="menu-item-1272"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1272"
              >
                <a>Product Overview</a>
              </li>
              <li
                id="menu-item-1280"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1280"
              >
                <a>Core</a>
              </li>
              <li
                id="menu-item-1267"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1267"
              >
                <a>Ignite</a>
              </li>
              <li
                id="menu-item-1266"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1266"
              >
                <a>Pro</a>
              </li>
              <li
                id="menu-item-1273"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1273"
              >
                <a>Enterprise</a>
              </li>
              <li
                id="menu-item-503"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-503"
              >
                <a>Key Features</a>
              </li>
              <li
                id="menu-item-1354"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1354"
              >
                <a>Try TAO Now</a>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-33"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-33"
          >
            <a>Solutions</a>
            <ul class="sub-menu">
              <li
                id="menu-item-157"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-157"
              >
                <a>Solutions Overview</a>
              </li>
              <li
                id="menu-item-265"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-265"
              >
                <a>K-12</a>
              </li>
              <li
                id="menu-item-264"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-264"
              >
                <a>Higher Education</a>
              </li>
              <li
                id="menu-item-263"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-263"
              >
                <a>Professional Advancement</a>
              </li>
              <li
                id="menu-item-1365"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1365"
              >
                <a>Accessibility</a>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-32"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-32"
          >
            <a>Services</a>
            <ul class="sub-menu">
              <li
                id="menu-item-172"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-172"
              >
                <a>Services Overview</a>
              </li>
              <li
                id="menu-item-259"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-259"
              >
                <a>Interoperability</a>
              </li>
              <li
                id="menu-item-258"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-258"
              >
                <a>TAO Cloud™ Services</a>
              </li>
              <li
                id="menu-item-257"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-257"
              >
                <a>Training and Support</a>
              </li>
              <li
                id="menu-item-1367"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1367"
              >
                <a>TAO Training Portal</a>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-399"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-399"
          >
            <a>Partners</a>
            <ul class="sub-menu">
              <li
                id="menu-item-400"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-400"
              >
                <a>Partners Overview</a>
              </li>
              <li
                id="menu-item-461"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-461"
              >
                <a>Tool Partners</a>
              </li>
              <li
                id="menu-item-462"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-462"
              >
                <a>Service Partners</a>
              </li>
              <li
                id="menu-item-463"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-463"
              >
                <a>Content Partners</a>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-28"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-28"
          >
            <a>About Us</a>
            <ul class="sub-menu">
              <li
                id="menu-item-658"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-658"
              >
                <a>Company</a>
              </li>
              <li
                id="menu-item-1037"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1037"
              >
                <a>News</a>
              </li>
              <li
                id="menu-item-713"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-713"
              >
                <a>FAQ</a>
              </li>
              <li
                id="menu-item-1282"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1282"
              >
                <a>Social Responsibility</a>
              </li>
              <li
                id="menu-item-953"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-953"
              >
                <a>Careers</a>
              </li>
              <li
                id="menu-item-392"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-392"
              >
                <a>Contact Us</a>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-31"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-31"
          >
            <a>Resources</a>
            <ul class="sub-menu">
              <li
                id="menu-item-599"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-599"
              >
                <a>Resource Center</a>
              </li>
              <li
                id="menu-item-595"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-595"
              >
                <a>Data Sheets</a>
              </li>
              <li
                id="menu-item-536"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-536"
              >
                <a>Case Studies</a>
              </li>
              <li
                id="menu-item-596"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-596"
              >
                <a>White Papers</a>
              </li>
              <li
                id="menu-item-1138"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1138"
              >
                <a>eBooks</a>
              </li>
              <li
                id="menu-item-598"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-598"
              >
                <a>Tutorial Videos</a>
              </li>
              <li
                id="menu-item-1329"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1329"
              >
                <a>What Are Online Assessments?</a>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-221"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-221"
          >
            <a>Blog</a>
          </li>
          <li
            id="menu-item-62"
            class="scheduled-demo menu-item menu-item-type-custom menu-item-object-custom menu-item-62"
          >
            <ToggleName bind:checked />
          </li>
        </ul>
      </div>
    </nav>
  </div>
</header>

<style>
:global(.menu-item::after) {
  display: none;
}
a {
  cursor: pointer;
}
</style>
