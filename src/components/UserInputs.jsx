export default function UserInputs({userInput, inputChanges}){
    return (
        <section id='user-input'>
            <div className="input-group">
                <p>
                    <label>Initial Investments</label>
                    <input type="number" required value={userInput.initialInvestment} onChange={(event) => inputChanges('initialInvestment',event.target.value)}/>
                </p>
                <p>
                    <label>Annual Investments</label>
                    <input type="number" required value={userInput.annualInvestment} onChange={(event) => inputChanges('annualInvestment', event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Returns</label>
                    <input type="number" required value={userInput.expectedReturn} onChange={(event) => inputChanges('expectedReturns', event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={userInput.duration} onChange={(event) => inputChanges('duration', event.target.value)}/>
                </p>
            </div>
        </section>
    )
}