import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../App.css';
import { saveQuestion } from '../../../actions/question';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionOneText: '',
            optionTwoText: '',
        };
    }

    handleOptionOneChange = (changeEvent) => {
        this.setState({
            optionOneText: changeEvent.target.value,
        });
    };
    handleOptionTwoChange = (changeEvent) => {
        this.setState({
            optionTwoText: changeEvent.target.value,
        });
    };
    onSubmit = async () => {
        try {
            this.setState({
                optionOneText: '',
                optionTwoText: '',
            });
            await this.props.saveQuestion(this.props.user.id, this.state.optionOneText, this.state.optionTwoText);
        } catch (e) {
            alert('error on add qustion try again ');
        }
    };
    render() {
        return (
            <div style={Styles.container}>
                <div className="w3-card-2" style={Styles.card}>
                    <div className="w3-card" style={Styles.cardHeder}>
                        {'Titel'}
                    </div>
                    <div style={Styles.cardSectionContainer}>
                        <h3>complete the qustions </h3>
                        <h2>would you rather ...</h2>
                        <input
                            value={this.state.optionOneText}
                            onChange={this.handleOptionOneChange}
                            style={Styles.input}
                            className="w3-input"
                            type="text"
                            placeholder="enter option One"
                        />
                        <h4> OR </h4>
                        <input
                            value={this.state.optionTwoText}
                            onChange={this.handleOptionTwoChange}
                            style={Styles.input}
                            className="w3-input"
                            type="text"
                            placeholder="enter option Two"
                        />
                        <button onClick={this.onSubmit} style={Styles.button} className="w3-button">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const Styles = {
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        minHeight: 300,
        padding: 20,
    },
    bareContaioner: {
        display: 'flex',
        width: '80%',
        height: 40,
        alignItems: 'center',
        marginRight: 10,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#b0003a',
        borderRadius: '10px',
        marginLeft: 30,
    },
    card: {
        flex: 1,
        maxWidth: '750px',
        borderRadius: 1,
    },
    cardHeder: {
        borderWidth: 2,
        borderButtomRightRadius: 30,
        backgroundColor: '#6a4f4b',
        minHeight: 60,
        marginBottom: 6,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '500',
    },
    cardSectionContainer: {
        marginBottom: 20,
        marginTop: 20,

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        display: 'flex',
        marginRight: 10,
        marginLeft: 10,
    },
    input: {
        borderWidth: '2px',
        borderColor: '#b0003a',
    },
    button: {
        marginTop: 20,
        flex: 1,
        backgroundColor: '#b0003a',
        borderRadius: 20,
        width: '50%',
        color: 'white',
    },
};

function mapStateToProps({ auth }) {
    return {
        user: auth.loginUser,
    };
}

export default connect(mapStateToProps, { saveQuestion })(Home);
