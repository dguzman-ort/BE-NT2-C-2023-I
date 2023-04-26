import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tarea from './components/Tarea'
import Counters from './components/Counters'
import Button from './components/Button'

function App() {
  const [tareas, setTareas] = useState([
    // {
    //   id: 1,
    //   title: "tarea 1",
    //   checked: false
    // }
  ])

  const addTodo = () => {
    console.log("Agregar tarea")
    const text = prompt("Titulo de la tarea?")

    setTareas([...tareas, {
      // id: tareas[tareas.length - 1].id + 1,
      id: new Date().getTime(),
      title: text,
      checked: false
    }])
    //tareas.push()
    // console.log(tareas)
  }

  const updateTodo = (todo) => {

    console.log("Voy a modificar esta tarea", todo)

    const nuevoArray = tareas.map(item => {

      return todo.id === item.id ? { ...todo, checked: !todo.checked} : item
      // if (todo.id === item.id) {
      //   return { ...todo, checked: !todo.checked}
      // }
      // return item 
      
    })

    setTareas(nuevoArray)

  }

  const removeTodo = (todo) => {
    console.log("Eliminar tarea", todo)
    const nuevoArray = tareas.filter(item => item.id !== todo.id)
    setTareas(nuevoArray)
  }

  return (
    <>
      <div className="container center">
        <h1 className="center title">TODO App</h1>
        
        
        <Counters todos={tareas} />


        <Button styles={"button center"} texto={"Agregar Tarea"} onClick={addTodo}/>

        <ul id="todo-list" className="todo-list">
          {
            tareas.map((element, index) => {
              return <Tarea 
                        key={index} 
                        todo={element} 
                        onClickRemove={removeTodo} 
                        onClickCheckbox={updateTodo} 
                      />
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App
