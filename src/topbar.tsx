import './topbar.css'

import {
	Link
} from 'react-router-dom';

function TopBar(){
	return(
		<div id="TopBarDiv">
			<Link to="/">
				<img src="/public/icons.svg" width={32} height={32} />
			</Link>
			<span id="BarTitle">PyLangLearn</span>
			<span id="BarDescription">Learn Python easily</span>
		</div>
	)
}
export default TopBar
