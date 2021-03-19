import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_DAYS':
            return { ...state, ..._.mapKeys(action.payload, 'id')};

        case 'ADD_DAY':
        case 'EDIT_DAY':
            return { ...state, [action.payload.id]: action.payload};

        default:
            return state;
    };
};
