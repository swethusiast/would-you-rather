import React from 'react';
import { connect } from 'react-redux';
import '../../../App.css';
import QuestionCard from './userCard';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
    state = {
        answered: false,
    };

    handleClick = () => {
        this.setState((state, props) => ({ answered: !state.answered }));
    };

    openQuestions = (id) => {
        this.props.history.push(`/questions/${id}`);
    };
    render() {
        const { answered, unanswered } = this.props;
        const questions = this.state.answered ? answered : unanswered;
        return (
            <div className="container">
                <div className="row my-5 justify-content-center">
                    <div className="col-md-12 text-center">
                        {this.state.answered ? (
                            <button className="btn btn-outline-primary" onClick={this.handleClick}>
                                unanswered Questions
                            </button>
                        ) : (
                            <button className="btn btn-outline-danger" onClick={this.handleClick}>
                                answered Questions
                            </button>
                        )}
                    </div>

                    <div className="col-md-7">
                        {Object.keys(questions).map((key, question) => (
                            <QuestionCard
                                author={this.props.users[questions[key].author]}
                                openQuestions={this.openQuestions}
                                id={questions[key].id}
                                answered={this.state.answered}
                                key={key}
                                optionOne={questions[key].optionOne.text}
                                optionTwo={questions[key].optionTwo.text}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

function getAnswered(o1, o2) {
    return Object.keys(o1)
        .sort((a, b) => o1[b].timestamp - o1[a].timestamp)
        .filter((k) => k in o2)
        .reduce((obj, key) => {
            obj[key] = o1[key];
            return obj;
        }, {});
}
function getNotAnswered(o1, o2) {
    return Object.keys(o1)
        .sort((a, b) => o1[b].timestamp - o1[a].timestamp)
        .filter((k) => !(k in o2))
        .reduce((obj, key) => {
            obj[key] = o1[key];
            return obj;
        }, {});
}

function mapStateToProps({ questions, auth }) {
    const { loginUser, users } = auth;
    const answered = getAnswered(questions, loginUser.answers);
    const unanswered = getNotAnswered(questions, loginUser.answers);

    return {
        users,
        answered,
        unanswered,
    };
}

export default withRouter(connect(mapStateToProps)(Home));
