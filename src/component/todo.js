import React, {useState} from 'react'
import Todoitems from './Todoitems'
import TodoInput from './TodoInput'

const Todo = () => {
    const [inputValue, setInputValue] = useState("")
    const [store, setStore] = useState([])

    function submitTask(e) {
        e.preventDefault()
        setStore([...store,{task: inputValue}])
        setInputValue("")
    }

    function deleteTask(itemIndex){
        setStore(store.filter((_, index) => index !== itemIndex))
    }
    
  return (
    <>    
    <TodoInput setInputValue={setInputValue} submitTask={submitTask}/>   
    <Todoitems store={store} deleteTask={deleteTask}/>
    </>
  )
}

export default Todo