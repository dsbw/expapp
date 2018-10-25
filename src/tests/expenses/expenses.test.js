import { addExpense, editExpense, removeExpense } from '../../actions/expenses' 

test('should set up remove expense action boject', () => {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({id: '123abc', type: "REMOVE_EXPENSE"})
})

test('should set up edit expense action boject', () => {
    const action = editExpense(123,{note: "New note value."})
    expect(action).toEqual({id: 123, type: "EDIT_EXPENSE", updates: {note: "New note value."}})
})

test('should set up add expense aciton object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was rent for August'
    }
   const action = addExpense(expenseData)
   expect(action).toEqual({
       type: 'ADD_EXPENSE',
       expense: {
           ...expenseData,
           id: expect.any(String)
       }
   }) 
})

test('should set up the add expense action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    }) 
})