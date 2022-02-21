import React,{useState} from 'react';
import { MdDeleteForever, MdRemoveDone } from "react-icons/md";
import { BiArchiveIn, BiEdit } from "react-icons/bi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";


const TodoItem = (props) =>{

    const [editState,setEditState] = useState(false);

    const { item, updatedTodo=()=>{}} = props;
    
    const {id, value, isComplete, isArchived} = item;

    function taskToggle(id){
        item.isComplete = !item.isComplete;
        updatedTodo(id,item);
    }

    function deleteItem(id){
        item.isDelete = !item.isDelete;
        updatedTodo(id,item);
    }

    function sendToArchive(id){
        item.isArchived = !item.isArchived;
        updatedTodo(id,item);
    }

    function editItem(event,id){
        item.value = event.target.value;
        updatedTodo(id,item); 
    }

    return (
        <div className="card mt-4">
        <div className="row p-2 d-flex justify-content-between align-items-center">
        
        <div className="col-7">
            {
                editState ? <input className="editTodoItem w-75" value={value}  onChange={(e)=>editItem(e, id)}/>:
                    <h5 className={`${!isComplete? "card-title pt-2 " : "card-title text-decoration-line-through"}`} >{value}</h5>
            }
            </div>
            <div className="col-5 text-end">
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            {
               !isArchived && 
               <button className="btn btn-success complete-btn"  onClick={()=>taskToggle(id)}>{isComplete? "Undone": `Done`} {isComplete? <MdRemoveDone/> : <IoCheckmarkDoneSharp/>}  </button>
           } 
            <button className="btn btn-danger" onClick={()=>deleteItem(id,value)}>Delete <MdDeleteForever/></button>
            {
             (!isComplete && !isArchived) && <button className="btn btn-warning text-white"  
            onClick={()=>setEditState(!editState)}>{!editState ? 'Edit text':'Change text'} <BiEdit/></button>
            }
            {
             <button className="btn btn-info text-white" onClick={()=>sendToArchive(id)}>{!isArchived ? 'Archive' : 'Unarchive'} <BiArchiveIn/></button>
            }
             </div>
            </div>
          </div>
        </div>
    )
}

export default TodoItem;