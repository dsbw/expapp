import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css' 


import { addExpense } from './actions/expenses'

const store = configureStore();

store.dispatch(addExpense({description: 'Muffin tax', amount: 300, createdAt: 3500}));
store.dispatch(addExpense({description: 'Water bill', amount: 800000, createdAt: 1000}));
store.dispatch(addExpense({description: 'Gas bill', amount: 5500, createdAt: 5000}));

const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))