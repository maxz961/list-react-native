import {createAction} from '@reduxjs/toolkit';

const successFetchUsers = createAction('SUCCESS_FETCH_USERS');
const fetchUsers = createAction('FETCH_USERS');
const errorFetchUsers = createAction('ERROR_FETCH_USERS');

export {successFetchUsers, fetchUsers, errorFetchUsers};
