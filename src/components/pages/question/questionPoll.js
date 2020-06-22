import React from 'react'
import '../../../App.css'


export default ({onSubmit ,  handleOptionChange, selectedOption , author , qustion}) => (

  <div style={Styles.container}>

    <div className="w3-card-2" style={Styles.card}>
      <div className="w3-card" style={Styles.cardHeder}>{author.name + " ask.."}</div>
      <div style={Styles.cardSectionContainer}>
        <div style={{
          ...Styles.avatarSection, backgroundImage: `url(${author.avatarURL})`,
        }} >
                    <div className="ripple" /> {/*animation dive */}
        </div>
        <div style={Styles.qustionSectionsContainer} >
          <div style={Styles.qustionSections}>
            <h1 >Would You Rather... </h1>
            <form>
              <div style={Styles.inputDive}
                onClick={() => handleOptionChange("optionOne")}
              >
                <label style={Styles.lable} for="male">
                  <input style={Styles.input} type="radio"
                    checked={selectedOption === 'optionOne'}
                  />
                  {qustion.optionOne === undefined ? "" : qustion.optionOne.text}
                </label>
              </div>
              <div style={Styles.inputDive}
                onClick={() => handleOptionChange("optionTwo")}
              >
                <label style={Styles.lable} for="male">
                  <input style={Styles.input} type="radio"
                    checked={selectedOption === 'optionTwo'}
                  />
                  {qustion.optionOne === undefined ? "" : qustion.optionTwo.text}
                </label>
              </div>
            </form>
          </div>
          <button
          onClick={onSubmit} 
          style={Styles.submitButton}>{"submite"}</button>
        </div>
      </div>
    </div>
  </div>


)




const Styles = {
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    minHeight: 300,
    padding: 20,

  },
  card: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    maxWidth: "650px",
    borderRadius: 1
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

    padding: 16,
    backgroundColor: "#b0003a",
    border: "none",
    color: "white",
    paddingLeft: "32px",
    paddingRight: "32px",
    paddingTop: "15px",
    paddingBottom: "15px",
    borderRadius: 10,
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",

  },
  inputDive: { display: "flex", alignItems: "center", marginBottom: 10 },
  input: { marginTop: 5, marginRight: 10 },
  lable: { fontSize: 25 }
}