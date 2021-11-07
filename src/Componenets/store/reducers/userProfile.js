export default function userProfile(state = false, action) {
  switch (action.type) {
    case "setUser":
      return { state: action.payload };
    case "removeUser":
      return { state: action.payload };
    default:
      return state;
  }
}
