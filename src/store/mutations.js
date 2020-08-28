export default {
  setNavIndex (state, index) {
    state.navIndex = index;
  },
  setConsName (state, consName) {
    state.consName = consName;
  },
  setData (state, data) {
    state[state.field] = data;
  },
  setErrorCode (state, code) {
    state.errorCode = code;
  },
  setField (state, field) {
    state.field = field;
  }
}