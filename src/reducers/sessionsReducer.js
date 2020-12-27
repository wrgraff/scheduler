import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_SESSIONS':
            return { ...state, ..._.mapKeys(action.payload, 'id')};

        case 'ADD_SESSION':
        case 'EDIT_SESSION':
            return { ...state, [action.payload.id]: action.payload};

        case 'DELETE_SESSION':
            return _.omit(state, action.payload);

        default:
            return state;
    };
};
