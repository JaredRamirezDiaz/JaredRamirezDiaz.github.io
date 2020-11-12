import {
  SET_SIDEBAR_OPEN,
  SET_SIDEBAR_CLOSE,
  SET_MOBIL_SIDEBAR_OPEN,
  SET_MOBIL_SIDEBAR_CLOSE,
} from "../actions/site.actions";

const initialState = {
  isSidebarOpen: true,
  isMobilSidebarOpen: false,
};

const siteReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIDEBAR_OPEN: {
      return {
        ...state,
        isSidebarOpen: true,
      };
    }

    case SET_SIDEBAR_CLOSE: {
      return {
        ...state,
        isSidebarOpen: false,
      };
    }
    case SET_MOBIL_SIDEBAR_OPEN: {
      return {
        ...state,
        isMobilSidebarOpen: true,
      };
    }
    case SET_MOBIL_SIDEBAR_CLOSE: {
      return {
        ...state,
        isMobilSidebarOpen: false,
      };
    }

    default:
      return { ...state };
  }
};

export default siteReducers;
