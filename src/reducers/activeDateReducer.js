export default (state = null, action) => {
    switch (action.type) {
        case 'SELECT_ACTIVE_DATE':
            return action.payload;

        default:
            return state;
    };
};
