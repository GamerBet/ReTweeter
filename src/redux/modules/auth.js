import C from "../../constants"

import HelloJS from "hellojs"

HelloJS.init({
    twitter: C.TWITTER_CLIENT_ID
})


const initialState = {
    auth_token: null,
}

export const loginFromStorage = (): Function => {
    return (dispatch: Function, getState: Function): Promise => {

        // return fetch('loginUser').then(function(resp):void {

        //   dispatch({type: C.SET_STORAGE_TOKEN})
        //   window.localStorage.set("auth_token", resp.data.token)

        //   dispatch({ type: C.LOGIN_SUCCESS, payload: {auth_token: resp.data.token })

        // }).catch(function(err): void {})

    }
}


export const loginWithTwitter = (): Function => {
    return (dispatch: Function, getState: Function): Promise => {

        dispatch({ type: C.ATTEMPT_LOGIN })

        return new Promise((resolve: Function): void => {

            HelloJS.login('twitter')
                .then(function(resp) {
                    console.log(resp)

                    dispatch({ type: C.LOGIN_SUCCESS })

                    // fetch('loginUser')
                    //     .then(function(resp) {})
                    //     .catch(function(err) {})

                }, function(e) {
                    console.log(e)

                    dispatch({ type: C.LOGIN_FAILURE })
                });

        })
    }
}

export const actions = {
    loginWithTwitter,
}


// ------------------------------------
// Reducer
// ------------------------------------
export default function authReducer(state: Object = initialState, action: Action): Object {

    switch (action.type) {

        case (C.ATTEMPT_LOGIN):
          return state

        case (C.LOGIN_SUCCESS):
          Object.assign({}, action.payload)
          return state

        case (C.LOGIN_FAILURE):
          return state

    }

    return state
}
