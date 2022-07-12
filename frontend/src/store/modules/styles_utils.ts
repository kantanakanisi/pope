type windowWidthType = {
  windowWidth: number;
};

const state = {
  windowWidth: window.innerWidth,
};

const getters = {
  windowWidth: (state: windowWidthType) => state.windowWidth,
};

const mutations = {
  handleResize: (state: windowWidthType) => {
    state.windowWidth = window.innerWidth;
  },
};

const actions = {
  handleResizeAction({ commit }: { commit: (arg: string) => void }) {
    commit("handleResize");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
