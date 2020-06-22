import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../App.css';
import Background from '../../../images/logo.png';
import { getUsers, loginUser } from '../../../actions/auth';
class signIn extends Component {
    state = {
        user: '',
    };
    componentDidMount() {
        this.props.getUsers();
    }

    signin = () => {
        this.props.loginUser(this.props.users[this.state.user]);
    };
    render() {
        const { user } = this.state;
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>Welcome To would you rather App</h5>
                            </div>
                            <div className="text-center">
                                <img src={Background} alt="logo" className="card-img-top w-25" />
                            </div>
                            <div className="card-body text-center">
                                <h1 className="mb-3">Sign In</h1>
                                <select
                                    className="form-control"
                                    value={user}
                                    onChange={(e) => this.setState({ user: e.target.value })}
                                >
                                    <option value={''} disabled>
                                        chose user
                                    </option>
                                    {Object.keys(this.props.users).map((key, user) => (
                                        <option key={key} value={key}>
                                            {key}
                                        </option>
                                    ))}
                                </select>

                                <button
                                    onClick={this.signin}
                                    disabled={!user}
                                    className="btn btn-primary btn-block mt-3"
                                >
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    const { users } = auth;
    return {
        users,
    };
}

export default connect(mapStateToProps, { getUsers, loginUser })(signIn);
