

function generate() {
    document.getElementById("demo").innerHTML = "sdkjfb24792#8sdfku@!";
}


function generatePassword() {

    // 1)Get all the fields value
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var favoriteFood = document.getElementById("favoriteFood").value;
    var favoriteColor = document.getElementById("favoriteColor").value;
    var number = document.getElementById("number").value;
    // 2) write a function to pass those values and get  value
    var result   = buildRandomPassword(firstName, lastName, favoriteFood, favoriteColor, number)

    // 3) assgn and display

    document.getElementById("randompassword").innerHTML = result;
    
    
}

function buildRandomPassword(firstName, lastName, favoriteFood, favoriteColor, number) {

    return (firstName + lastName + favoriteFood + favoriteColor + number);

}
