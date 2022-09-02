const initialState = [
    {
        id: 0,
        date: "Sept 2, 2022",
        place: "Boracay",
        budget: 50000,
        desc: "blablablablablablabla"
    },
    {
        id: 1,
        date: "Sept 3, 2022",
        place: "Cebu",
        budget: 35000,
        desc: "memomemoemoemoemoemoe"
    }
]

const homeReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_ENTRY":
            state = [...state, action.payload]
            return state;
        case "UPDATE_ENTRY":
            const updateState = state.map((entry) => entry.id === action.payload.id ? action.payload : entry)
            state = updateState;
            return state;
        case "DELETE_ENTRY":
            const filterEntries = state.filter((entry) => entry.id !== action.payload ? entry : null)
            state = filterEntries;
            return state
        default: return state;
    }
}

export default homeReducer;