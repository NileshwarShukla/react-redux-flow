export const dropdownChange = args => ({
  type: 'DDR_CHANGE',
  args
})

export const textChange = args => ({
  type: 'TXT_CHANGE',
  args
})

export const saveFlyOut = id => ({
  type: 'SAVE_FLYOUT',
  id
})
export const initializeUsers = results => ({
  type: 'INIT_USERS',
  results
})
export const clickTile = id => ({
  type: 'CLICK_TILE',
  id
})
export const closeFlyout = id => ({
  type: 'CLOSE_FLYOUT',
  id
})
export const loadGrid = id => ({
  type: 'LOAD_GRID',
  id
})
export const highLight= person => ({
  type: 'HIGHLIGHT_PERSON',
  id:person.id
}) 

const Actions = {
  dropdownChange,
  textChange,
  saveFlyOut,
 initializeUsers,
 clickTile,
closeFlyout,
loadGrid,
highLight
}

export default Actions;