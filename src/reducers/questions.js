import {
    GET_QUESTIONS,
    SAVE_QUESTION,
    SAVE_QUESTION_ANSWER,
    SAVE_QUESTION_ANSWER_FAIL,
    SAVE_QUESTION_ANSWER_SUCCESS,
    SAVE_QUESTION_FAIL,
    SAVE_QUESTION_SUCCESS,
} from '../actions/question';
const initial_state = {
    allQuestions: {},
    questionAnswerState: '',
};

export default function questions(state = initial_state, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return { ...state, allQuestions: action.payload };
        case SAVE_QUESTION:
            return { ...state, questionState: 'loading' };
        case SAVE_QUESTION_SUCCESS:
            return { ...state, questionState: 'success' };
        case SAVE_QUESTION_FAIL:
            return { ...state, questionState: 'fail' };

        case SAVE_QUESTION_ANSWER:
            return { ...state, questionAnswerState: 'loading' };
        case SAVE_QUESTION_ANSWER_SUCCESS:
            return { ...state, questionAnswerState: 'success' };
        case SAVE_QUESTION_ANSWER_FAIL:
            return { ...state, questionAnswerState: 'fail' };
        default:
            return state;
    }
}
