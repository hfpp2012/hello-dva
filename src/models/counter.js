import { delay } from 'dva/saga';
import { routerRedux } from 'dva/router';
import queryString from 'query-string';
import pathToRegexp from 'path-to-regexp';

export default {
  namespace: 'counter',
  state: {
    count: 2
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      window.onresize = () => {
        dispatch({ type: 'add' });
      };
    },

    // onClick({ dispatch }) {
    //   document.addEventListener('click', () => {
    //     dispatch({ type: 'add' });
    //   })
    // },

    setupHistory({ dispatch, history }) {
      history.listen((location) => {
        // console.log(location);
        // if (location.pathname === '/counter') {
        //   dispatch({ type: 'add' });
        // }
        const match = pathToRegexp('/counter').exec(location.pathname);

        if (match) {
          dispatch({ type: 'add' })
        }
      })
    }
  },
  reducers: {
    // add(state, action) {
    //   return {
    //     count: state.count + 1
    //   };
    // },
    // 'add' (state, action) {
    //   return {
    //     count: state.count + 1
    //   };
    // },
    'add' (state, action) {
      return {
        count: state.count + 1
      };
    },
  },
  effects: {
    *asyncAdd(_, { call, put, select }) {  // eslint-disable-line
      // const counter = yield select(state => state.counter)
      // console.log(counter);
      // const counter = yield select(({ counter }) => counter)
      // console.log(counter);
      // const counter = yield select(_ => _.counter)
      // console.log(counter);
      const { counter } = yield select(_ => _);
      // console.log(counter);
      yield call(delay, 1000);
      yield put({ type: 'add' });
      // yield put(routerRedux.push({
      //   pathname: '/',
      //   search: queryString.stringify({
      //     from: 'rails365'
      //   })
      // }));
    },
  },
}
