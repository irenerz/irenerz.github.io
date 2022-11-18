

var randomVal;

var bingoSheet = [ 5,24,10,55,63,34,75,66,73,39,8,56,20,15,26,17,3,72,58,21,48,14,6,22];

var checkedBox = ["null", "null" , "null", "null", "null", "null", "null", "null", "null", "null", "null", "null",
"null", "null" , "null", "null", "null", "null", "null", "null", "null", "null", "null", "null",  "null" ];

var checkWinner; 



function random() {
	randomVal = Math.floor(Math.random() * 75) + 1;
	document.getElementById("number").innerHTML= randomVal;


	if (randomVal == bingoSheet[0]) {
	document.getElementById("a1").style.backgroundColor= "red";
	checkedBox[0] = red;}

	if (randomVal == bingoSheet[1]) {
	document.getElementById("a2").style.backgroundColor= "red";
	checkedBox[1] = red;}

	if (randomVal == bingoSheet[2]) {
	document.getElementById("a3").style.backgroundColor= "red";
	checkedBox[2] = red;}

	if (randomVal == bingoSheet[3]) {
	document.getElementById("a4").style.backgroundColor= "red";
	checkedBox[3] = red;}

	if (randomVal == bingoSheet[4]) {
	document.getElementById("a5").style.backgroundColor= "red";
	checkedBox[4] = red;}

	if (randomVal == bingoSheet[5]) {
	document.getElementById("b1").style.backgroundColor= "red";
	checkedBox[5] = red;}

	if (randomVal == bingoSheet[6]) {
	document.getElementById("b2").style.backgroundColor= "red";
	checkedBox[6] = red;}

	if (randomVal == bingoSheet[7]) {
	document.getElementById("b3").style.backgroundColor= "red";
	checkedBox[7] = red;}

	if (randomVal == bingoSheet[8]) {
	document.getElementById("b4").style.backgroundColor= "red";
	checkedBox[8] = red;}

	if (randomVal == bingoSheet[9]) {
	document.getElementById("b5").style.backgroundColor= "red";
	checkedBox[9] = red;}

	if (randomVal == bingoSheet[10]) {
	document.getElementById("c1").style.backgroundColor= "red";
	checkedBox[10] = red;}

	if (randomVal == bingoSheet[11]) {
	document.getElementById("c2").style.backgroundColor= "red";
	checkedBox[11] = red;}



	if (randomVal == bingoSheet[12]) {
	document.getElementById("c4").style.backgroundColor= "red";
	checkedBox[12] = red;}

	if (randomVal == bingoSheet[13]) {
	document.getElementById("c5").style.backgroundColor= "red";
	checkedBox[13] = red;}

	if (randomVal == bingoSheet[14]) {
	document.getElementById("d1").style.backgroundColor= "red";
	checkedBox[14] = red;}

	if (randomVal == bingoSheet[15]) {
	document.getElementById("d2").style.backgroundColor= "red";
	checkedBox[15] = red;}

	if (randomVal == bingoSheet[16]) {
	document.getElementById("d3").style.backgroundColor= "red";
	checkedBox[16] = red;}

	if (randomVal == bingoSheet[17]) {
	document.getElementById("d4").style.backgroundColor= "red";
	checkedBox[17] = red;}

	if (randomVal == bingoSheet[18]) {
	document.getElementById("d5").style.backgroundColor= "red";
	checkedBox[18] = red;}

	if (randomVal == bingoSheet[19]) {
	document.getElementById("e1").style.backgroundColor= "red";
	checkedBox[19] = red;}

	if (randomVal == bingoSheet[20]) {
	document.getElementById("e2").style.backgroundColor= "red";
	checkedBox[20] = red;}

	if (randomVal == bingoSheet[21]) {
	document.getElementById("e3").style.backgroundColor= "red";
	checkedBox[21] = red;}

	if (randomVal == bingoSheet[22]) {
	document.getElementById("e4").style.backgroundColor= "red";
	checkedBox[22] = red;}

	if (randomVal == bingoSheet[23]) {
	document.getElementById("e5").style.backgroundColor= "red";
	checkedBox[23] = red;}


	 checkWinner ();


	}
 


function checkWinner (){

	 	
// horizontal wins

	if (checkedBox[0] == 'red' && checkedBox[1] == 'red' && checkedBox[2] == 'red' && checkedBox[3] == 'red' && checkedBox[4] == 'red')

	if (checkedBox[5] == 'red' && checkedBox[6] == 'red' && checkedBox[7] == 'red' && checkedBox[8] == 'red' && checkedBox[9] == 'red')

	if (checkedBox[10] == 'red' && checkedBox[11] == 'red' && checkedBox[12] == 'red' && checkedBox[13] == 'red')

	if (checkedBox[14] == 'red' && checkedBox[15] == 'red' && checkedBox[16] == 'red' && checkedBox[17] == 'red' && checkedBox[18] == 'red')

	if (checkedBox[19] == 'red' && checkedBox[20] == 'red' && checkedBox[21] == 'red' && checkedBox[22] == 'red' && checkedBox[23] == 'red')


// vertical wins

	if (checkedBox[0] == 'red' && checkedBox[5] == 'red' && checkedBox[10] == 'red' && checkedBox[14] == 'red' && checkedBox[19] == 'red')

	if (checkedBox[1] == 'red' && checkedBox[6] == 'red' && checkedBox[11] == 'red' && checkedBox[15] == 'red' && checkedBox[20] == 'red')	

	if (checkedBox[2] == 'red' && checkedBox[7] == 'red' && checkedBox[16] == 'red' && checkedBox[21] == 'red')

	if (checkedBox[3] == 'red' && checkedBox[8] == 'red' && checkedBox[12] == 'red' && checkedBox[17] == 'red' && checkedBox[22] == 'red')

	if (checkedBox[4] == 'red' && checkedBox[9] == 'red' && checkedBox[13] == 'red' && checkedBox[18] == 'red' && checkedBox[23] == 'red')	


// diagonal wins

	if (checkedBox[0] == 'red' && checkedBox[6] == 'red' && checkedBox[17] == 'red' && checkedBox[23] == 'red')

	if (checkedBox[4] == 'red' && checkedBox[8] == 'red' && checkedBox[15] == 'red' && checkedBox[19] == 'red')






	// document.getElementById("").style.backgroundColor= "yellow";
	
	alert("testing");
}

