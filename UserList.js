import React from "react";

const UserList =(props) => {

const handleClickTile = id => {
    props.TileClick(id);
  };

 {
    const persons = props.person;
    return (
      <div id="layout-content" className="layout-content-wrapper UserTile">
        <a href="#" onClick={e => handleClickTile(persons.id)}>
          {persons.name}
        </a>
        <div className="panel-list">
          <div>
            <h4>Name : {persons.name}</h4>
            <span>
             ID: {persons.id} <br/>
             UserId : {persons.username}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default UserList
