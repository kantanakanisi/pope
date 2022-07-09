const state = {
  count: 0,
};

const getters = {
  incrementCount: (state: { count: number }) => state.count,
};

const mutations = {
  countup: (state: { count: number }) => {
    state.count++;
  },
  countdown: (state: { count: number }) => {
    state.count--;
  },
};

const actions = {
  countupAction({ commit }: { commit: (arg: string) => void }) {
    commit("countup");
  },
  countdownAction({ commit }: { commit: (arg: string) => void }) {
    commit("countdown");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
