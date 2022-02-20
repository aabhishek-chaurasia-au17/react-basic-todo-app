import React from 'react'
import TodoTab from './TodoTab';
import PropTypes from 'prop-types';

const TodoTabs = (props) => {

    const {tabs , selectedTab , onTabClick} = props;
  
    return (
    <div className="todoTabsContainer"> 
        <ul className="nav nav-pills d-flex justify-content-center">
            {
                tabs.map(tab=>{
                    const {value ,label} = tab || {};
                    const isActive = (selectedTab===value);
                    return (
                        <TodoTab key={label} value={value} 
                        label={label}
                          onTabClick={onTabClick}
                          isActive={isActive}/>
                    )
                })
            }
        </ul>
                
    </div>
      )
}

TodoTabs.propTypes={
    tabs : PropTypes.array,
    selectedTab : PropTypes.string,
    onTabClick : PropTypes.func
}

export default TodoTabs