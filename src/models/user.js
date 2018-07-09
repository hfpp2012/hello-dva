import axios from 'axios';

export default {

  namespace: 'user',

  state: {
    error: null,
    user: null
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch(_, { put, call }) {  // eslint-disable-line
      yield put({ type: 'fetch/start' });
      try {
        const user = yield call(axios.get, "https://jsonplaceholder.typicode.com/users");
        yield put({ type: "fetch/success", user: user });
      } catch(e) {
         yield put({ type: "fetch/error", error: e.message });
      }
    },
  },

  reducers: {
    'fetch/start' (state, action) {
      return {
        error: null,
        user: null
      }
    },

    'fetch/success' (state, action) {
      return {
        error: null,
        user: action.user
      }
    },

    'fetch/error' (state, action) {
      return {
        error: action.error,
        user: null
      }
    }
  },

};
