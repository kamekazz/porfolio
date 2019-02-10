import { combineReducers } from 'redux';
import  model from './model';
import  nav from './nav';

export default combineReducers({
    model:model,
    nav:nav
})