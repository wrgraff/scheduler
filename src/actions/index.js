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

export const addDay = async (dispatch, data) => {
    const response = await dataBase.post('/days', {
        date: data.date,
        isActive: false
    });

    dispatch({
        type: 'ADD_DAY',
        payload: response.data
    });
    
	history.push('/');
};

export const editDay = async (dispatch, id, data) => {
    const response = await dataBase.patch(`/days/${id}`, data);

    dispatch({
        type: 'EDIT_DAY',
        payload: response.data
    });
};

export const deleteDay = async (dispatch, id) => {
    dataBase.delete(`/days/${id}`);

    dispatch({
        type: 'DELETE_DAY',
        payload: id
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

export const addSessionType = async (dispatch, sessionType) => {
    const response = await dataBase.post('/sessionTypes', {
        name: sessionType
    });

    dispatch({
        type: 'ADD_SESSION_TYPE',
        payload: response.data
    });
};

export const editSessionType = async (dispatch, id, sessionType) => {
    const response = await dataBase.patch(`/sessionTypes/${id}`, {
        name: sessionType
    });

    dispatch({
        type: 'EDIT_SESSION_TYPE',
        payload: response.data
    });
};

export const deleteSessionType = async (dispatch, id) => {
    dataBase.delete(`/sessionTypes/${id}`);

    dispatch({
        type: 'DELETE_SESSION_TYPE',
        payload: id
    });
};

export const fetchTrainers = async dispatch => {
    const response = await dataBase.get('/trainers');

    dispatch({
        type: 'FETCH_TRAINERS',
        payload: response.data
    });
};

export const addTrainer = async (dispatch, trainer) => {
    const response = await dataBase.post('/trainers', {
        name: trainer
    });

    dispatch({
        type: 'ADD_TRAINER',
        payload: response.data
    });
};

export const editTrainer = async (dispatch, id, trainer) => {
    const response = await dataBase.patch(`/trainers/${id}`, {
        name: trainer
    });

    dispatch({
        type: 'EDIT_TRAINER',
        payload: response.data
    });
};

export const deleteTrainer = async (dispatch, id) => {
    dataBase.delete(`/trainers/${id}`);

    dispatch({
        type: 'DELETE_TRAINER',
        payload: id
    });
};

export const fetchHalls = async dispatch => {
    const response = await dataBase.get('/halls');

    dispatch({
        type: 'FETCH_HALLS',
        payload: response.data
    });
};

export const addHall = async (dispatch, hall) => {
    const response = await dataBase.post('/halls', {
        name: hall
    });

    dispatch({
        type: 'ADD_HALL',
        payload: response.data
    });
};

export const editHall = async (dispatch, id, hall) => {
    const response = await dataBase.patch(`/halls/${id}`, {
        name: hall
    });

    dispatch({
        type: 'EDIT_HALL',
        payload: response.data
    });
};

export const deleteHall = async (dispatch, id) => {
    dataBase.delete(`/halls/${id}`);

    dispatch({
        type: 'DELETE_HALL',
        payload: id
    });
};
