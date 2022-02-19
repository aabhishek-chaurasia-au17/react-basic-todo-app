import React, {useState} from 'react'
import TodoInput from './TodoInput'

const Todo = () => {
    const [inputValue, setInputValue] = useState('')
    const [items, setItems] = useState([])
    const [isEditItem, setisEditItem] = useState(null)
    const [toggleSubmit, setToggleSubmit] = useState(true)


    function submitTask(e) {
        e.preventDefault()
        if(!inputValue){
          alert("Please enter a task")
        }else if(inputValue && !toggleSubmit){ 
          setItems(items.map((element, index) => {
            if(index === isEditItem){
                return{...items, task:inputValue}
            }
            return element
          }))
          
          setToggleSubmit(true);
          setInputValue('')
          setisEditItem(null)

        }else{
          setItems([...items, {id: new Date().valueOf(), task: inputValue, isDone: false}])
        //   console.log(inputValue);
          setInputValue('')
        }
        
    }

    function completedTodo(itemIndex) {
      const task = items[itemIndex]
      task.isDone = !task.isDone
      items[itemIndex] = task
      setItems([...items])
    }

    function editTask(itemIndex) {
      let newEditItem = items.find((_, index) => {
        return index === itemIndex;
      })
      
      setToggleSubmit(false)
      setInputValue(newEditItem.task)
      setisEditItem(itemIndex)
    }

    function deleteTask(itemIndex){
      setItems(items.filter((_, index) => index !== itemIndex))
    }
    
  return (
    <>    
    <TodoInput setInputValue={setInputValue} submitTask={submitTask} items={items} deleteTask={deleteTask} completedTodo={completedTodo} editTask={editTask} show={toggleSubmit} setToggleSubmit={setToggleSubmit}/>   
    </>
  )
}

export default Todo