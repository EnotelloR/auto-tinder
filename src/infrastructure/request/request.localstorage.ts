export const getAccessToken = () => localStorage.getItem('accessToken') || '';
export const setAccessToken = (accessToken: string) =>
  localStorage.setItem('accessToken', accessToken);
export const getLocalUserID = () => localStorage.getItem('userId') || undefined;
export const setLocalUserID = (userID: string) => localStorage.setItem('userId', userID);
