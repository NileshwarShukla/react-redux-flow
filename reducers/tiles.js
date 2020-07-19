import Actions from '../actions';
import InitState from '../InitState'
const tiles = (state = InitState, action) => {
  switch (action.type) {
    case 'INIT_USERS':
      const updateState={...state, persons:action.results};
      return updateState

    case 'CLICK_TILE':
        const persons = [ ...state.persons.map(a=> ({...a, isFlyoutOpened:false}))];
        const updatedPerson = persons.filter(x => x.id == action.id)[0];
        updatedPerson.isFlyoutOpened = true;
         const updatestate={...state,persons:persons}
        return updatestate;        
    case 'DDR_CHANGE':
        let persons = [ ...state.persons];
        let updatedPerson = persons.filter(x => x.id == action.args.id)[0];
        updatedPerson.selectedVal=action.args.value  
        const updatestate={...state,persons:persons}
        return updatestate;
    case 'TXT_CHANGE':
        const persons = [ ...state.persons];
        const updatedPerson = persons.filter(x => x.id == action.args.id)[0];

        updatedPerson.inputValue=action.args.value ;
        const updatestate={...state,persons:persons}
        return updatestate;
    case 'SAVE_FLYOUT':
        let persons =  [ ...state.persons];
        let updatedPerson = persons.filter(x => x.id == action.id)[0];
        updatedPerson.name = updatedPerson.inputValue;
        const updatestate={...state,persons:persons}
        return updatestate;
    case 'CLOSE_FLYOUT':
        let persons =  [ ...state.persons];
        let updatedPerson = persons.filter(x => x.id == action.id)[0];
        updatedPerson.isFlyoutOpened = false;
        const updatestate={...state,persons:persons}
        return updatestate;
             case 'HIGHLIGHT_PERSON':
         const persons = [ ...state.persons.map(a=> ({...a, isFlyoutOpened:false}))];
        const updatedPerson = persons.filter(x => x.id == action.id)[0];
        updatedPerson.isFlyoutOpened = true;
         const updatestate={...state,persons:persons}
        return updatestate;  
   
    default:
      return state
  }
}

export default tiles