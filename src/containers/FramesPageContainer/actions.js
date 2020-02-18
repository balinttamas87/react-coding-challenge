import {
    FETCHING_VARIANT,
    FETCH_VARIANT_SUCCESS,
    FETCH_VARIANT_FAILURE,

    FETCHING_COLUMNS,
    FETCH_COLUMNS_SUCCESS,
    FETCH_COLUMNS_FAILURE
} from './constants';

import { mockFetch } from '../../../src/back-end/server';

const fetchingVariant = () => ({
    type: FETCHING_VARIANT
});

const fetchVariantSuccess = (payload) => ({
    type: FETCH_VARIANT_SUCCESS,
    payload
});

const fetchVariantFailure = error => ({
    type: FETCH_VARIANT_FAILURE,
    error
});

export const fetchVariant = () => dispatch => {

    dispatch(fetchingVariant());

    return mockFetch('/variant')
        .then(data => dispatch(fetchVariantSuccess(data)))
        .catch(error => {
            dispatch(fetchVariantFailure(error));
        });

};

const fetchingColumns = () => ({
    type: FETCHING_COLUMNS
});

const fetchColumnsSuccess = (payload) => ({
    type: FETCH_COLUMNS_SUCCESS,
    payload
});

const fetchColumnsFailure = error => ({
    type: FETCH_COLUMNS_FAILURE,
    error
});

export const fetchColumns = () => dispatch => {

    dispatch(fetchingColumns());

    return mockFetch('/columns')
        .then(data => dispatch(fetchColumnsSuccess(data)))
        .catch(error => {
            dispatch(fetchColumnsFailure(error));
        });

};