import React from 'react'

export default ({ subTitle, answered, openQustions, id, author }) => (
    <div className="w3-card-2" style={Styles.card}>
        <div className="w3-card" style={Styles.cardHeder}>{author.name + " ask.."}</div>
        <div style={Styles.cardSectionContainer}>
            <div style={{
                ...Styles.avatarSection, backgroundImage: `url(${author.avatarURL})`,
            }} >
            </div>
            <div style={Styles.qustionSectionsContainer} >
                <div style={Styles.qustionSections}>
                    <h3>Would You Rather... </h3>
                    <h6>{subTitle + " ..or ...."}</h6>
                </div>
                <button onClick={() => openQustions(id)} style={Styles.submitButton}>{answered ? "view result" : "answerd Qustion"}</button>
            </div>
        </div>
    </div>

)



const Styles = {

    card: {
        marginTop: 10,

        display: "flex",
        flexDirection: "column",
        flex: 1,
        maxWidth: "650px",
        borderRadius: 1,
        width: "70%",

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
        fontWeight: "500"
    },
    cardSectionContainer: {
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
        flex: 1,
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        backgroundSize: 'contain',

        paddingRight: 15,
        borderRightWidth: 2,
        borderRightColor: "red",
        borderRightStyle: "dotted",
    },
    qustionSectionsContainer: {
        display: "flex",
        flexDirection: "column",
        flex: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    qustionSections: {
        flex: 1,

    },
    submitButton: {
        marginTop: 20,
        marginBottom: 30,

        backgroundColor: "#b0003a",
        border: "none",
        color: "white",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "10px",
        paddingBottom: "10px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",

    },
    inputDive: { display: "flex", alignItems: "center", marginBottom: 10 },
    input: { marginTop: 5, marginRight: 10 },
    lable: { fontSize: 25 }
}
