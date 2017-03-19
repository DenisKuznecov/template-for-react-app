export default function getData() {
    return {
        type: 'FETCHING_DATA'
    };
}

export default function getDataSuccess(data) {
    return {
        type: 'FETCHING_DATA_SUCCESS',
        data
    };
}

export default function getDataFailure() {
    return {
        type: 'FETCHING_DATA_FAILURE'
    }
}