import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../App.css';
import { handleSaveQuestion } from '../../../actions/question';

class Home extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
    };
    handleOptionOneChange = (changeEvent) => {
        this.setState({
            optionOne: changeEvent.target.value,
        });
    };
    handleOptionTwoChange = (changeEvent) => {
        this.setState({
            optionTwo: changeEvent.target.value,
        });
    };
    onSubmit = () => {
        const { optionOne, optionTwo } = this.state;

        this.props
            .handleSaveQuestion(this.props.user.id, optionOne, optionTwo)
            .then((resp) => {
                this.setState({
                    optionOne: '',
                    optionTwo: '',
                });
                this.props.history.push('/');
            })
            .catch((e) => {
                alert('error while adding question answer options, try again.');
            });
    };
    render() {
        const { optionOne, optionTwo } = this.state;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 my-5">
                        <div className="card">
                            <div className="card-header text-center">Create New Question</div>
                            <div className="card-body">
                                <p>complete the question: </p>
                                <h3>would you rather ...</h3>
                                <input
                                    value={optionOne}
                                    onChange={this.handleOptionOneChange}
                                    className="form-control"
                                    type="text"
                                    placeholder="enter option One"
                                />
                                <h5 className="text-center my-2"> OR </h5>
                                <input
                                    value={optionTwo}
                                    onChange={this.handleOptionTwoChange}
                                    className="form-control"
                                    type="text"
                                    placeholder="enter option Two"
                                />
                                <button
                                    onClick={this.onSubmit}
                                    disabled={!optionOne || !optionTwo}
                                    className="btn btn-primary btn-block mt-3"
                                >
                                    Submit
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
    return {
        user: auth.loginUser,
    };
}

export default connect(mapStateToProps, { handleSaveQuestion })(Home);
