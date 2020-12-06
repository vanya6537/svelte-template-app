import { capitalize, mapKeys, snakeCase } from 'lodash';

export { userMocks } from './users.mock';
export const BASE_USERS_URL = 'https://hr.oat.taocloud.org/v1/users?limit=100';
export const acceptedFileTypes = ['text/csv', 'application/json'];

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

export const generateLabelFunction = (items) => `${items ? items.length : 0} users`;
