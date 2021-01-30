// Learning Functions
function checkDriverAge(age) {
  //   var age = prompt("Enter your age:");

  if (Number(age) < 18) {
    console.log("Sorry, you are too young to drive this car. Powering off");
  } else if (Number(age) > 18) {
    console.log("Powering on. Enjoy the ride");
  } else {
    console.log(
      "Congratulations on your first year of driving. Enjoy the ride"
    );
  }
}

var checkDriverAge2 = function () {
  console.log("Entering checkDriverAge2");
  var age = prompt("Enter your age:");

  if (Number(age) < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
  } else if (Number(age) > 18) {
    alert("Powering on. Enjoy the ride");
  } else {
    alert("Congratulations on your first year of driving. Enjoy the ride");
  }
};

// checkDriverAge(17);

// Learning Objects & Arrays
var database = [
  {
    username: "Sachin",
    password: "Kamath",
  },
];

var newsfeed = [
  {
    username: "Bobby",
    timeline: "Feeling Bored",
  },
  {
    username: "Shubha",
    timeline: "Enjoying the day",
  },
  {
    username: "Sachin",
    timeline: "Stressed out today",
  },
];

var userNamePrompt = prompt("Please enter your username:");
var passWordPrompt = prompt("Please enter your password:");

function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsfeed);
  } else {
    alert("SignIn unsuccessful");
  }
}

signIn(userNamePrompt, passWordPrompt);
