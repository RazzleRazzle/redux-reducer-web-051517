export function manageFriends(state, action){
  console.log(state)
  switch(action.type) {
    case 'ADD_FRIEND': {
      return {friends: [...state.friends, {name: action.friend.name, hometown: action.friend.hometown, id: action.friend.id} ]}
    }
    case 'REMOVE_FRIEND': {
      let indexToDelete = null
        state.friends.map( (friend, index ) => {
        if (friend .id === action.id) {
          indexToDelete = index
        }
      })

      return {
        friends:
        [
          ...state.friends.slice(0, indexToDelete),
          ...state.friends.slice(indexToDelete + 1)
        ]
      }
     }
    default:
      return state
  }
}
