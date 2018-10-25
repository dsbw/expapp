import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => 
<div>
    <header>
        <h1>Expensify</h1>
        </header>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>        
    </div>

export default Header