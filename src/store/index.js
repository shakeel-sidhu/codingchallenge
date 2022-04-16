import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";


const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(reducers);

sagaMiddleware.run(rootSaga);