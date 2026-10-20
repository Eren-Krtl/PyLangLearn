import MainMenu from './main'
import BasicSyntax from './lessons/BasicSyntax'

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
				</Routes>
			</Router>
		</div>
	)
}
export default WebLinker
