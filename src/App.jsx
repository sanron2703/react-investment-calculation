import Header from "./components/Header"
import UserInputs from "./components/UserInputs"
import Results from "./components/Results"
import { useState } from "react"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const validInput = userInput.duration >= 1

  function handleChange(identifier, newValue){
      setUserInput(preUserValue => {
          return {
              ...preUserValue,
              [identifier]: +newValue
          }
      })
  }
  return (
    <>
     <Header />
     <UserInputs userInput={userInput} inputChanges={handleChange}/>
     {validInput ? <Results input={userInput}/> : <p className="center">Please enter number greater than zero.</p> }
    </>
   
  )
}

export default App
