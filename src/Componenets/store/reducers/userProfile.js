export default function userProfile(state = {}, action) {
  switch (action.type) {
    case "setUser":
      return { state: action.payload };

    default:
      return state;
  }
}
