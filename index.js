import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
// "Year": 1930,
//     "Datetime": "30 Jul 1930 - 14:15",
//     "Stage": "Final",
//     "Stadium": "Estadio Centenario",
//     "City": "Montevideo",
//     "Home Team Name": "Uruguay",
//     "Home Team Goals": 4,
//     "Away Team Goals": 2,
//     "Away Team Name": "Argentina",
//     "Win conditions": "",
//     "Attendance": 68346,
//     "Half-time Home Goals": 1,
//     "Half-time Away Goals": 2,
//     "Referee": "LANGENUS Jean (BEL)",
//     "Assistant 1": "SAUCEDO Ulises (BOL)",
//     "Assistant 2": "CRISTOPHE Henry (BEL)",
//     "RoundID": 405,
//     "MatchID": 1087,
//     "Home Team Initials": "URU",
//     "Away Team Initials": "ARG"
//   },
//(a) Home Team name for 2014 world cup final

const teamFinal = fifaData.filter((item)=>{
        return item.Stage == "Final" && item.Year === 2014;
    });

    console.log(teamFinal[0]["Home Team Name"]);


//(b) Away Team name for 2014 world cup final

console.log(teamFinal[0]["Away Team Name"]);

//(c) Home Team goals for 2014 world cup final

console.log(teamFinal[0]["Home Team Goals"]);


//(d) Away Team goals for 2014 world cup final
    
 console.log(teamFinal[0]["Away Team Goals"]);
    

//(e) Winner of 2014 world cup final */
    
let winner = function(data1,data2){
    if (data1>data2){
        return data1}
    if (data1<data2){
        return data2}
    else {
        return "It was a tie"
    }
}    
    console.log(winner(teamFinal[0]["Home Team Name"],teamFinal[0]["Away Team Name"]));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
    return data.filter(function(team){
        return team.Stage === "Final";
    })
};

// console.log(getFinals(fifaData));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(data, callback) {
    const years = callback(data).map(function(item){
        return item.Year
    })
    return years
};

console.log(getYears(fifaData, getFinals));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(data, callback) {
    let winners = [];
    callback(data).forEach((item) => {
    if (item["Home Team Goals"] > item["Away Team Goals"]){
        winners.push(item["Home Team Name"])
    }else if (item["Home Team Goals"] < item["Away Team Goals"]){
        winners.push(item["Away Team Name"])
    }
    });
    return winners
    };

    console.log(getWinners(fifaData, getFinals));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(data, getYearsCB, getWinnersCB) {
    const finalsYear = getYearsCB(data); 
    const finalsWinner = getWinnersCB(data);
    const answer = finalsYear.map((item,index)=>{
        return `In ${item}, ${finalsWinner[index]} won the world cup!`
    })
    return answer
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(getFinalsCB) {
   /* code here */

    const totalValue = getFinalsCB.reduce((accumulator,currentValue) =>{
        return accumulator + currentValue["Home Team Goals"] + currentValue["Away Team Goals"];
    },0);
    return String(Math.round(100*totalValue/getFinalsCB.length)/100)
}

console.log(getAverageGoals(getFinals(fifaData)));


/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
