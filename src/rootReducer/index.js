import deepFreeze from 'deep-freeze';

import {
    ACTION
} from '../constants';

const initialState = {};
deepFreeze(initialState);

const rootReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ACTION: return actOnAction(state, action);
        default: return state;
    }
};

const actOnAction = (state, action) => ({
    ...state,
    action
});

export default rootReducer;
  