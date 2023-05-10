import Button from "../Button"

const Tarea = ({todo, onClickRemove, onClickCheckbox}) => {
    return (
        <li className='todo-container'>
            <input className='todo-checkbox' type={'checkbox'} checked={todo.checked} onChange={() => onClickCheckbox(todo)} />
            <span className='title'>{ todo.title }</span>
            <Button 
                styles={"todo-delete"} 
                texto={" X "} 
                onClick={() => onClickRemove(todo)}
            />
        </li>
    )
}

export default Tarea