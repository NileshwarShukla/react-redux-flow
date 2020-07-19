import React from "react";
import axios from "axios";
import { connect } from 'react-redux';
import  Actions from './actions';

class GridLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  onClick =(person)=>
  {
     this.props.dispatch(Actions.highLight(person));
  }
  render()
  {
    return (
      <div>
      <table className={"grid"}>

       {
         this.props.persons.map((person, index) => {
         return ( <tr onClick={e=>this.onClick(person)}>
          <td>{person.name}</td>
          <td>{person.email}</td>
          <td>{person.phone}</td>
          <td>{person.website}</td>
          <td>{person.selectedVal}</td>
          </tr>);
         })
    
      }
       </table>
      </div>
    )
  }
}
const mapstateToProps=(state, ownProps)=>
{ 
  return { persons:state.tiles.persons}
};
const mapDispatchToProps=(dispatch, ownProps)=>
{
  return {
    dispatch
    }
}
export default connect(mapstateToProps,mapDispatchToProps)( GridLayout)