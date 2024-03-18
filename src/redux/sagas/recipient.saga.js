import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchRecipients() {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
        const response = yield axios.get('/api/recipient', config);
        yield put({ type: 'SET_RECIPIENT', payload: response.data });
      } catch (error) {
        console.log('GET /api/recipient request failed:', error);
      }
    }

function* AddRecipient(action) {
    console.log('added occasion payload:', action.payload)
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
        yield axios.post('/api/recipient', action.payload, config);
        yield put({type: 'FETCH_RECIPIENTS'});
        yield put({ type: 'SET_RECIPIENT', payload: action.payload});
      } catch (error) {
        console.log('POST /api/recipient request failed:', error);
      }
    }

function* DeleteRecipient (action) {
    console.log('deleted recipient payload:', action.payload)
    try{
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
        yield axios.delete(`/api/recipient/${action.payload}`, config);
        console.log('action.payload', action.payload);
        yield put({type: 'FETCH_RECIPIENTS'});
    }catch (error) {
        console.log('DELETE /api/recipient request failed:', error);
    }
}

function* recipientSaga() {
    yield takeLatest('FETCH_RECIPIENTS', fetchRecipients);
    yield takeLatest('ADD_RECIPIENT', AddRecipient);
    yield takeLatest('DELETE_RECIPIENT', DeleteRecipient);
  }

export default recipientSaga;