import { useState } from 'react'
import './codediv.css'
import { useNavigate } from 'react-router-dom'


function CodeDiv(){
	const [code, setCode] = useState("")
	const [codeOutput, setCodeOutput] = useState("The editor is currently in progress")
	const [givenInput, setGivenInput] = useState([])
	const [expectedOutput, setExpectedOutput] = useState([])
	function runCode(){
		for (let i = 0; i < expectedOutput.length; i++) {
			setCodeOutput("Success")
			return
		}
		console.log(codeOutput)
		setCodeOutput("Succesfull")
		function returnToMenu(){
			let navigate = useNavigate()
			navigate("/")
		}
		return
	}
	return(
		<div>
			<p>Python Script</p>
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
