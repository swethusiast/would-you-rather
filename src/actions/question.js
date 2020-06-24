import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_QUESTIONS_FAIL = 'GET_QUESTIONS_FAIL';
export const SAVE_QUESTION = 'SAVE_QUESTION';

export const SAVE_ANSWER = 'SAVE_ANSWER';

export const getQuestions = (questions) => ({
    type: GET_QUESTIONS,
    questions,
});
export const saveQuestion = (question) => ({
    type: SAVE_QUESTION,
    question,
});
export const saveAnswer = () => ({
    type: SAVE_ANSWER,
});
export const handleGetQuestions = () => (dispatch) => {
    return _getQuestions()
        .then((resp) => {
            dispatch(getQuestions(resp));
        })
        .catch((err) => {
            alert(err.message);
        });
};

export const handleSaveQuestion = (author, optionOneText, optionTwoText) => async (dispatch) => {
    return _saveQuestion({ optionOneText, optionTwoText, author })
        .then((resp) => {
            dispatch(saveQuestion(resp));
            dispatch(getQuestions());
        })
        .catch((err) => {
            alert(err.message);
        });
};

export const handleSaveAnswer = (authedUser, qid, answer) => async (dispatch) => {
    return _saveQuestionAnswer({ authedUser, qid, answer })
        .then((resp) => {
            dispatch(saveAnswer());
            dispatch(getQuestions());
        })
        .catch((err) => {
            alert(err.message);
        });
};
