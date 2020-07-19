import React from "react";
const Flyout1 = (props) =>{ 
 
    const onInputChange = event => {    
     props.onInputChange({id:props.currentUser.id,value:event.target.value });
     }
    const change = event => {    
      props.onDropdownChange({id:props.currentUser.id,value:event.target.value });
     }

  
    return (
      <div>
        <input
          type="text"
          value={props.currentUser.inputValue}
          onChange={e=>onInputChange(e)}
        />
        <select
          name="cars"
          id="cars"
          defaultValue={props.currentUser.selectedVal}
          onChange={e=>change(e)}
        >
          {props.data.persons.map(a => (
            <option key={a.id} value={a.name}>
              {a.name}
            </option>
          ))}
        </select>
        <button
          onClick={() =>
            props.OnSave(props.currentUser.id, props.currentUser.inputValue)
          }
        >
          Save
        </button>
        <button onClick={()=> {props.OnClose(props.currentUser.id)}}>Close</button>
      </div>
    );
  
}

export default Flyout1;
