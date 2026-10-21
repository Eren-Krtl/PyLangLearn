import './topbar.css'

import {
	Link
} from 'react-router-dom';

function TopBar(){
	return(
		<div id="TopBarDiv">
			<Link to="/" id="BarImage">
				<img src="/public/logo.png" width={32} height={32} />
				<span>Home Page</span>
			</Link>
			<span id="BarTitle">PyLangLearn</span>
			<span id="BarDescription">Learn Python easily</span>
		</div>
	)
}
export default TopBar
