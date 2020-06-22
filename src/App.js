import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from './components/common/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import LeaderBoard from './components/pages/LeaderBoard';
import NewQuestion from './components/pages/NewQuestion';
import SignIn from './components/pages/SignIn';
import questions from './components/pages/question';
import { getUsers } from './actions/auth';
import { getQuestions } from './actions/question';
class App extends React.Component {
    componentDidMount() {
        this.props.getUsers();
        this.props.getQuestions();
    }

    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header />

                    {this.props.login === true ? (
                        <Route path="/" component={SignIn} />
                    ) : (
                        <div className="body">
                            <Route path="/" exact component={Home} />
                            <Route path="/add" component={NewQuestion} />
                            <Route path="/leaderboard" component={LeaderBoard} />
                            <Route path="/questions/:id" component={questions} />
                        </div>
                    )}
                </Fragment>
            </BrowserRouter>
        );
    }
}

function mapStateToProps({ auth }) {
    return {
        login: auth.loginUser === null,
    };
}

export default connect(mapStateToProps, { getUsers, getQuestions })(App);
