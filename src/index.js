import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Create reducers
const pitchers = (state = [], action) => {
    if(action.type === 'OUR_PITCHERS') {
       const newPitcher = action.payload
       return [...state, newPitcher] 
    }
    return state
}

const catchers = (state = [], action) => {
    if (action.type === 'OUR_CATCHERS') {
        const newCatcher = action.payload
        return [...state, newCatcher]
    }
    return state
}




// create the store
const baseBall = createStore (
    combineReducers({
        pitchers,
        catchers
    })
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={baseBall}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
     </Provider>
);
