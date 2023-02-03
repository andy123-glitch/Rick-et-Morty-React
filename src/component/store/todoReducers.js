let id = 0 ;

const initialeState=[
    {
        id:1,
        title:'Enregistrer le tuto',
        completed:false,
    }
]

export const ADD_TODO_ACTION='ADD_TODO_ACTION'

export function todoReducer(state = initialeState,action) {
    switch (action.type) {
        case ADD_TODO_ACTION:
            return [...state,{id:++id,completed:false,...action.payload}]
            default:
                return state;
            break;
    }
    
}