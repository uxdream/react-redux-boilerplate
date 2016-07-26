import createSaga from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';

import reducers from 'modules/reducers';
import sagas    from 'modules/sagas';

const sagaMiddleware = createSaga();

function configureStore() {
  const middlewares = [
    applyMiddleware(sagaMiddleware),
  ];

  if(window.devToolsExtension) {
    middlewares.push(window.devToolsExtension());
  }

  return createStore(
    reducers,
    compose(...middlewares)
  );
}

const store = configureStore();

sagaMiddleware.run(sagas);

export default store;