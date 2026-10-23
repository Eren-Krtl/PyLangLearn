import { useState } from 'react';
import './main.css';
import TopBar from './topbar';

import {
	useNavigate,
} from 'react-router-dom';

export default function MainMenu() {
	const navigation = useNavigate();
	const [lessonLevel, setLessonButton] = useState()
	function Go_To_Lesson(lesson:string, requirement:number){
		let full_lesson_path = "/lessons/".concat(lesson)
		if(true){
			console.log(full_lesson_path)
			navigation(full_lesson_path)
		}
	}
	return (
		<div>
			<TopBar />
			<button className="StartLessonButton" onClick={() => {Go_To_Lesson("BasicSyntax"), 0}}>Pythons Syntax</button>
			<br />
			<button className="StartLessonButton" onClick={() => {Go_To_Lesson("HowToMakeVariables", 1)}}>How To Make Variables</button>
		</div>
	)
}
