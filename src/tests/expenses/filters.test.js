import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate, sortByDescription } from '../../actions/filters'
import moment from 'moment'

test('should generate set start date action object', () => {    
    expect(setStartDate(moment(0))).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})

test('should generate set and date object', () => {    
    expect(setEndDate(moment(0))).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
})

test('should set the text filter', () => {    
    expect(setTextFilter('frobozz!')).toEqual({
        text: "frobozz!",
        type: 'SET_TEXT_FILTER'
    })
})

test('should set the text filter default', () => {    
    expect(setTextFilter()).toEqual({
        text: '',
        type: 'SET_TEXT_FILTER'
    })
})

test('should set the sort by amount', () => {    
    expect(sortByAmount()).toEqual({        
        type: 'SORT_BY_AMOUNT'
    })
})

test('should set the sort by date', () => {
    expect(sortByDate()).toEqual({        
        type: 'SORT_BY_DATE'
    })
})

test('should set the sort by amount', () => {    
    expect(sortByDescription()).toEqual({        
        type: 'SORT_BY_DESCRIPTION'
    })
})
