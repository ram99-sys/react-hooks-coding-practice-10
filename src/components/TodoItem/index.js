import './index.css'

const TodoItem = props => {
  const {todoItem, onDeleteUser} = props
  const {title, id} = todoItem
  const onClickDeleteButton = () => {
    onDeleteUser(id)
  }

  return (
    <li className="list-item">
      <p className="todo-title">{title}</p>
      <button className="button" type="button" onClick={onClickDeleteButton}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
