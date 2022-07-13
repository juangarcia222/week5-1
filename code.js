//function for countdowntimer v1 for wk1-2
function blastofftimerV1(){
    console.log('start() function started');
    // created variable currtime set it equal to 10
    var currtime =10;
    console.log(currtime);
    document.getElementById("countdownstatus").innerHTML = currtime;
    setTimeout(function(){
        currtime = currtime - 1;
        //what we do after the delay
        document.getElementById("countdownstatus").innerHTML = currtime 
        console.log(currtime);
}, 1000)
//9
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 2000)
//8
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 3000)
//7
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 4000)
//6
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 5000)
//5
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 6000)
//4
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 7000)
//3
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 8000)
//2
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 9000)
//blastoff
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = blastoff
    console.log(currtime);
}, 10000)
}

 { 

    //this is to generate the variables for the dies ans the sum 
    
    console.log("playcraps() started");
  //generate variables: die1, die2 sum
  var die1;
  var die2;
   var sum;

//this is the funtions for the dies to see if they roll into odd or even numbers and to see is if you win or lose 

   // roll the dice
   die1 = math.floor(math.random() * 6) + 1;
    console.log(die1);
    die2 = math.floor(math.random() * 6) + 1;
    console.log(die2);
    //determine the sum of the two dice and save it in sum
    sum = die1 + die2;
    console.log("sum is equal to" + sum);
    //follow the rules of craps 
    //first lose 
    if (sum == 7 || sum == 11) {
    document.getElementById("crapsstatus").innerHTML = "craps!! you lose";
    } else if (die1 == die2 && die1 % 2 == 0) {
    document.getElementById("crapsstatus").innerHTML = "huzzah! you win!!";
    } else {
   document.getElementById("crapsstatus").innerHTML = "you did not lose";
    }
    //tell the status in crapsstatus 
    }
    
    function blastofftimerV3(){
        console.log("blastofftimerV2() started");
        //want a loop that runs 11 times, 10-1 and then blastoff
        var countdowntimer = 10;
        var steptime = 1000;



        for(var i = 0; i < 10; i = i +1){
            setTimeout(function(){
            console.log(countdowntimer);
            if(countdowntimer <= 0){document.getElementById("countdownstatus").innerHTML = "blastoff!!";
            console.log("blastoff!");
            } else if (countdowntimer< 5){document.getElementById("countdownstatus").innerHTML = "Warning Less than ½ way to launch, time left = insert variable here"
            countdowntimer = countdowntimer - 1;
         } else {
            document.getElementById("countdownstatus").innerHTML = countdowntimer;
            countdowntimer = countdowntimer - 1;
            }
        }, steptimer * i)
    }
    
}

function startfun(){
    console.log("startfun() started");
    document.getElementById("data"). rows["seconds"].innerHTML = "readingd data";
    index = 0
    timer = setInterval(updatedisplay, time_interval);
    document.getElementById("startbutton").disabled = true;
    document.getElementById("stopbutton").disabled = false;

}

function stopfun(){
    console.log("stopfun() started");
    clearInterval(timer);
    document.getElementById("stopbutton").disabled = true;
    document.getElementById("startbutton").disabled = false;
}


function playstation(){
    console.log("playstation() started");
    //play spacestation sounds here
    mysound = new sounds("us-lab-background.mp3");
    mysound.play();
}


function sounds(srcfile){
    console.log("sound function started");
    this.sound = document.createElement("audio");
    this.sound.src =srcfile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop =function(){
        this.sound.pause();
    }


    }