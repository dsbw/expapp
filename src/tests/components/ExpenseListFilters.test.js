import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'
import { finished } from 'stream';

let setTextFilter, sortByDate, sortByAmount, sortByDescription, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    sortByDescription = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            sortByDescription={sortByDescription}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with ald data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    const newText = 'acme'
    wrapper.find('input').simulate('change', {target: {value: newText}})
    expect(setTextFilter).toHaveBeenLastCalledWith(newText)
})

test('should sort by date', () => {
    wrapper.find('select').simulate('change', {target: {value: 'date'}})
    expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
    wrapper.find('select').simulate('change', {target: {value: 'amount'}})
    expect(sortByAmount).toHaveBeenCalled()
})

test('should sort by description', () => {
    wrapper.find('select').simulate('change', {target: {value: 'description'}})
    expect(sortByDescription).toHaveBeenCalled()
})

test('should handle date changes', () => {
    const dateRange = {startDate: -1, endDate: 1}
    wrapper.find('DateRangePicker').simulate('datesChange', dateRange)
    expect(setStartDate).toHaveBeenLastCalledWith(-1)
    expect(setEndDate).toHaveBeenLastCalledWith(1)
})

test('should handle date focus change', () => {
    wrapper.find('DateRangePicker').prop('onFocusChange')('endDate')
    expect(wrapper.state('calendarFocused')).toBe('endDate')
})