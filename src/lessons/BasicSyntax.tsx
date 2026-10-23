import TopBar from "../topbar"
import CodeDiv from "../codediv"
import "./Lesson.css"

const BasicSyntax = () => {
	return(
		<div>
			<TopBar />
			<div id="LessonDiv">
				<div>
					<h1>Basic Syntax</h1>
					<p>
					This is the first lesson for PyLangLearn <br />
					In this website you will learn how to code in Python <br />
					Lets explore this website first <br />
					In the left you will get instructions and information <br />
					In the right you will see a code area <br />
					With the information you previously got and the information you will learn from lessons you will code a program that checks for a specific output <br />
					To contiune lets learn how to print in Python <br />
					Writing <mark>print("")</mark> in the right and adding a word like Hello in the pharantesis like <mark>print("Hello")</mark> will output  <mark>Hello</mark> in the bottom part <br />
					To submit you have to do the task at the end of the paragraph
					After the code is submitted, we check if the program works. If it fits the task and the program works you can advance into the next lesson.
					</p>
					<h2>Print out <mark>Hello world!</mark></h2>
				</div>
				<CodeDiv />
			</div>
		</div>
	)
}
export default BasicSyntax
