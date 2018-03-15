import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['likedJobs']
}

const store = createStore(
  persistReducer(persistConfig, reducers),
  {},
  compose(
    applyMiddleware(thunk)
  )
);

persistStore(store);

export default store;
