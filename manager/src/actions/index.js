import { EMAIL_CHANGED } from './types';

export const onEmailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text,
    };
};