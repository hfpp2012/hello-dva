export default {

  namespace: 'user',

  state: {
    isFetching: false,
    error: null,
    user: null
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch(_, { put }) {  // eslint-disable-line
      yield put({ type: 'start' });
    },
  },

  reducers: {
    'start' (state, action) {
      return {
        isFetching: true,
        error: null,
        user: null
      }
    },
  },

};
