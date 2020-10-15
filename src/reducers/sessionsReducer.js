import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_SESSIONS':
        case 'ADD_SESSION':
            return { ...state, ..._.mapKeys(action.payload, 'id')};

        default:
            return state;
    };
};
