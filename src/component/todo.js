import React, {useState} from 'react'

const Todo = () => {
    const [taskObj, setTaskObj] = useState({task: ''})
    const [store, setStore] = useState([])

    function addTask(e){
        let key = e.target.name
        let value = e.target.value
        setTaskObj({...taskObj, [key]:value})
    }

    function submitTask(e) {
        e.preventDefault()
        setStore([...store, taskObj])
    }

    function deleteTask(itemIndex){
        setStore(store.filter((_, index) => index !== itemIndex))
    }
    
  return (
    <>
        <div className="container">
            <form>
                <div className="input-group mb-3 mt-5">
                    <input type="text" className="form-control" name='task' onChange={addTask} placeholder="Enter Task" aria-describedby="button-addon2"/>
                    <button className="btn btn-primary" type="button" onClick={submitTask} id="button-addon2">Add Task</button>
                </div>
            </form>
        </div>

        <div>
            {
            store.map((element, index) => {
             const {task} = element || {}
               return <div className="container">
                    <div className="card mt-3">
                    <div className="row pt-2">
                        <div className="col-11"> <h5 className="card-title p-2">{task}</h5></div>
                        <div className="col-1"> <button type="button" onClick={() => deleteTask(index)} className="btn btn-danger">Delete</button></div>
                    </div>
                    </div>
                </div>
            })}
        </div>
    </>
  )
}

export default Todo