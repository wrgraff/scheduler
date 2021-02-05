import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_TRAINERS':
            return { ...state, ..._.mapKeys(action.payload, 'id')};

        case 'ADD_TRAINER':
            return { ...state, [action.payload.id]: action.payload};

        case 'DELETE_TRAINER':
            return _.omit(state, action.payload);

        default:
            return state;
    };
};
