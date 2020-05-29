export const catReducer = (state, action) => {
    var list = JSON.parse(localStorage.getItem('cats'))

    switch (action.type) {
        case "INSERT":
            list.push(action.payload)
            localStorage.setItem('cats', JSON.stringify(list))
            return {list:list, currentIndex: -1}

        case "UPDATE":
            list[state.currentIndex] = action.payload;
            localStorage.setItem('cats', JSON.stringify(list))
            return {list:list, currentIndex: -1}

        case "DELETE":
            list.splice(action.payload,1)
            localStorage.setItem('cats', JSON.stringify(list))
            return {list:list, currentIndex: -1}

        case "UPDATE-INDEX":
            return {list:list, currentIndex: action.payload}

        default:
            return state;
    }
}