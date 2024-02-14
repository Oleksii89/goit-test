import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore, combineReducers } from 'redux';
import { movieListReducer } from './movieListReducer';

const rootReducer = combineReducers({
  movieList: movieListReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
