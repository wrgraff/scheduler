import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_DAYS':
            return { ...state, ..._.mapKeys(action.payload, 'id')};

        case 'ADD_DAY':
        case 'EDIT_DAY':
            return { ...state, [action.payload.id]: action.payload};

        case 'DELETE_DAY':
            return _.omit(state, action.payload);

        default:
            return state;
    };
};
