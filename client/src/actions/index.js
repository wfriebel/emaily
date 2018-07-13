import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
    const { data: user } = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: user });
};

export const handleToken = (token) => async dispatch => {
    const { data } = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: data });
}