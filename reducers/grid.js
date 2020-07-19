import Actions from '../actions'
import InitState from '../InitState'

const grid = (state = InitState, action) => {
  switch (action.type) {
    case 'LOAD_GRID':
        let persons = this.state.persons;
        return persons;
     case 'HIGHLIGHT_PERSON2':
         const persons = [ ...this.state.persons.map(a=> ({...a, isFlyoutOpened:false}))];
        const updatedPerson = persons.filter(x => x.id == action.id)[0];
        updatedPerson.isFlyoutOpened = true;
         const updatestate={...state,persons:persons}
        return updatestate;      
    default:
      return state
  }
}

export default grid
