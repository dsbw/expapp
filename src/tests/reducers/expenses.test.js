import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'})
  expect(state).toEqual([])  
})

test('should remove expense by ID', () => {
  const state = expensesReducer(expenses, {type: 'REMOVE_EXPENSE', id: expenses[1].id})
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense with bad ID', () => {
    const state = expensesReducer(expenses, {type: 'REMOVE_EXPENSE', id: -1})
    expect(state).toEqual(expenses)
})
  
test('should add an expense', () => {
    const newExpense = {id: 5555, description: 'petrol', note: 'English gas', amount: 12345, createdAt: -2}
    const state = expensesReducer(expenses, {type: 'ADD_EXPENSE', expense: newExpense})
    expect(state).toEqual([...expenses, newExpense])
})

test('should edit an expense', () => {
    const updates = {description: 'new description', note: 'new note'}
    const state = expensesReducer(expenses, {type: 'EDIT_EXPENSE', id: '1', updates})
    expect(state[0]).toEqual({...expenses[0], ...updates})
})

test('should not edit an expense if id not found', () => {
    const updates = {id: '1XQZSDF', description: 'new description', note: 'new note'}
    const state = expensesReducer(expenses, {type: 'EDIT_EXPENSE', updates})
    expect(state[0]).toEqual(expenses[0])
})