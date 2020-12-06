import { render } from '@testing-library/svelte';
import ListItems from '../ListItems.svelte';
import { generateLabelFunction, userMocks, prettifyKeys } from './constants';
import { BASE_USERS_URL } from '../../constants';
import UserInfo from '../UserInfo.svelte';

it('initially is showing the ‘Loading...’ text...', async () => {
  const { container } = render(ListItems, {
    props: {
      needToFetch: true,
      items: userMocks,
      isLoading: true,
      url: BASE_USERS_URL,
      generateLabel: generateLabelFunction,
    },
  });

  expect(container.querySelector('#list-heading').textContent).toBe('Loading...');
});

it('Renderes label correctly', async () => {
  const { container } = render(ListItems, {
    props: {
      needToFetch: true,
      items: userMocks,
      isLoading: false,
      // url: BASE_USERS_URL,
      generateLabel: generateLabelFunction,
      RenderItem: UserInfo,
      renderPropName: 'userProps',
      formatItem: prettifyKeys,
      pageSize: 18,
      maxCols: 3,
    },
  });

  expect(container.querySelector('#list-heading').textContent).toBe(
    generateLabelFunction(userMocks),
  );
});

it('Full-info mode works correctly', async () => {
  const { container } = render(ListItems, {
    props: {
      needToFetch: true,
      items: userMocks,
      isLoading: false,
      // url: BASE_USERS_URL,
      generateLabel: generateLabelFunction,
      RenderItem: UserInfo,
      renderPropName: 'userProps',
      formatItem: prettifyKeys,
      pageSize: 18,
      maxCols: 3,
    },
  });
  expect(!!container.querySelector('.adaptive-info')).toBeTruthy();
});
