import { Fragment, useEffect, useState } from "react";
import  "./style.css";

export default function ListGroup(props){

  const{ items, textProperty, valueProperty, selectedItem, onItemSelect } = props;
   
  ListGroup.defaultProps = {textProperty :"name",
                            valueProperty: "id" 
                           }
  // مقادیر پیش فرض برای اسم و شناسه جهت نمایش در لیست است.                          
                     
  function loopItems() {
    return(
         items.map(function(item) {
          return(<li onClick={()=>{onItemSelect(item)}}
                     key={item[valueProperty]}
                     className={item === selectedItem? "list-group-item active" : "list-group-item"}
                  >{item.name}</li>)
              }
          )
    );
   }      
  return (
    <Fragment>
        <ul className="list-group">
           {loopItems()}           
        </ul>
     </Fragment>
  );
};


