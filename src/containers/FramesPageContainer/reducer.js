import deepFreeze from 'deep-freeze';
import { snakeToCamelCase } from '../../../src/util/snakeToCamelCase';

import {
    FETCHING_FRAMES,
    FETCH_FRAMES_SUCCESS,
    FETCH_FRAMES_FAILURE
} from './constants';

const initialState = {};
deepFreeze(initialState);

const rootReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case FETCHING_FRAMES: return fetchingFrames(state, action);
        case FETCH_FRAMES_SUCCESS: return fetchFramesSuccess(state, action);
        case FETCH_FRAMES_FAILURE: return fetchFramesFailure(state, action);
        default: return state;
    }
};

const fetchingFrames = (state, action) => ({
    ...state,
    isFetchingFrames: true,
    isFetchingFramesError: false
});

const fetchFramesSuccess = (state, action) => {
    const payload = snakeToCamelCase(action.payload);
    
    let variant;
    let columns;

    const isVariantResponse = !!payload[0].body.creativeList;

    if (isVariantResponse) {
        variant = payload[0];
        columns = payload[1];
    } else {
        variant = payload[1];
        columns = payload[0]; 
    }

    const frames = variant.body.creativeList[0].workingData.frames;

    const getColumnsToDisplay = (columns, frameId) => {
        return columns.body
                .filter((column) => column.parentFrameId === frameId)
                .filter(column => !column.isHidden);
    };

    const tableData = {
        firstFrameData: {
            columns: getColumnsToDisplay(columns, frames.first.frameId),
            row: getColumnsToDisplay(columns, frames.first.frameId)
                .map((column) => {
                    return { [column.keyName]: frames.first.content[column.keyName] };
                }),
            frameContent: frames.first.content
        },
        firstInMiddleFrameData: {
            columns: getColumnsToDisplay(columns, frames.middle[0].frameId),
            row: getColumnsToDisplay(columns, frames.first.frameId)
            .map((column) => {
                return { [column.keyName]: frames.middle[0].content[column.keyName] };
            }),
            frameContent: frames.middle[0].content
        },
        secondInMiddleFrameData: {
            columns: getColumnsToDisplay(columns, frames.middle[1].frameId),
            row: getColumnsToDisplay(columns, frames.first.frameId)
            .map((column) => {
                return { [column.keyName]: frames.middle[1].content[column.keyName] };
            }),
            frameContent: frames.middle[1].content
        },
        // thirdInMiddleFrameData: {
        //     columns,
        //     row: frames.middle[2].content
        // },
        lastFrameData: {
            columns: getColumnsToDisplay(columns, frames.last.frameId),
            row: getColumnsToDisplay(columns, frames.first.frameId)
                .map((column) => {
                    return { [column.keyName]: frames.last.content[column.keyName] };
                }),
            frameContent: frames.last.content
        }
    };

    return {
        ...state,
        tableData,
        isFetchingFrames: false,
        isFetchingFramesError: false
    }

};

const fetchFramesFailure = (state, { error }) => ({
    ...state,
    error,
    isFetchingFrames: false,
    isFetchingFramesError: true
});

export default rootReducer;
  