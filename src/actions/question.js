import { getUsers } from './auth';
import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_QUESTIONS_FAIL = 'GET_QUESTIONS_FAIL';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SAVE_QUESTION_SUCCESS = 'SAVE_QUESTION_SUCCESS';
export const SAVE_QUESTION_FAIL = 'SAVE_QUESTION_FAIL';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';
export const SAVE_QUESTION_ANSWER_SUCCESS = 'SAVE_QUESTION_ANSWER_SUCCESS';
export const SAVE_QUESTION_ANSWER_FAIL = 'SAVE_QUESTION_ANSWER_FAIL';
export const fetchQuestions = (questions) => ({
    type: GET_QUESTIONS,
    payload: questions,
});
export const getQuestions = () => (dispatch) => {
    return _getQuestions()
        .then((resp) => {
            dispatch(fetchQuestions(resp));
        })
        .catch((err) => {
            alert(err.message);
        });
};

export const saveQuestion = (author, optionOneText, optionTwoText) => async (dispatch) => {
    dispatch({ type: SAVE_QUESTION });
    try {
        const data = _saveQuestion({ optionOneText, optionTwoText, author });
        await dispatch(getQuestions());
        await dispatch(getUsers());
        dispatch({ type: SAVE_QUESTION_SUCCESS, payload: data });
    } catch (err) {
        dispatch({ type: SAVE_QUESTION_FAIL, payload: err.message });
        alert("can't save qustion  answear, try again ");
    }
};

export const saveQuestionAnswer = (authedUser, qid, answer) => async (dispatch) => {
    dispatch({ type: SAVE_QUESTION_ANSWER });
    try {
        await _saveQuestionAnswer({ authedUser, qid, answer });
        await dispatch(getUsers());
        await dispatch(getQuestions());
        dispatch({ type: SAVE_QUESTION_ANSWER_SUCCESS });
    } catch (err) {
        dispatch({ type: SAVE_QUESTION_ANSWER_FAIL, payload: err.message });
        alert(err.message);
    }
};
