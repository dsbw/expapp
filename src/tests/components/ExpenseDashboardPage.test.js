import React from 'react'
import { shallow } from 'enzyme'
import Dashboard from '../../components/ExpenseDashboardPage'

test('should render Dashboard page', () => {
    const wrapper = shallow(<Dashboard />)
    expect(wrapper).toMatchSnapshot()
}) 
