function checkcreds(){
    console.log("checkcreds() started");
    var firstname;
    var lastname;
    var badgenumb;
    var fullname;
    var fullnamelength

    firstname = document.getElementById("fname").Value;
    console.log("the first name is: " + firstname);

    lastname = document.getElementById("lname").Value;
    console.log("the last name is: " + lastname);

    badgenumb = document.getElementById("badgeID").Value;
    console.log("the badge number is: " + badgenumb);

    fullname = firstname + " " + lastname;
    console.log("the user's full name is: " + fullname);

    fullnamelength = fullname.length;
    console.log("the user's full name lengh is:" + fullnamelength + " characters.");

if(fullnamelength > 20){
    document.getElementById("loginstatus").innerHTML = "invalid name, please try again."
} else if (badgenumb > 999 || badgenumb < 1){
    document.getElementById("loginstatus").innerHTML = "invalid badge number, please try again."
} else {
    location.replace("./UATspace.html");
}


}