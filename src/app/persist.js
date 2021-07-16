import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export function configurePersist(rootReducer) {
  const persistConfig = {
    key: 'Experimentally',
    storage,
    version: 1,
    whitelist: ['Cart'],
  }
  return {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    reducer: persistReducer(persistConfig, rootReducer),
  }
}
