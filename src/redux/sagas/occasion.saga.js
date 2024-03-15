import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchOccasions() {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
        const response = yield axios.get('/api/occasion', config);
        yield put({ type: 'SET_OCCASION', payload: response.data });
      } catch (error) {
        console.log('GET /api/occasion request failed:', error);
      }
    }

function* AddOccasion(action) {
    console.log('added occasion payload:', action.payload)
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
        yield axios.post('/api/occasion', action.payload, config);
        yield put({type: 'FETCH_OCCASIONS'});
        yield put({ type: 'SET_OCCASION', payload: action.payload});
      } catch (error) {
        console.log('POST /api/occasion request failed:', error);
      }
    }

function* DeleteOccasion (action) {
    console.log('deleted occasion payload:', action.payload)
    try{
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
        yield axios.delete(`/api/occasion/${action.payload}`, config);
        console.log('action.payload', action.payload);
        yield put({type: 'FETCH_OCCASIONS'});
    }catch (error) {
        console.log('DELETE /api/occasion request failed:', error);
    }
}

function* occasionSaga() {
    yield takeLatest('FETCH_OCCASIONS', fetchOccasions);
    yield takeLatest('ADD_OCCASION', AddOccasion);
    yield takeLatest('DELETE_OCCASION', DeleteOccasion);
  }

export default occasionSaga;