import React, { Component, Fragment } from 'react';
import '../../App.css';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/auth';

class Header extends Component {
    state = {
        signIn: true,
    };
    render() {
        const { user, dispatch, history } = this.props;
        return (
            <nav className="nav justify-content-center align-items-center">
                <NavLink to="/" exact className="btn nav-btn" activeClassName="nav-active">
                    Home
                </NavLink>
                <NavLink to="/add" className="btn nav-btn" activeClassName="nav-active">
                    New Question
                </NavLink>
                <NavLink to="/leaderboard" className="btn nav-btn" activeClassName="nav-active">
                    Leader Board
                </NavLink>
                {user !== null && (
                    <Fragment>
                        <div className="text-dark px-3">
                            {user.name}
                            <img src={user.avatarURL} alt="logo" className="pl-2 img-fluid" />
                        </div>
                        <button
                            className="btn nav-btn"
                            onClick={() => {
                                dispatch(logoutUser());
                                history.push('/');
                            }}
                        >
                            logout
                        </button>
                    </Fragment>
                )}
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    const { loginUser } = auth;
    return {
        user: loginUser == null ? null : loginUser,
    };
}

export default withRouter(connect(mapStateToProps)(Header));
