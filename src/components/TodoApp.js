import React,{useState} from 'react';
import TodoTabs from './TodoTabs'
import * as globalConstants from '../constants';
import TodoList from './TodoList'


const {TODO_TABS} = globalConstants;

const TodoApp=()=>{

    const [inputText, setInputText] = useState('');
    const [todoList, setTodoList] = useState({});
    const [selectedTab, setSelectedTab] = useState(TODO_TABS.TODO);

    const tabs =[
        {
            label : TODO_TABS.TODO,
            value : TODO_TABS.TODO
        },
        {
            label : TODO_TABS.COMPLETE,
            value : TODO_TABS.COMPLETE
        },
        {
            label :TODO_TABS.ARCHIVED,
            value : TODO_TABS.ARCHIVED
        }
    ]

    const completeList = Object.values(todoList).filter(({isComplete, isDelete, isArchived}) => isComplete && !isDelete && !isArchived);
    const incompleteList = Object.values(todoList).filter(({isComplete, isDelete, isArchived}) => !isComplete && !isDelete && !isArchived);
    
    const archivedList = Object.values(todoList).filter(({isArchived, isDelete})=> isArchived && !isDelete);

    function onTabChange(value){
        setSelectedTab(value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!inputText){
           return;
        }
        const todoId = new Date().toISOString();
        setTodoList({...todoList,[todoId]:{ id : todoId, value : inputText, isComplete: false, isDelete : false, isArchived : false}});
        setInputText('');
    }

    function updateTodo(id, updatedItem){

        setTodoList({...todoList, [id]:updatedItem});
    }

    function renderList() {
        switch(selectedTab){
            case TODO_TABS.COMPLETE:
                return (<TodoList list={completeList} updatedTodo={updateTodo}/>)
                
            case TODO_TABS.ARCHIVED:
                return (<TodoList list={archivedList} updatedTodo={updateTodo}/>)
                
            default:
               return (<TodoList list={incompleteList} updatedTodo={updateTodo}/>)
        }
    }
    
    return (
        <div className="container"> 
            <div className="col-10  m-auto">
            <h1 className="title text-center mt-4 mb-4">TODO LIST</h1>
            <form className="todo-form"  onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter task" value={inputText} onChange={(e)=> setInputText(e.target.value)}/>
                <button className="btn btn-primary" type="button" id="button-addon2" onClick={handleSubmit}>Add Task</button>
            </div>
            </form>
            <div>
                <TodoTabs tabs={tabs} selectedTab={selectedTab} onTabClick={onTabChange} />
            {renderList()}
            </div>
            </div>
        </div>
    )
}

export default TodoApp;
