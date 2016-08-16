import {combineReducers} from 'redux';

import {
    CHANGE_SOURCE_CODE,
    FETCH_PROBLEMS,
    RESET_SOURCE_CODE,
    SUBMISSION_RESULT_RECEIVED,
    SHOW_MODAL
} from '../actions';

const jalgoArenaApp = combineReducers({
    sourceCode,
    problems,
    result,
    showModal
});

function sourceCode(state = null, action) {
    switch (action.type) {
        case CHANGE_SOURCE_CODE:
            return action.sourceCode;
        case RESET_SOURCE_CODE:
            return null;
        default:
            return state;
    }
}

function problems(state = [], action) {
    switch (action.type) {
        case FETCH_PROBLEMS:
            return action.problems;
        default:
            return state;
    }
}

function result(state = { status_code: 'WAITING' }, action) {
    switch (action.type) {
        case SUBMISSION_RESULT_RECEIVED:
            return action.result;
        default:
            return state;
    }
}

function showModal(state = { showModal: false }, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return action.showModal;
        default:
            return state;
    }
}

export default jalgoArenaApp;