import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { EbookApi } from '../services/EbookApi';

export const store = configureStore({
  reducer: {
    [EbookApi.reducerPath]: EbookApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(EbookApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch)
