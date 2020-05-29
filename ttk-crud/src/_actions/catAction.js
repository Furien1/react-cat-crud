export const insert = data => {
    return {
        type : 'INSERT',
        payload : data
    }
}

export const update = data => {
    return {
        type : 'UPDATE',
        payload : data
    }
}

// sima delete nem hasznalhato mivel keyword
export const Delete = index => {
    return {
        type : 'DELETE',
        payload : index
    }
}

export const UpdateIndex = index => {
    return {
        type : 'UPDATE-INDEX',
        payload : index
    }
}
