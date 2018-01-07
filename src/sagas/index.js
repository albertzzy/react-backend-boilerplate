import {takeLatest,put } from 'redux-saga/effects';
import axios from 'axios';

function* getlist(){
    let res = yield axios.get('/getlist')
    yield put({type:'SAVE_LIST',payload:res.data.data});

}



export function* rootSaga() {
    yield takeLatest('GET_LIST', getlist)
}
