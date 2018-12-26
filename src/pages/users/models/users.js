/**
 * @author Sun
 * @description users model
 */

import * as UsersServices from '../services/users';

export default {
  
  namespace: 'users',
  
  state: {
    dataSource: [],
  },
  
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch' });
        }
      });
    },
  },
  
  effects: {
    * fetch({ payload }, { call, put }) {
      const data = yield call(UsersServices.fetch, payload);
      yield put({
        type: 'updateState',
        payload: {
          dataSource: data,
        },
      });
    },
  },
  
  reducers: {
    updateState(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
