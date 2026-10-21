import { useState } from 'react'
import './codediv.css'

function CodeDiv(){
	const [code, setCode] = useState("")
	const [codeOutput, setCodeOutput] = useState("Code Output goes here")
	const [expectedOutput, setExpectedOutput] = useState([])
	function runCode(){
		for (let i = 0; i < expectedOutput.length; i++) {
			if(codeOutput != expectedOutput[i])
			console.log("Failed code")
			setCodeOutput("Failed code")
			return
		}
		console.log(codeOutput)
		setCodeOutput("Succesfull")
		return
	}
	return(
		<div>
			<p>Python Scipt</p>
			<input value={code} onChange={e => setCode(e.target.value)} id="CodeInput" />
			<p id="CodeOutput">{codeOutput}</p>
			<div id="CodeBottomDiv">
				<button>Test Code</button>
				<button onClick={() => runCode()}>Check Code</button>
			</div>
		</div>
	)
}
export default CodeDiv
