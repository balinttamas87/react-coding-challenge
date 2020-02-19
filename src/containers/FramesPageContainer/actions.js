import {
    FETCHING_FRAMES,
    FETCH_FRAMES_SUCCESS,
    FETCH_FRAMES_FAILURE,

    SELECT_FRAME,

    COPY_FRAME,
    
    RESET_ERROR
} from './constants';

import { mockFetch } from '../../../src/back-end/server';

const fetchingFrames = () => ({
    type: FETCHING_FRAMES
});

const fetchFramesSuccess = (payload) => ({
    type: FETCH_FRAMES_SUCCESS,
    payload
});

const fetchFramesFailure = error => ({
    type: FETCH_FRAMES_FAILURE,
    error
});

export const fetchFrames = () => dispatch => {

    dispatch(fetchingFrames());

    return Promise.all([
        mockFetch('/variant'),
        mockFetch('/columns')
    ]).then(res => dispatch(fetchFramesSuccess(res)),
            error => { console.log({error}); dispatch(fetchFramesFailure(error)); })
    .catch(error => {
        dispatch(fetchFramesFailure(error));
    });

}

export const selectFrame = (frameIndex) => ({
    type: SELECT_FRAME,
    selectedFrame: frameIndex
});

export const copyFrame = () => ({
    type: COPY_FRAME
});

export const resetError = () => ({
    type: RESET_ERROR
});