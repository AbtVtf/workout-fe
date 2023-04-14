import { store } from "./store";
import { refreshToken } from "./auth/authSlice";

export async function apiCall(url, options = {}) {
  const state = store.getState();
  const token = state.auth.token;
  console.log(state, token);
  if (!token) {
    throw new Error("Not authenticated");
  }

  options.headers = {
    ...options.headers,
    Authorization: `${token}`,
  };

  const response = await fetch(url, options);
  if (response.status === 403) {
    try {
      await store.dispatch(refreshToken());
      const newToken = store.getState().auth.accessToken;
      options.headers.Authorization = `${newToken}`;
      return await fetch(url, options);
    } catch (error) {
      throw new Error("Failed to refresh access token");
    }
  }

  return response;
}
