import './Lesson.css'
import TopBar from '../topbar'
import CodeDiv from '../codediv'

function HowToMakeVariables(){
	return(
		<div>
			<TopBar />
			<div id="LessonDiv">
				<div>
					<h1> How to make variables </h1>
					<p>
						To make variables you can write <mark>name = 10</mark>
					</p>
				</div>
				<CodeDiv />
			</div>
		</div>
	)
}
export default HowToMakeVariables
