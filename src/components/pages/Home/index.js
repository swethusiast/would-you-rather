import React from 'react';
import { connect } from 'react-redux';
import '../../../App.css';
import QuestionCard from './userCard';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answered: false,
        };
    }

    handleClick = () => {
        this.setState((state, props) => ({ answered: !state.answered }));
    };

    openQustions = (id) => {
        this.props.history.push(`/questions/${id}`);
    };
    render() {
        const { answered, unanswered } = this.props;
        const questions = this.state.answered ? answered : unanswered;

        return (
            <div>
                {this.state.answered ? (
                    <button onClick={this.handleClick}>unasewered Qustion</button>
                ) : (
                    <button onClick={this.handleClick}>Asewered Qustion</button>
                )}

                <div style={Styles.container}>
                    {Object.keys(questions).map((key, qustion) => (
                        <QuestionCard
                            author={this.props.users[questions[key].author]}
                            openQustions={this.openQustions}
                            id={questions[key].id}
                            answered={this.state.answered}
                            key={key}
                            subTitle={questions[key].optionOne.text}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

const Styles = {
    container: {
        paddingTop: 20,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 300,
        flexDirection: 'column',
    },
};

function getAnswered(o1, o2) {
    return Object.keys(o1).filter((k) => k in o2).reduce((obj, key) => {
        obj[key] = o1[key];
        return obj;
    }, {});
}
function getNotAnswered(o1, o2) {
    return Object.keys(o1).filter((k) => !(k in o2)).reduce((obj, key) => {
        obj[key] = o1[key];
        return obj;
    }, {});
}

function mapStateToProps({ questions, auth }) {
    const { loginUser, users } = auth;
    const answered = getAnswered(questions.allQuestions, loginUser.answers);
    const unanswered = getNotAnswered(questions.allQuestions, loginUser.answers);
    return {
        users,
        answered,
        unanswered,
    };
}

export default withRouter(connect(mapStateToProps)(Home));
