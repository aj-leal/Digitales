function setUpPages(){
	//for(let i=2; i<8; i++)let
	document.getElementById("page2").style.display = "none";
	document.getElementById("page3").style.display = "none";
}

let name = "", gradeAndSection="";
function goToQuestionPage(){
	name = document.getElementById("fname").value;
	gradeAndSection = document.getElementById("gradeAndSection").value;

	//console.log(name+"  "+gradeAndSection);

	document.getElementById("page1").style.display = "none";
	document.getElementById("page2").style.display = "block";
}

let score = 0, questionCounter=0;
let answers=["Sandy-yellowish-brownish","Giraffe and Zebra","To avoid being hunted by the Leopard and Ethiopian","He changed his skin color","His fingers","He agreed to have spots","They lived happily ever after","They changed the colors of their coats","The Ethiopian","He was sad"];
let beginning="You are at the <b>beginning</b> stage of understanding the story. This means you might be struggling to recall specific details and grasp the main themes and ideas. To improve, try re-reading the story and focusing on key events and characters.Practice by summarizing each section in your own words and discussing it with someone.";
let developing="You are <b>developing</b> your understanding of the story. You can recall some details and have a basic grasp of the main themes, but there are some areas that need improvement. To enhance your comprehension, pay closer attention to the nuances of the story and think about the motivations and actions of the characters. Discussing the story with peers or writing short reflections on each chapter can help deepen your understanding.";
let proficient="You have a <b>proficient</b> understanding of the story. You recall most details accurately and have a good grasp of the main themes and ideas. Your ability to interpret and analyze the story is strong. To further refine your skills, try exploring deeper themes and making connections to other stories or real-life situations. Consider how the story's message applies to broader contexts and share your insights with others.";
let advanced="You have an <b>advanced</b> understanding of the story. You recall all details accurately, deeply understand the themes, and demontrate strong critical thinking and analysis. You are able to make insightful interpretations and connect the story's message to wider contexts. To continue your growth, challenge yourself by exploring complex literary works and discussing their main themes and ideas. Consider writing essays that compare and contrast different stories and their messages."


function goToScore(){
	document.getElementById("page2").style.display = "none";

	let inputTagElements = document.getElementsByTagName('input');

	for(let i=0; i<inputTagElements.length; i++){
		if(inputTagElements[i].type == "radio")
			if(inputTagElements[i].checked && inputTagElements[i].value === answers[questionCounter++])
				score+=1;
	}
	document.getElementById("score").innerHTML = score+"/10";
	let interpretation = document.getElementById("interpretation");
	if(score>8) interpretation.innerHTML = advanced;
	else if(score>5) interpretation.innerHTML = proficient;
	else if (score>2) interpretation.innerHTML = developing;
	else interpretation.innerHTML = beginning;

	//document.getElementById("interpretation").innerHTML = "You have an <b>advanced</b> understanding";
	document.getElementById("page3").style.display = "block";
}