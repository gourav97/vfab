import {all, call, takeLatest, put} from 'redux-saga/effects';


import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';


export function* clearCartonSignOut(){
    yield put(clearCart())

}
export function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartonSignOut)
}

export function* cartSaga(){
    yield(all([call(onSignOutSuccess)]))
}