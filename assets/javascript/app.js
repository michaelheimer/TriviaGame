window.onload = function() 
{
var CSquestions =     [
                   {"question": "The common software-programming acronym &quot;I18N&quot; comes from the term &quot;Interlocalization&quot;.",
                    "bool": "false"},
                    {"question": "Unturned originally started as a Roblox game.",
                    "bool": "true"},
                    {"question":"Brain is the best teacher in the world" ,
                    "bool":"true"} ,
                    {"question":"111,111,111 x 111,111,111 = 12,345,678,987,654,321" ,
                    "bool": "true"},
                    {"question":"The 2010 film &quot;The Social Network&quot; is a biographical drama film about MySpace founder Tom Anderson." ,
                    "bool":"false" },
                    {"question":  "Nintendo started out as a playing card manufacturer.",
                    "bool": "true"},
                    {"question": "FLAC stands for &quot;Free Lossless Audio Condenser&quot;&#039;",
                    "bool":"false" },
                    {"question": "Linus Torvalds created Linux and Git." ,
                    "bool": "true"},
                    {"question":"All program codes have to be compiled into an executable file in order to be run. This file can then be executed on any machine." ,
                    "bool": "false"},
                    {"question":"In &quot;Mario Kart 64&quot;, Waluigi is a playable character." ,
                    "bool": "false"},
                       ];
var Historyquestions = [
                    {"question":"The United States Department of Homeland Security was formed in response to the September 11th attacks.",
                    "bool": "true"},
                    {"question": "The Tiananmen Square protests of 1989 were held in Hong Kong.",
                    "bool": "false"},
                    {"question": "The S in Harry S. Truman stands for &quot;Samuel&quot;.",
                    "bool":"false" },
                    {"question":"True or false: In World War I, Japan was in the Allied Powers (Entente) " ,
                    "bool": "true" },
                    {"question":"The M41 Walker Bulldog remains in service in some countries to this day." ,
                    "bool": "true"},
                    {"question": "Brezhnev was the 5th leader of the USSR.",
                    "bool": "true"},
                    {"question":"Joseph Stalin&#039;s real name was Ioseb Bessarionis dze Dzugashvili." ,
                    "bool": "true"},
                    {"question":"The Cold War ended with Joseph Stalin&#039;s death." ,
                    "bool":"false" },
                    {"question":"There is a city called Rome in every continent on Earth." ,
                    "bool": "false"},
                    {"question": "The Kingdom of Prussia briefly held land in Estonia.",
                    "bool": "false"},
                       ];
 var animalQuestions = [
               
                    {"question": "A slug&rsquo;s blood is green.",
                    "bool":"false"} ,
                    {"question": "Shrimp can swim backwards.",
                    "bool": "true"},
                    {"question":"The Ceratosaurus, a dinosaur known for having a horn on the top of its nose, is also known to be a decendent of the Tyrannosaurus Rex." ,
                    "bool": "false"},
                    {"question": "A bear does NOT defecate during hibernation. ",
                    "bool": "true"},
                    {"question": "&quot;Kamea,&quot; the Gilbertese Islander word for dog, is derived from the English phrase &quot;Come here!&quot;",
                    "bool": "true"},
                    {"question":"The Axolotl is an amphibian that can spend its whole life in a larval state." ,
                    "bool": "true"},
                    {"question":"Kangaroos keep food in their pouches next to their children." ,
                    "bool": "false"},
                    {"question":"&quot;Kamea,&quot; the Gilbertese Islander word for dog, is derived from the English phrase &quot;Come here!&quot;" ,
                    "bool": "true"},
                    {"question": "The Axolotl is an amphibian that can spend its whole life in a larval state.",
                    "bool": "true"},
                    {"question": "my dog name is Austa",
                    "bool": "true"},
                    
                    ];
     var generalQuestions =[
                   
                    { "question": "The two atomic bombs dropped on Japan by the United States in August 1945 were named &#039;Little Man&#039; and &#039;Fat Boy&#039;." ,
                     "bool": "false" },
                    { "question": "Vatican City is a country.",
                    "bool": "false"},
                    { "question": "The Great Wall of China is visible from the moon.",
                    "bool": "false"},
                    {"question":"Steel is an alloy of Iron and Carbon." ,
                    "bool":"true"} ,
                    {"question":"Igneous rocks are formed by excessive heat and pressure." ,
                    "bool": "false"},
                    {"question":"Hippopotomonstrosesquippedaliophobia is the irrational fear of long words." ,
                    "bool": "true"},
                    {"question": "There are 86400 seconds in a day.",
                    "bool": "true"},
                    {"question": "Gumbo is a stew that originated in Louisiana." ,
                    "bool": "true"},
                    {"question": "Leonardo da Vinci&#039;s Mona Lisa does not have eyebrows.",
                    "bool": "true"},
                    {"question": "A scientific study on peanuts in bars found traces of over 100 unique specimens of urine.",
                    "bool": "false"},                   
                    ];



var Newquestions = {};
var correctAnswers = 0;
var wrongAnswers = 0; 
var answerArray=[];
var count=20;
var counter;
var a,h,c,g;




    $('.CSDiv').on("click", function()
	{ 
        Newquestions = CSquestions;
	    populateQuestions(CSquestions);
	    c = $('.CatagoriesDiv').detach();
	});
	$('.historyDiv').on("click", function(event)
	{  
	   Newquestions = Historyquestions;
       populateQuestions(Historyquestions);
       h = $('.CatagoriesDiv').detach();
	});
	$('.animalDiv').on("click", function(event)
	{
	   Newquestions = animalQuestions;
       populateQuestions(animalQuestions);
       a = $('.CatagoriesDiv').detach();
	});
	$('.generalDiv').on("click", function(event)
	{ 
	   Newquestions = generalQuestions;
       populateQuestions(generalQuestions);
       g = $('.CatagoriesDiv').detach();
	});

	

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }

  $(".timeLeft").html(count + " Seconds"); 
  if(count < 5)
  {
  	$('.timeLeft').css('background-color','red');
  }

}


function timeUp()
{
  console.log('times up');
  checkAnsewers(Newquestions);
}

function populateQuestions(questions)
{
	setTimeout(timeUp, 21000);
    counter=setInterval(timer, 1000);
    
	 for(var i = 0; i < questions.length; i ++)
	 {
		var Qdiv = $('<div>').addClass('quest'+ i);
		Qdiv.append(questions[i].question);

		var Fdiv = $('<div>').addClass(i + 'false');
		var Tdiv = $('<div>').addClass(i + 'true');

	    var FradioBtn = $('<input type="radio" name="'+i+'" value=false>'+'False'+'</inputt&gt;&lt;br>' );
	    var TradioBtn = $('<input type="radio" name="'+i+'" value=true>'+'True'+'</inputt&gt;&lt;br>' );

	     Fdiv.append(FradioBtn);
	     Tdiv.append(TradioBtn);
	    console.log(TradioBtn.val()+" now");
	    $('.answerDiv').append(Qdiv,Tdiv,Fdiv);
	 }
 
	
}	 
 
function checkAnsewers(questions)
{

	  for(i=0;i<questions.length; i++)
	  {
	  	   var x = $('input:radio[name="'+i+'"]:checked', '.answerDiv').val();
	  	   console.log('x is ' + x);
	  	   console.log('questions[i] = ' + questions[i].bool);
		   if(x === questions[i].bool)
		   	 {
		   	 	console.log("u got it right  bitch");
		   	 	correctAnswers ++;
		   	 	console.log(correctAnswers);
		   	 }
		   	else if(x != questions[i].bool)
		   	 {
		   	 	console.log("u got it wrong ass");
		   	 	wrongAnswers ++;
		   	 	$('.quest' + i).css("background-color","red");
		   	 	console.log(wrongAnswers);
		   	 }
		   	 else
		   	 {
		   	 	wrongAnswers ++;
		   	 	$('quest' + i).css("background-color","red")
		   	 }
	  } 
	  $(".grade").text(grade(correctAnswers,questions.length ) + "%");
	  $('.answerDiv').remove();
	  $('.timeLeft').remove();

	// var input = $('<input type="button" value="Start" />').addClass("sButton");
 //    input.appendTo($(".Startbutton"));
 //    $( ".Startbutton" ).click(function() {
 //       c.appendTo('.CatagoriesDiv');
 //       g.appendTo('.CatagoriesDiv');
 //       a.appendTo('.CatagoriesDiv');
 //       h.appendTo('.CatagoriesDiv');
	   
//	});

}

	function grade(x,y)
	{
       var grade =(x/y) * 100;
     
       return grade;
	}
	

      }
     
    

   // function APIpopulate()
   // {
   
   	// var queryURL = "http://www.opentdb.com/api.php?amount=10";
   	// var queryURL2 = "http://opentdb.com/api.php?amount=10&type=boolean";
   	// $.ajax({
    //         url: queryURL2,
    //         method: 'GET'
    //     })

   	// .done(function(response)
   	// {
   	// 	 response.addHeader("Access-Control-Allow-Origin", "*");
   	// 	console.log(response);
   	// 	console.log(response.question);
   	// 	console.log(response.type);
   	// 	console.log(response.correct_ansewer);
   	// })

   // }


//}

// var table = $("<table/>").addClass('Qtable');
// var row = $('<tr/>');
// //table.append('<tr><td>' + questions[0].question + '</td><td></td></tr>');
// var cell = $('<td>' + questions[1].question + '</td>').addClass(i);
// var radioButtonFalse = $('<input type="radio" name="radio_group" value= "false">');
// var cell2 = $(' </td/>');
// cell2.append(radioButtonFalse);   //.text('False').addClass('f' + i);
// row.append(cell);
// row.append(cell2);
// console.log(cell2);
// //var row = $('<td>' + questions[1].question + '</td>').addClass(i)
// table.append(row);
// console.log(row);
// $('.answerDiv').append(table);