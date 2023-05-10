export default ({todos}) => {

    const uncheckedTodos = todos.filter(item => !item.checked)
    return (
        <div className="flow-right controls">
          <span>Item count: <span id="item-count">{todos.length}</span></span>
          <span>Unchecked count: <span id="unchecked-count">{uncheckedTodos.length}</span></span>
        </div>
    )
}