const redux = require('redux')
const createStore = redux.createStore
const reduxLogger = require('redux-logger')
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()


const Buy_Cake = 'Buy_Cake'
const Buy_Icecream = 'Buy_Icecream'


function buyCake() {
    return {
        type: Buy_Cake,
        info: 'first redux action'
    }
}

function buyIcecream() {
    return {
        type: Buy_Icecream,
        info: 'second redux action'
    }
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIcecream: 20
// }
const initialCakeState ={
    numOfCakes:10
}
const initialIcecreamState ={
    numOfIcecream:20
}
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case Buy_Cake: return {
//             ...state
//             , numOfCakes: state.numOfCakes - 1

//         }

//         case Buy_Icecream: return {
//             ...state
//             , numOfIcecream: state.numOfIcecream - 1

//         }

//         default: return state

//     }
// }


const iceCreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
        case Buy_Icecream: return {
            ...state
            , numOfIcecream: state.numOfIcecream - 1

        }
        default: return state

    }
}
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case Buy_Cake: return {
            ...state
            , numOfCakes: state.numOfCakes - 1

        }
        default: return state

    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer
})
const store = createStore(rootReducer,applyMiddleware(logger))
console.log('initial state', store.getState())
const unsubsscribe = store.subscribe(() => {} )
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

unsubsscribe()