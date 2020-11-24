const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const initialState = {
    loading: false,
    users: [],
    error: ''
}

//Actions
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

//Action Creators
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}
//reducer function with switch cases

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

//here we will be requesting the axios request 
const fetchUsers = () => {
    //what thunkMiddleware library does is that it has the ability to return the function instead of returning the actions in objects
    return function (dispatch) {
        dispatch(fetchUsersRequest())     //dispatch will active the loading:true
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {    //here response.data is the array of users
                const users = response.data.map(user => user.id)
                dispatch(fetchUsersSuccess(users))    //will staore users in our state
            })                                        //if the request fails we will fetch failures message under .catch

            .catch(error => {    //and if the request fails it displays the error through catch
                //here error.message gives the description of the error
                dispatch(fetchUsersFailure(error.message))
            })
    }
}


const store = createStore(reducer, applyMiddleware(thunkMiddleware))   //now next step is to make API call and dispatch apropriate actions
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())

