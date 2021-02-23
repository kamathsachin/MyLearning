import fs from "fs";
// 1 - What floor does Santa end up on
// ( --> Should go up 1 floor
// ) --> Should go down 1 floor

function question1() {
  fs.readFile("hello.txt", (err, data) => {
    const directions = data.toString();
    const directionsArray = directions.split("");

    const answer = directionsArray.reduce((acc, currentValue) => {
      if (currentValue === "(") {
        return (acc += 1);
      } else if (currentValue === ")") {
        return (acc -= 1);
      }
    }, 0);

    console.log("Floor # ", answer);
  });
}

question1();

// 2 - When does Santa first enter the basement
function question2() {
  fs.readFile("hello.txt", (err, data) => {
    const directions = data.toString();
    const directionsArray = directions.split("");

    let accumulator = 0;
    let counter = 0;

    const answer = directionsArray.some((currentItem) => {
      if (currentItem === "(") {
        accumulator += 1;
      } else if (currentItem === ")") {
        accumulator -= 1;
      }

      counter++;
      return accumulator < 0;
    });

    console.log("Basement entered at: ", counter);
  });
}

question2();

// Read File
// fs.readFile("./hello.txt", (err, data) => {
//   console.log("ASync", file.toString());
//   if (err) {
//     console.log(err);
//   }
// });

// const file = fs.readFileSync("./hello.txt");
// console.log("Sync", file.toString());

// Append File
// fs.appendFile("./hello.txt", " This is so cool", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// Write File
// fs.writeFile("./bye.txt", "Sorry to see you go", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// Delete File
// fs.unlink("./bye.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });
