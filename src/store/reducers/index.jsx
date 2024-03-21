
import { combineReducers } from 'redux';
import exampleReducers from './reducer.example';
import toolkitTrial from './toolkit.trial';

const rootReducers = combineReducers({
    exampleReducers,
    toolkitTrial
});

export default rootReducers;