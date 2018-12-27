/**
 * @author Sun
 * @description users model
 */

import pathRegexp from 'path-to-regexp';
import * as UsersServices from '../services/users';

export default {
  
  namespace: 'users',
  
  state: {
    dataSource: [],
  },
  
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        console.log(pathRegexp(pathname));
        if (pathRegexp(pathname).test('/users')) {
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
