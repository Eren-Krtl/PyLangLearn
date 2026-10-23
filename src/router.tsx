import MainMenu from './main'
import BasicSyntax from './lessons/BasicSyntax'
import HowToMakeVariables from './lessons/HowToMakeVariables'

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom'

function WebLinker() {
	return(
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<MainMenu />} />
					<Route path="/lessons/BasicSyntax" element={<BasicSyntax />} />
					<Route path="/lessons/HowToMakeVariables" element={<HowToMakeVariables />} />
				</Routes>
			</Router>
		</div>
	)
}
export default WebLinker
