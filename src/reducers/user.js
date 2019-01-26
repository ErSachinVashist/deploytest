
export const User =(state = {name:'Sachin'}, action)=> {
    switch (action.type) {
        case 'currentUser': return action.payload;
        default: return state;
    }
}

