import users from "../data/users";
import globalConstants from "../constants/global";
export const login = (user) => {
  for (let i = 0; i < users.length; i++) {
    if (
      user.username === users[i].username &&
      user.password === users[i].password
    ) {
      //login
      localStorage.setItem(globalConstants.LOCAL_STR_TOKEN, user.username);
      return true;
    } else {
      return false;
    }
  }
};
export const logout = () => {
  localStorage.removeItem(globalConstants.LOCAL_STR_TOKEN);
  window.location.reload();
};
export const getUserData = (user) => {
  for (let i = 0; i < users.length; i++) {
    if (user === users[i].username) return users[i];
  }
};
