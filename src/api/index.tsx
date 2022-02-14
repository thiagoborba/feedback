import axios from 'axios'
import { FEEDBACK_ENDPOINT } from '../constants';
import { Feedback } from './models';

export function sendFeedback (payload: Feedback) {
  return axios.post(FEEDBACK_ENDPOINT, payload).then(res => res.data)
}