import deepFreeze from 'deep-freeze';
import { snakeToCamelCase } from '../../../src/util/snakeToCamelCase';

import {
    FETCHING_VARIANT,
    FETCH_VARIANT_SUCCESS,
    FETCH_VARIANT_FAILURE,

    FETCHING_COLUMNS,
    FETCH_COLUMNS_SUCCESS,
    FETCH_COLUMNS_FAILURE
} from './constants';

const initialState = {};
deepFreeze(initialState);

const rootReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case FETCHING_VARIANT: return fetchingVariant(state, action);
        case FETCH_VARIANT_SUCCESS: return fetchVariantSuccess(state, action);
        case FETCH_VARIANT_FAILURE: return fetchVariantFailure(state, action);

        case FETCHING_COLUMNS: return fetchingColumns(state, action);
        case FETCH_COLUMNS_SUCCESS: return fetchColumnsSuccess(state, action);
        case FETCH_COLUMNS_FAILURE: return fetchColumnsFailure(state, action);
        default: return state;
    }
};

const fetchingVariant = (state, action) => ({
    ...state,
    isFetchingVariant: true,
    isFetchingVariantError: false
});

const fetchVariantSuccess = (state, action) => ({
    ...state,
    variant: snakeToCamelCase(action.payload),
    isFetchingVariant: false,
    isFetchingVariantError: false
});

const fetchVariantFailure = (state, { error }) => ({
    ...state,
    error,
    isFetchingVariant: false,
    isFetchingVariantError: true
});

const fetchingColumns = (state, action) => ({
    ...state,
    isFetchingColumns: true,
    isFetchingColumnsError: false
});

const fetchColumnsSuccess = (state, action) => ({
    ...state,
    columns: snakeToCamelCase(action.payload),
    isFetchingColumns: false,
    isFetchingColumnsError: false
});

const fetchColumnsFailure = (state, { error }) => ({
    ...state,
    error,
    isFetchingColumns: false,
    isFetchingColumnsError: true
});

export default rootReducer;
  