import { capitalize, mapKeys, snakeCase } from 'lodash';

export function getFilesFromInputEvent({ target }) {
  const files = target.files ? [...target.files] : [];
  // eslint-disable-next-line no-param-reassign
  target.value = '';
  return files;
}

export const prettifyKeys = (item) => ({
  ...mapKeys(item, (value, key) => snakeCase(key).split('_').map(capitalize).join(' ')),
});
export const getFullName = ({ firstName, lastName, firstname, lastname }) =>
  `${capitalize(firstName || firstname)} ${capitalize(lastName || lastname)}`;
