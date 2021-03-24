export const stateConditionString = state => {
    let navigateTo = '';

    if (state.isLoading) {
        navigateTo = 'LOAD_APP';
    }
    if (state.isSignedIn && state.userToken && state.isSignedUp) {
        navigateTo = 'LOAD_HOME';
    }
    if (!state.isSignedUp && state.noAccount && !state.isNew) {
        navigateTo = 'LOAD_SIGNUP';
    }
    if (!state.isSignedIn && !state.noAccount && !state.isNew) {
        navigateTo = 'LOAD_SIGNIN';
    }

    return navigateTo;
};