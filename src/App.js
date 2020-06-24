import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from './components/common/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import LeaderBoard from './components/pages/LeaderBoard';
import NewQuestion from './components/pages/NewQuestion';
import SignIn from './components/pages/SignIn';
import questions from './components/pages/question';
import { getUsers } from './actions/auth';
import { handleGetQuestions } from './actions/question';
class App extends Component {
    componentDidMount() {
        this.props.getUsers();
        this.props.handleGetQuestions();
    }

    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header />

                    {this.props.login === true ? (
                        <Route path="/" component={SignIn} />
                    ) : (
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/add" component={NewQuestion} />
                            <Route path="/leaderboard" component={LeaderBoard} />
                            <Route path="/questions/:id" component={questions} />
                        </Switch>
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

export default connect(mapStateToProps, { getUsers, handleGetQuestions })(App);
