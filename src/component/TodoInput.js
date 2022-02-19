import React from 'react'
import TodoTab from './TodoTab'

const TodoInput = ({setInputValue, submitTask, items, completedTodo, deleteTask, editTask, show, setToggleSubmit}) => {
  
  return (<>
    <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="col-8 mt-4">
                <h1 className="text-center text-white">My To Do List</h1>
                <form>
                <div className="input-group mb-3 mt-5">
                <input type="text" className="form-control" placeholder="Enter Task" onChange={(e) => setInputValue(e.target.value)}/>
                {show && <button className="btn btn-primary" type="button" onClick={submitTask}>Add Task</button>}
                {!show && <><button  className="btn btn-primary" type="button" onClick={submitTask}>Edit</button><button className="btn btn-danger" type="button" onClick={() => setToggleSubmit(true)}>cancel</button></>}
                </div>
                </form>
                <TodoTab items={items} deleteTask={deleteTask} completedTodo={completedTodo} editTask={editTask} />
            </div>
        </div>
    </div>
    </>
  )
}

export default TodoInput