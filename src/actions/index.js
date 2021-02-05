import dataBase from '../apis/dataBase';
import history from '../history';

export const fetchSessions = async dispatch => {
    const response = await dataBase.get('/sessions');

    dispatch({
        type: 'FETCH_SESSIONS',
        payload: response.data
    });
};

export const fetchSession = async (dispatch, id) => {
    const response = await dataBase.get(`/sessions/${id}`);

    dispatch({
        type: 'FETCH_SESSION',
        payload: response.data
    });
};

export const addSession = async (dispatch, formValues) => {
    const { isActive, date, sessionType, trainer, hall, timeStart, timeEnd, special, isPaid, isCancelled } = formValues;
    const response = await dataBase.post('/sessions', {
        isActive,
        date,
        sessionType,
        trainer,
        hall,
        time: {
            start: timeStart,
            end: timeEnd
        },
        labels: {
            special, isPaid, isCancelled
        }
    });

	dispatch({
		type: 'ADD_SESSION',
		payload: response.data
	});
	
	history.push('/');
};

export const editSession = async (dispatch, id, formValues) => {
    const values = Object.entries(formValues).reduce((result, [key, value]) => {
        if (key === 'timeStart') {
            if (!result.time) result.time = {};
            result.time.start = value;
        } else if (key === 'timeEnd') {
            if (!result.time) result.time = {};
            result.time.end = value;
        } else if (key === 'special' || key === 'isPaid' || key === 'isCancelled') {
            if (!result.labels) result.labels = {};
            result.labels[key] = value;
        } else {
            result[key] = value;
        }
 
        return result;
    }, {})
    

    const response = await dataBase.patch(`/sessions/${id}`, values);

	dispatch({
		type: 'EDIT_SESSION',
		payload: response.data
	});
	
	history.push('/');
};

export const deleteSession = async (dispatch, id) => {
    dataBase.delete(`/sessions/${id}`);

    dispatch({
        type: 'DELETE_SESSION',
        payload: id
    });

	history.push('/');
};

export const fetchDays = async dispatch => {
    const response = await dataBase.get('/days');

    dispatch({
        type: 'FETCH_DAYS',
        payload: response.data
    });
};

export const selectActiveDate = (dispatch, activeDate) => {
    dispatch({
        type: 'SELECT_ACTIVE_DATE',
        payload: activeDate
    });
};

export const fetchSessionTypes = async dispatch => {
    const response = await dataBase.get('/sessionTypes');

    dispatch({
        type: 'FETCH_SESSION_TYPES',
        payload: response.data
    });
};

export const fetchTrainers = async dispatch => {
    const response = await dataBase.get('/trainers');

    dispatch({
        type: 'FETCH_TRAINERS',
        payload: response.data
    });
};

export const fetchHalls = async dispatch => {
    const response = await dataBase.get('/halls');

    dispatch({
        type: 'FETCH_HALLS',
        payload: response.data
    });
};
