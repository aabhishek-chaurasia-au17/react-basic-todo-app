import React from 'react'
import TodoCompleted from './TodoCompleted'
import TodoIncompleted from './TodoIncomplete'

const TodoTab = ({items, completedTodo, deleteTask, editTask}) => {
  return (
    <div>
        <div className="col-12 mt-5">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                aria-selected="true">Task</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                aria-selected="false">Complited Task</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                            aria-labelledby="pills-home-tab">
                            <ul className="todo-list list-group">
                              <TodoIncompleted items={items} deleteTask={deleteTask} completedTodo={completedTodo} editTask={editTask}/>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                            aria-labelledby="pills-profile-tab">
                            <TodoCompleted items={items} deleteTask={deleteTask} completedTodo={completedTodo} editTask={editTask}/>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default TodoTab