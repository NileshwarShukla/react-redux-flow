import React from "react";
import axios from "axios";
import { connect } from 'react-redux';

import UserList from "./UserList";
import Flyout1 from "./Flyout1";
import Service from "./Services";

import  Actions from './actions';

class UserTiles extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {   
    this.GetUserDetails_V1();
  }

  GetUserDetails_V1 = async () => {
    let service = new Service();
    let result = await service.GetUserInformation();
    const persons = result.data;
    let personstemp = persons.map(x => ({ ...x, isFlyoutOpened: false,inputValue:x.name,selectedVal:x.name }));
    this.props.dispatch(Actions.initializeUsers(personstemp));
  };
  OnInputChange = event => {    
     this.props.dispatch(Actions.textChange(event));
 
  };
  OnDropdownChange = event => {    
       this.props.dispatch(Actions.dropdownChange(event));

  };
  clickTile = id => {
        this.props.dispatch(Actions.clickTile(id));

  };

  GetUserDetailsToRender = () => {
    return this.props.persons.map((person, index) => {
      if (person) {
        return (
          <div key={person.id + person.name} className={"tile-"+index%3}>
            <UserList 
              index={index}
              person={person}
              TileClick={this.clickTile}
            />
            {person.isFlyoutOpened && (
              <Flyout1
                currentUser={person}
                OnClose={this.OnClose}
                OnSave={this.OnSave}
                onInputChange={this.OnInputChange}
                onDropdownChange={this.OnDropdownChange}
                data={this.props}
              />
            )}
          </div>
        );
      }
    });
  };
  OnClose = id => {

     this.props.dispatch(Actions.closeFlyout(id));
  };

  OnSave = (id, name) => {

    this.props.dispatch(Actions.saveFlyOut(id));
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
    //  const chatThreadRef = this.chatThreadRef.current;
    //  chatThreadRef.scrollTop = chatThreadRef.scrollHeight - snapshot;
    }
  }

  render() {
    return <div>{this.GetUserDetailsToRender()}</div>;
  }
}
const mapstateToProps=(state, ownProps)=>
{ 
  return { persons:state.tiles.persons}
};
const mapDispatchToProps=(dispatch, ownProps)=>
{
  return {
    txtChange: dispatch(Actions.textChange),
    dispatch
    }
}
export default connect(mapstateToProps,mapDispatchToProps)(UserTiles)