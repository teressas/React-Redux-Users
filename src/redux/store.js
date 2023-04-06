import { legacy_createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { componseWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default legacy_createStore(
  rootReducer,
  componseWithDevTools(applyMiddleware(thunk))
);
