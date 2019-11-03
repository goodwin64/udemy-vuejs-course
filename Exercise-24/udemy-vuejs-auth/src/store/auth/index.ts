import { Module } from 'vuex';
import { LoginData } from '@/interfaces/LoginData';
import { CurrentUserData } from '@/interfaces/CurrentUserData';
import router from '@/router';

interface AuthStore {
  userData?: CurrentUserData;
}

const initialState: AuthStore = {
  userData: undefined,
};

export const authModule: Module<AuthStore, any> = {
  state: { ...initialState },
  getters: {
    isAuthorized(state) {
      return Boolean(state.userData);
    },
    userData(state) {
      return state.userData;
    },
  },
  mutations: {
    loginSuccessful(state, userData: CurrentUserData) {
      state.userData = userData;
    },
    logout(state) {
      state.userData = initialState.userData;
    },
  },
  actions: {
    login(store, loginData: LoginData) {
      if (loginData.email.includes('maksym')) {
        store.commit('loginSuccessful', {
          email: loginData.email,
        });
        router.push('/home');
      }
    },
    logout(store) {
      store.commit('logout');
      router.replace('/login');
    },
  },
};
