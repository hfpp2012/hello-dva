import dva from 'dva';
import './index.css';
import { createBrowserHistory as createHistory } from 'history';
import createLoading from 'dva-loading';
import { createLogger } from 'redux-logger';

const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

const error = store => next => action => {
  try {
    console.log('error');
    next(action)
  } catch(e) {
    console.log('error ' + e);
  }
};

// 1. Initialize
const app = dva({
  history: createHistory(),
  onAction: [logger, error]
});

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
require('./models').default.forEach(key => app.model(key.default));

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
// console.dir(app);
