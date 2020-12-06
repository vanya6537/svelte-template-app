// eslint-disable-next-line import/no-extraneous-dependencies
import { writable } from 'svelte/store';
import { BASE_USERS_URL } from '../constants';

export const items = writable([]);
export const files = writable([]);
export const urlToFetch = writable(BASE_USERS_URL);
export const alert = writable('Hello, nice to e-meet you!');
