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