export const reducer = (prevState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,

        isNew: true,

      };
    case 'SIGN_UP':
      return {
        ...prevState,
        isSignedIn: true,
        isSignedUp: true,
        isLoading: false,
        userToken: action.token,
      };
    case 'TO_SIGN_UP':
      return {
        ...prevState,
        isLoading: false,
        isSignedUp: false,
        noAccount: true,

        isNew: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignedOut: false,
        isSignedIn: true,
        isSignedUp: true,
        userToken: action.token,
      };
    case 'TO_SIGN_IN':
      return {
        ...prevState,
        isLoading: false,
        isSignedIn: false,
        noAccount: false,

        isNew: false,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignedOut: true,
      };
  }
};

export const initialState = {
  isLoading: true,
  isSignedOut: false,
  isSignedUp: false,
  noAccount: false,
  isSignedIn: false,
  userToken: null,

  isNew: true,
};
