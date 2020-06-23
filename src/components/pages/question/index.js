import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveAnswer, handleGetQuestions } from '../../../actions/question';
import { getUsers } from '../../../actions/auth';
import Result from './result';
import QuestionPoll from './questionPoll';
import '../../../App.css';
import { withRouter } from 'react-router-dom';

class Home extends Component {
    state = {
        selectedOption: '',
        answers: false,
    };
    handleOptionChange = (value) => {
        this.setState({
            selectedOption: value,
        });
    };
    saveQuestion = () => {
        const { handleSaveAnswer, handleGetQuestions, getUsers } = this.props;
        handleSaveAnswer(this.props.user.id, this.props.question.id, this.state.selectedOption)
            .then((resp) => {
                handleGetQuestions();
                getUsers();
                this.props.history.push('/');
            })
            .catch((e) => {
                alert('error while adding question answer options, try again.');
            });
    };
    render() {
        if (this.props.question == null) {
            return <div>error 404</div>;
        }
        if (this.props.Qstate) {
            return (
                <Result
                    question={this.props.question}
                    author={this.props.author}
                    solution={this.props.user.answers[this.props.question.id]}
                />
            );
        }
        return (
            <QuestionPoll
                question={this.props.question}
                author={this.props.author}
                handleOptionChange={this.handleOptionChange}
                selectedOption={this.state.selectedOption}
                onSubmit={this.saveQuestion}
            />
        );
    }
}

function mapStateToProps({ auth, questions }, props) {
    const { id } = props.match.params;
    const { loginUser, users } = auth;

    return {
        users,
        question: questions[id],
        author: questions[id] == null ? null : users[questions[id].author],
        user: loginUser,
        Qstate: Object.keys(loginUser.answers).find((Qid) => Qid === id) !== undefined,
    };
}

export default withRouter(connect(mapStateToProps, { handleSaveAnswer, getUsers, handleGetQuestions })(Home));
