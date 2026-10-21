import './main.css';
import TopBar from './topbar';

import {
	useNavigate,
} from 'react-router-dom';

export default function MainMenu() {
	const navigation = useNavigate();
	function Go_To_Lesson(lesson:string){
		let full_lesson_path = "/lessons/".concat(lesson)
		if(true){
			console.log(full_lesson_path)
			navigation(full_lesson_path)
		}
	}
	return (
		<div>
			<TopBar />
			<button className="StartLessonButton" onClick={() => {Go_To_Lesson("BasicSyntax")}}>Pythons Syntax</button>
		</div>
	)
}
