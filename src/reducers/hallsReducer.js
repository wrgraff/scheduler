import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_HALLS':
            return { ...state, ..._.mapKeys(action.payload, 'id')};

        case 'ADD_HALL':
        case 'EDIT_HALL':
            return { ...state, [action.payload.id]: action.payload};

        case 'DELETE_HALL':
            return _.omit(state, action.payload);

        default:
            return state;
    };
};
