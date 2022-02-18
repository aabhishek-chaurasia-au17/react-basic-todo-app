import React from 'react'

const TodoCompleted = ({items, completedTodo, deleteTask, editTask}) => {
  return (
    <div>
        <div>
        {
          items.map((element, index) => {
          const {isDone, task} = element || {}
         if(isDone){
            return (
              <div className="row d-flex justify-content-center" key={index}>
               <div className="col-12">
                    <div className="card mt-3">
                    <div className="row p-2">
                        <div className="col-8"> <h5 className="card-title pt-2">{task}</h5> </div>
                        <div className="col-md-4 text-end">
                        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                          {/* <button type="button" onClick={() => editTask(index)} className="btn btn-warning">Edit</button> */}
                          <button type="button" onClick={() => completedTodo(index)} className="btn btn-success">Not Done</button>
                          <button type="button" onClick={() => deleteTask(index)}  className="btn btn-danger">Delete</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>)
         }
            
        })}
        
        </div>

    </div>
  )
}

export default TodoCompleted