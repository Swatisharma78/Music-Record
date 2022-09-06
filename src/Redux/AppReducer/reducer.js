import * as types from "./actionTypes";
const init = {
  musicRecord: [],
  isLoading: false,
  isError: false,
};
const reducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_ALBUMS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_ALBUMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        musicRecord: payload,
      };
    case types.GET_ALBUMS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.UPDATE_ALBUMS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.UPDATE_ALBUMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        musicRecord: payload,
      };
    case types.UPDATE_ALBUMS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
export { reducer };
