import React from 'react'

const Todoitems = ({store, deleteTask}) => {
  return (
    <>
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
    </>
  )
}

export default Todoitems