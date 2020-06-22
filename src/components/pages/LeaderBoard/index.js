import React from 'react'
import { connect } from 'react-redux';
import UserCard from './UserCard';


class LeaderBoard extends React.Component {


  render() {
    return (
      <div style={Styles.container}>
        <div className="ripple" />
        {this.props.users.map((user) => (
          <UserCard image={user.avatarURL} name={user.name} answerQustions={Object.keys(user.answers).length} createQustions={user.questions.length} points={user.points} />
        ))}
      </div>

    );
  }
}

const Styles = { container: { dispaly: "flex", flex: 1, }, }
const getuserpoints = (users) => (
  Object.keys(users).map((user) => {
    var NewUsers = {}
    let points = Object.keys(users[user].answers).length + users[user].questions.length
    NewUsers[points] = { ...users[user], points: points }
    return NewUsers[points]
  }).sort((a, b) => (a.points < b.points) ? 1 : -1)
)


function mapStateToProps({ auth }) {
  const { users } = auth;
  return {
    users: getuserpoints(users)

  }
}

export default connect(mapStateToProps)(LeaderBoard)