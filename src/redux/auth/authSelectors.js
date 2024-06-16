export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getLoading = state => state.auth.isLoading;
export const getRefreshing = state => state.auth.isRefreshing;
export const getError = state => state.auth.error;
export const getUser = state => state.auth.user;
export const getUserAvatar = state => state.auth.user.avatar;
export const getUsername = state => state.auth.user.name;
export const getUserProfile = state => state.auth.userProfile;
