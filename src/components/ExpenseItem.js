import React, { useContext } from 'react'
import { TiMinus, TiPlus } from 'react-icons/ti'
import { AppContext } from '../context/AppContext'
import { FaTimesCircle } from 'react-icons/fa';
import '../App.css'

const ExpenseItem = props => {
    const { dispatch, currency } = useContext(AppContext)

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        })
    }

    const increaseAllocation = name => {
        const expense = {
            name: name,
            cost: 10
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })
    }

    const decreaseAllocation = name => {
        const expense = {
            name: name,
            cost: -10
        }
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <TiPlus
                    style={{
                        backgroundColor: '#3DCC3D',
                        borderRadius: '50%',
                        padding: '8px', // Adjust padding for proper circle appearance
                        color: 'white',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s, color 0.3s',
                        userSelect: 'none',
                    }}
                    size='2.0em'
                    onMouseOver={event =>
                        (event.target.style.backgroundColor = '#008000')
                    }
                    onMouseOut={event => (event.target.style.backgroundColor = '#3DCC3D')}
                    onClick={event => {
                        event.target.style.backgroundColor = '#004D00'

                        setTimeout(() => {
                            event.target.style.backgroundColor = '#3DCC3D'
                        }, 100);

                        increaseAllocation(props.name);
                    }}
                ></TiPlus>
            </td>
            <td>
                <TiMinus
                    style={{
                        backgroundColor: 'red',
                        borderRadius: '50%',
                        padding: '8px', // Adjust padding for proper circle appearance
                        color: 'white',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s, color 0.3s',
                        userSelect: 'none',
                    }}
                    size='2.0em'
                    onMouseOver={event =>
                        (event.target.style.backgroundColor = '#CC0000')
                    }
                    onMouseOut={event => (event.target.style.backgroundColor = 'red')}
                    onClick={event => {
                        event.target.style.backgroundColor = '#802626'

                        setTimeout(() => {
                            event.target.style.backgroundColor = 'red'
                        }, 100);

                        decreaseAllocation(props.name);
                    }}
                ></TiMinus>
            </td>
            <td>
                <FaTimesCircle
                    style={{
                        color: 'red',
                        cursor: 'pointer',
                        transition: 'color 0.3s',
                        userSelect: 'none',
                    }}
                    size='2.0em'
                    onMouseOver={event => (event.target.style.color = '#CC0000')}
                    onMouseOut={event => (event.target.style.color = 'red')}
                    onClick={event => {
                        event.target.style.color = '#802626'

                        setTimeout(() => {
                            event.target.style.color = 'red'
                        }, 100)

                        handleDeleteExpense()
                    }}
                ></FaTimesCircle>
            </td>
        </tr>
    )
}

export default ExpenseItem