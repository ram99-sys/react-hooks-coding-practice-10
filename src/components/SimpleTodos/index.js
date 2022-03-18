import {useState} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

const SimpleTodos = () => {
  const [list, setList] = useState(initialTodosList)
  const onDeleteUser = id => {
    // setList(list.filter(eachObject => eachObject.id !== id))
    const filteredResults = list.filter(eachObject => eachObject.id !== id)
    setList(filteredResults)
  }
  return (
    <div className="todos-app-container">
      <div className="app-container">
        <h1 className="heading">Simple Todos</h1>
        <ul className="todos-list">
          {list.map(eachItem => (
            <TodoItem
              key={eachItem.id}
              todoItem={eachItem}
              onDeleteUser={onDeleteUser}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SimpleTodos
