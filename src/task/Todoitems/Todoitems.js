import React from 'react'

const TodoItems= (props) => {
    const {items,deleteItem} = props;
    let length=items.length;
    const ListItems =length ? (
    
    items.map(item => {
        return(
            <div key={item.id}>
             <span className="name">Service Title</span>
            <span className="name">{item.name}</span>
           
         
            <span className="action icon" onClick={()=> deleteItem(item.id)}>&times;</span>
            </div>
        )
    })
    ) : (
        <p>There is no Services to show</p>
    )
return(
    <div className="container ListItems">
        <div>
           
           
          
        </div>

       {ListItems}
    </div> 
)
}

export default TodoItems
