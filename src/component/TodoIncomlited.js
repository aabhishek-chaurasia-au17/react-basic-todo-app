import React from 'react'

const Todoitems = ({store, completedTodo, deleteTask, editTask}) => {

  return (
    <>
        <div className="container">{
            store.map((element, index) => {
             const {task, isDone} = element || {}
             if(!isDone){
               return <div className="row d-flex justify-content-center" key={index}>
               <div className="col-12">
                    <div className="card mt-3">
                    <div className="row py-2">
                        <div className="col-8"> <h5 className="card-title ps-2 pt-2">{task}</h5> </div>
                        <div className="col-1"> <button type="button" onClick={() => editTask(index)} className="btn btn-primary">Edit</button></div>
                        <div className="col-1"> <button type="button" onClick={() => completedTodo(index)} className="btn btn btn-success">Done</button></div>
                        <div className="col-1"> <button type="button" onClick={() => deleteTask(index)} className="btn btn-danger">Delete</button></div>
                    </div>
                    </div>
                    </div>
                </div>
                
            }})}
            
            </div>
    </>
  )
}

export default Todoitems