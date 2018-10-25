import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByAmount, sortByDate, sortByDescription, setStartDate, setEndDate } from '../actions/filters'

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({startDate, endDate}) => {
        console.log('START DATE IS ', startDate)
        console.log('END DATE IS ', endDate)
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused}))
    }
    onTextChange = (e) => {this.props.setTextFilter(e.target.value)}    
    onSortChange = (e) => {        
        if(e.target.value === "date") { this.props.sortByDate() }
        else if(e.target.value === "amount") { this.props.sortByAmount() }
        else { this.props.sortByDescription() }}
    render() {
        return(
    <div>
        <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}> 
            <option value="date">Date</option>
            <option value="amount">Amount</option>
            <option value="name">Name</option>
        </select>
        <DateRangePicker 
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
        />
    </div>)}
}

const mapStateToProps = (state) => ({    
        filters: state.filters            
})
const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate),
    sortByAmount: () => dispatch(sortByAmount),
    sortByDescription: () => dispatch(sortByDescription),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate)    
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)