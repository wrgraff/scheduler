import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_SESSION_TYPES':
            return { ...state, ..._.mapKeys(action.payload, 'id')};

        default:
            return state;
    };
};
