export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const Follow = (userId) => ({
  type: "FOLLOW",
  payload: userId,
});

export const Unfollow = (userId) => ({
  type: "UNFOLLOW",
  payload: userId,
});
//LOGOUT

export const AddDesc = (desc) => ({
  type: "ADD_DESC",
  payload: desc,
});

export const AddProfilePicture = (imageName) => ({
  type: "ADD_PROFILE_PICTURE",
  payload: imageName,
});

export const AddProfileCover = (imageName) => ({
  type: "ADD_PROFILE_COVER",
  payload: imageName,
});


export const Logout = (userId) => ({
  type: "LOGOUT",
  payload: userId,
});