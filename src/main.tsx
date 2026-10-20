import './main.css';
import TopBar from './topbar';

import {
	Link
} from 'react-router-dom';


export default function MainMenu() {
	return (
		<div>
			<TopBar />
			<h1>Hello from main tsx</h1>
			<Link to="/lessons/BasicSyntax">
				<button className="StartLessonButton">Pythons Syntax</button>
			</Link>
		</div>
	)
}
