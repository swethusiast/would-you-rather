import React from 'react'
import { connect } from 'react-redux'


const Home = ({ image, name, answerQustions, createQustions, points }) => (
    <div style={Styles.container}>

        <div className="w3-card-2" style={Styles.card}>
            <div className="w3-card" style={Styles.cardHeder}>{name} </div>
            <div style={Styles.cardSectionContainer}>
                <div style={{ ...Styles.avatarSection, backgroundImage: `url(${image})` }} >
                </div>
                <div style={Styles.qustionSectionsContainer} >
                    <div style={Styles.qustionsNumberText}>
                        <h3> {"Answer qustions....."}</h3>
                        <h2> {"  " + answerQustions}</h2>
                    </div>
                    <div style={Styles.qustionsNumberText}>
                        <h3> {"Answer qustions....."}</h3> <h2> {createQustions}</h2>
                    </div>
                </div>
                <div style={Styles.RightPartContainer}>
                    <div style={Styles.ScoreTableContiner}>
                        <div style={Styles.ScoreTableHeder}>
                            <div style={Styles.whiteText}> Score </div>
                        </div>
                        <div style={Styles.ScoreTableBody}>
                            <div style={Styles.ScoreCircle}>
                                <div style={Styles.whiteText}> {points} </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)


const Styles = {
    qustionsNumberText: {

        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "space-between",
        width: "100%"
    },
    ScoreCircle: {
        height: 50,
        width: 50,
        borderRadius: 50,
        background: "lightgreen",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    ScoreTableBody: {
        flex: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    whiteText: { color: "white" },
    ScoreTableHeder: {
        flex: 1,
        backgroundColor: "gray",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    ScoreTableContiner: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        height: "90%",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "gray"
    },
    RightPartContainer: {
        minWidth: 150,
        minHeight: 150,
        // borderLeftWidth: 2,
        // borderLeftColor: "red",
        // borderLeftStyle: "dotted",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        minHeight: 300,
        padding: 20,

    },
    bareContaioner: {

        display: "flex",
        width: "80%",
        height: 40,
        alignItems: "center",
        marginRight: 10,
        borderWidth: '1px',
        borderStyle: "solid",
        borderColor: "#b0003a",
        borderRadius: "10px",
        marginLeft: 30,
    },
    card: {

        flex: 1,
        maxWidth: "750px",
        borderRadius: 1,
    },
    cardHeder: {
        borderWidth: 2,
        borderButtomRightRadius: 30,
        backgroundColor: "#6a4f4b",
        minHeight: 60,
        marginBottom: 6,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "500",
    },
    cardSectionContainer: {
        flexWrap: 'wrap',
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 5,
        marginRigt: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        flex: 1,
    },
    avatarSection: {
        minWidth: 150,
        minHeight: 150,
        flex: 1,
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        paddingRight: 15,
        // borderRightWidth: 2,
        // borderRightColor: "red",
        // borderRightStyle: "dotted",
    },
    qustionSectionsContainer: {
        display: "flex",
        minWidth: 300,
        marginLeft: "25px",
        flexDirection: "column",
        flex: 2,
        alignItems: "center",
        justifyContent: "center"
    },

    inputDive: { display: "flex", alignItems: "center", marginBottom: 10 },
    input: { marginTop: 5, marginRight: 10 },
    lable: { fontSize: 25 }
}


export default connect()(Home)