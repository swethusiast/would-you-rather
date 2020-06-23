import { GET_QUESTIONS, SAVE_QUESTION, SAVE_ANSWER } from '../actions/question';

export default function questions(state = {}, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return { ...state, ...action.questions };
        case SAVE_QUESTION:
            return { ...state, [action.question.id]: { ...action.question } };
        case SAVE_ANSWER:
            return { ...state };
        default:
            return state;
    }
}
