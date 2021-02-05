import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_SESSION_TYPES':
            return { ...state, ..._.mapKeys(action.payload, 'id')};

        case 'ADD_SESSION_TYPE':
        case 'EDIT_SESSION_TYPE':
            return { ...state, [action.payload.id]: action.payload};

        case 'DELETE_SESSION_TYPE':
            return _.omit(state, action.payload);
        
        default:
            return state;
    };
};
