import React, {useState} from 'react'
import TodoInput from './TodoInput'

const Todo = () => {
    const [inputValue, setInputValue] = useState("")
    const [store, setStore] = useState([])
    // const [completed, setcompleted] = useState([])


    function submitTask(e) {
        e.preventDefault()
        setStore([...store, {task: inputValue, isDone: false}])
        setInputValue("")
    }

    function completedTodo(itemIndex) {
      const task = store[itemIndex]
      task.isDone = !task.isDone
      store[itemIndex] = task
      setStore([...store])
    }

    function editTask(itemIndex) {
      // console.log(itemIndex);
    }

    function deleteTask(itemIndex){
      setStore(store.filter((_, index) => index !== itemIndex))
    }
    
  return (
    <>    
    <TodoInput setInputValue={setInputValue} submitTask={submitTask} store={store} deleteTask={deleteTask} completedTodo={completedTodo} editTask={editTask}/>   
    </>
  )
}

export default Todo