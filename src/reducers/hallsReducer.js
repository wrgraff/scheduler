import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'HALLS_SESSIONS':
            return { ...state, ..._.mapKeys(action.payload, 'id')};

        default:
            return state;
    };
};
