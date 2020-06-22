import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveQuestionAnswer } from '../../../actions/question';
import Result from './result';
import QuestionPoll from './questionPoll';
import '../../../App.css';
import { withRouter } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
            answers: false,
        };
    }
    handleOptionChange = (value) => {
        this.setState({
            selectedOption: value,
        });
    };
    savaQustion = async () => {
        await this.props.saveQuestionAnswer(this.props.user.id, this.props.qustion.id, this.state.selectedOption);
    };
    render() {
        if (this.props.qustion == null) {
            return <div>error 404</div>;
        }
        if (this.props.Qstate) {
            return (
                <Result
                    qustion={this.props.qustion}
                    author={this.props.author}
                    sulotion={this.props.user.answers[this.props.qustion.id]}
                />
            );
        }
        return (
            <QuestionPoll
                qustion={this.props.qustion}
                author={this.props.author}
                handleOptionChange={this.handleOptionChange}
                selectedOption={this.state.selectedOption}
                onSubmit={this.savaQustion}
            />
        );
    }
}

function mapStateToProps({ auth, qustions }, props) {
    const { id } = props.match.params;
    const { loginUser, users } = auth;
    const { AllQustions } = qustions;

    return {
        users,
        qustion: AllQustions[id],
        author: AllQustions[id] == null ? null : users[AllQustions[id].author],
        user: loginUser,
        Qstate: Object.keys(loginUser.answers).find((Qid) => Qid === id) !== undefined,
    };
}

export default withRouter(connect(mapStateToProps, { saveQuestionAnswer })(Home));
