export const SET_SIDEBAR_OPEN = "SET_SIDEBAR_OPEN";
export const SET_SIDEBAR_CLOSE = "SET_SIDEBAR_CLOSE";
export const SET_MOBIL_SIDEBAR_OPEN = "SET_MOBIL_SIDEBAR_OPEN";
export const SET_MOBIL_SIDEBAR_CLOSE = "SET_MOBIL_SIDEBAR_CLOSE";

export const openSidebar = () => ({
  type: SET_SIDEBAR_OPEN,
  playload: null,
});

export const closeSidebar = () => ({
  type: SET_SIDEBAR_CLOSE,
  playload: null,
});
export const openMobilSidebar = () => ({
  type: SET_MOBIL_SIDEBAR_OPEN,
  playload: null,
});

export const closeMobilSidebar = () => ({
  type: SET_MOBIL_SIDEBAR_CLOSE,
  playload: null,
});
