// Copied from https://dev.to/d_ir/testing-svelte-async-state-changes-3mip
import { JSDOM } from 'jsdom';
import { bind, binding_callbacks } from 'svelte/internal';

export const setDomDocument = () => {
  const dom = new JSDOM('<html><body></body></html>', { url: 'https://localhost' });
  // global.document = dom.window.document;
  // global.window = { ...global.window, ...dom.window };
  // global.navigator = dom.window.navigator;
  global.container = dom.window.document.createElement('div');
  dom.window.document.body.appendChild(global.container);
};

export const click = (formElement) => {
  const evt = document.createEvent('MouseEvents');
  evt.initEvent('click', true, true);
  formElement.dispatchEvent(evt);
  return evt;
};

let mountedComponents = [];

export const mountComponent = (Component, props = {}, bindings = {}) => {
  const mounted = new Component({ target: global.container, props });
  Object.keys(bindings).forEach((binding) => {
    binding_callbacks.push(() => {
      bind(mounted, binding, (value) => {
        // eslint-disable-next-line no-param-reassign
        bindings[binding] = value;
      });
    });
  });

  mountedComponents = [mounted, ...mountedComponents];
  return mounted;
};

export const unmountAll = () => {
  mountedComponents.forEach((component) => {
    component.$destroy();
  });
  mountedComponents = [];
};
