var sentence = ["Practice makes perfect", "Where there is a will, there is a way", "Every man has his faults", "Experience is the mother of wisdom", "Knowledge is power"];
var random_sentence = sentence[Math.floor(Math.random() * sentence.length)];

var password = random_sentence;
password = password.toUpperCase();

var length = password.length;
var how_wrong = 0;

var password1 = "";

for (i=0; i<length; i++)
{
	if (password.charAt(i)==" ") password1 = password1 + " ";
	else password1 = password1 + "-";
}

function write_password()
{
	document.getElementById("board").innerHTML = password1;
}

window.onload = start;

var letters = new Array(35);

letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";



function start()
{
	
	var content ="";
	
	for (i=0; i<=34; i++)
	{
		var element = "let" + i;
		content = content + '<div class="letter" onclick="check('+i+')" id="'+element+'">'+letters[i]+'</div>';
		if ((i+1) % 7 ==0) content = content + '<div style="clear:both;"></div>';
	}
	
	document.getElementById("alphabet").innerHTML = content;
	
	
	write_password();
}

String.prototype.set_sign = function(place, sign)
{
	if (place > this.length - 1) return this.toString();
	else return this.substr(0, place) + sign + this.substr(place+1);
}


function check(nr)
{
	
	var yes = false;
	
	for(i=0; i<length; i++)
	{
		if (password.charAt(i) == letters[nr]) 
		{
			password1 = password1.set_sign(i,letters[nr]);
			yes = true;
		}
	}
	
	if(yes == true)
	{
		var element = "let" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		
		write_password();
	}
	else
	{
		var element = "let" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";	
		document.getElementById(element).setAttribute("onclick",";");		
		
		//wrong
		how_wrong++;
		var image = "img/s"+ how_wrong + ".jpg";
		document.getElementById("game").innerHTML = '<img src="'+image+'" alt="" />';
	}
	
	//win
	if (password == password1)
	document.getElementById("alphabet").innerHTML  = "Yes! The correct password was entered: "+password+'<br /><br /><span class="reset" onclick="location.reload()">Again?</span>';
	
	//lose
	if (how_wrong>=9)
	document.getElementById("alphabet").innerHTML  = "You lose! Correct password: "+password+'<br /><br /><span class="reset" onclick="location.reload()">Again?</span>';
}
