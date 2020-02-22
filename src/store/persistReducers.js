import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'gobarber',
      storage,
      // informações que vão ser persistidas
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistedReducer;
};
