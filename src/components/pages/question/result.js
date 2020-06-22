import React from 'react';
import '../../../App.css';
import Background from '../../../images/logo.png';

export default ({ qustion, author, sulotion }) => {
    const o1 = qustion.optionOne.votes.length;
    const o2 = qustion.optionTwo.votes.length;
    const all = o1 + o2;
    const persent1 = Number((o1 / all * 100).toFixed(2));
    const persent2 = Number((o2 / all * 100).toFixed(2));
    return (
        <div style={Styles.container}>
            <div className="w3-card-2" style={Styles.card}>
                <div className="w3-card" style={Styles.cardHeder}>
                    {author.name + ' ask..'}
                </div>
                <div style={Styles.cardSectionContainer}>
                    <div
                        style={{
                            ...Styles.avatarSection,
                            backgroundImage: `url(${author.avatarURL})`,
                        }}
                    >
                        <div className="ripple" /> {/*animation at start */}
                    </div>
                    <div style={Styles.qustionSectionsContainer}>
                        <h1>{'Result :'} </h1>
                        <div style={Styles.resultSectionContainer}>
                            <div style={Styles.resultCard}>
                                {sulotion === 'optionOne' && (
                                    <div style={Styles.badgeContainer}>
                                        <div style={Styles.badge}>your choise</div>
                                    </div>
                                )}
                                <h3 style={Styles.optionTitle}> {qustion.optionOne.text} </h3>
                                <div style={{ ...Styles.bareContaioner }}>
                                    <div style={{ ...Styles.bareColorPart, width: persent1.toString() + '%' }}>
                                        <h5 style={Styles.bareText}> {persent1} % </h5>
                                    </div>
                                </div>
                                <h6>
                                    {' '}
                                    {o1} of {all}{' '}
                                </h6>
                            </div>
                            <div style={Styles.resultCard}>
                                {sulotion === 'optionTwo' && (
                                    <div style={Styles.badgeContainer}>
                                        <div style={Styles.badge}>your choise</div>
                                    </div>
                                )}
                                <h3 style={Styles.optionTitle}> {qustion.optionTwo.text} </h3>
                                <div style={Styles.bareContaioner}>
                                    <div style={{ ...Styles.bareColorPart, width: persent2.toString() + '%' }}>
                                        <h5 style={Styles.bareText}>{persent2} %</h5>
                                    </div>
                                </div>
                                <h6>
                                    {' '}
                                    {o2} of {all}{' '}
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const Styles = {
    resultSectionContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        width: '100%',
    },
    resultCard: {
        display: 'flex',
        flexDirection: 'column',
        borderWidth: '5px',
        borderStyle: 'dotted',
        borderColor: '#b0003a',
        flex: 1,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 32,
        alignItems: 'center',
    },

    badgeContainer: {
        // backgroundColor : "red",
        width: '100%',
        display: 'relative',
        height: 0,
    },
    badge: {
        width: 70,
        height: 70,

        borderRadius: 70,
        backgroundColor: 'gold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: -30,
        left: -30,
        color: 'white',
        fontWeight: '600',
    },
    optionTitle: { color: '#b0003a', fontWeight: '600' },
    bareColorPart: {
        borderRadius: '10px',
        width: '50%',
        height: 40,
        backgroundColor: '#b0003a',
    },
    bareText: {
        display: 'absolute',
        top: 0,
        left: 0,
        color: 'white',
        fontWeight: '600',
    },

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
        maxWidth: '75%',
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
        flexWrap: 'wrap',
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 5,
        marginRigt: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

        flex: 1,
    },
    avatarSection: {
        minWidth: 150,
        minHeight: 150,
        flex: 1,
        // backgroundColor: "yellow",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',

        backgroundImage: `url(${Background})`,
        paddingRight: 15,
        borderRightWidth: 2,
        borderRightColor: 'red',
        borderRightStyle: 'dotted',
    },
    qustionSectionsContainer: {
        minWidth: 300,

        marginLeft: '25px',
        display: 'flex',
        flexDirection: 'column',
        flex: 2,
        // backgroundColor: "red",
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputDive: { display: 'flex', alignItems: 'center', marginBottom: 10 },
    input: { marginTop: 5, marginRight: 10 },
    lable: { fontSize: 25 },
};
