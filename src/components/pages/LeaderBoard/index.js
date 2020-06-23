import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';

class LeaderBoard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 my-5">
                        {this.props.users.map((user) => (
                            <UserCard
                                image={user.avatarURL}
                                name={user.name}
                                answeredQuestions={Object.keys(user.answers).length}
                                createdQuestions={user.questions.length}
                                points={user.points}
                                key={user.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

const getUserPoints = (users) =>
    Object.keys(users)
        .map((user) => {
            var NewUsers = {};
            let points = Object.keys(users[user].answers).length + users[user].questions.length;
            NewUsers[points] = { ...users[user], points: points };
            return NewUsers[points];
        })
        .sort((a, b) => (a.points < b.points ? 1 : -1));

function mapStateToProps({ auth }) {
    const { users } = auth;
    return {
        users: getUserPoints(users),
    };
}

export default connect(mapStateToProps)(LeaderBoard);
