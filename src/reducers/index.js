import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import sessionsReducer from './sessionsReducer';
import sessionTypesReducer from './sessionTypesReducer';
import daysReducer from './daysReducer';
import trainersReducer from './trainersReducer';
import hallsReducer from './hallsReducer';

export default combineReducers({
	form: formReducer,
	sessions: sessionsReducer,
	sessionTypes: sessionTypesReducer,
	days: daysReducer,
	trainers: trainersReducer,
	halls: hallsReducer
});
