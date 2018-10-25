import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set sort by to description', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_DESCRIPTION'})
    expect(state.sortBy).toBe('description')
})

test('should set sort by to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = {type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'cat'})
    expect(state.text).toBe('cat')
})

test('should set startDate filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', date: -1})
    expect(state.startDate).toBe(-1)
})

test('should set endDate filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', date: -1})
    expect(state.endDate).toBe(-1)
})