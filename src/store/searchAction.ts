import { createAction } from '@reduxjs/toolkit';

export const searchAction = createAction('SEARCH', (payload) => ({payload,}));