import React from 'react'

const TodoTab = (props) => {

  const {value, label, onTabClick, isActive} = props;

  return (
      <div>
        <li className="nav-item">
            <button className={isActive ? "nav-link active" : "nav-link"}
               onClick={()=>onTabClick(value)} 
             aria-current="page" href="#">{label}</button>
        </li>
     </div>
  )
}

export default TodoTab