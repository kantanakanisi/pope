type DrawerType = {
  drawer: boolean;
};

const is_sp = window.innerWidth <= 767;

const state = {
  drawer: is_sp ? false : true,
};

const getters = {
  drawer: (state: DrawerType) => state.drawer,
};

const mutations = {
  switchDrawer: (state: DrawerType) => {
    state.drawer = !state.drawer;
  },
};

const actions = {
  switchDrawerAction({ commit }: { commit: (arg: string) => void }) {
    commit("switchDrawer");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
