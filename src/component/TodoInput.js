import React from 'react'

const TodoInput = ({setInputValue, submitTask}) => {
  return (
    <>
        <div className="container">
            <form>
                <div className="input-group mb-3 mt-5">
                    <input type="text" className="form-control" name='task' onChange={(e) => setInputValue(e.target.value)} placeholder="Enter Task" aria-describedby="button-addon2"/>
                    <button className="btn btn-primary" type="button" onClick={submitTask} id="button-addon2">Add Task</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default TodoInput