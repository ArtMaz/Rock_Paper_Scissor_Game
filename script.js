function getComputerChoice(){
    //The standardized Rock Paper Scissors is in array which will contain a quick reference for the possible values of the result of the game, further explanation shall be given in further comments.
    standardized_rps=["Rock","Paper","Scissors"]; 
    //First the function Math.random() is used to generate a number between 0 and 1 using a continous uniforn distribution, multiplying it by 3 we get another continuous uniform distribution with at three whole numbers, 0,1,2, using the Math.floor() function we transform the continuous uniform distribution into a discrete uniform distribution, which now can be used to generate a random index number for the standardized_rps array and thus  creating a random choice for the computer in its turn. 
    return standardized_rps[Math.floor(Math.random()*3)] 

}

//The funciton playRound receives to parameters, one for the players choice and other for the computer's, represented with player_selection and computer_selection respectively

function playRound(player_selection,computer_selection){ 
 //Both values are standarized into lower case strings to avoid any further complexity from the possible ways the user can write its turn.

    std_player_selection=player_selection.toLowerCase(); 
    std_computer_selection=computer_selection.toLowerCase();

 //The general idea of this conditional is whether the player and computer made the same choice; If player and computer made same choice: draw Else the game continues as usual.
    if (std_player_selection == std_computer_selection){ 
       
        return "Draw";
    }
    else{
        /*The following switch structure is the backbone of the function, here, using the aid of an expression with the following format 

        ["Lose","Win"][["LoseOption","WinOption"].indexOf(std_computer_selection)];

        Here we can understand this double array reference as the following, for each case , using the players choice as the value of case, there is an array ["LoseOption","WinOption"], here is the direct comparation of the player's choice with the computer's choice, using afterwards  ["LoseOption","WinOption"].indexOf(std_computer_selection)] we get  a binary function, in which the only possible values are 0 or 1 for losing and winning respectively , finally using a second array ["Lose","Win"] we can assing actual string values, or a string labelling for the values of 0 and 1
        
        The greatest weakness of this method is the manual creation of such arrays , if we try to escalate this game into a game with more options, a further investigation is needed in order to find out whether the fixed values of arrays and its index selections is faster than logical comparasions, only in that case this method is preferred.
        */

        switch (std_player_selection){

            case "rock":
                return ["Lose","Win"][["paper","scissors"].indexOf(std_computer_selection)];
                break;
            
            case "paper":
                return ["Lose","Win"][["scissors","rock"].indexOf(std_computer_selection)];
                break;
            
            case "scissors" :
                return ["Lose","Win"][["rock","paper"].indexOf(std_computer_selection)];
                break;



        }
        
    }

}

function game(){
    standardized_rps=["Rock","Paper","Scissors"]; 
    //Both variables are declared to keep track of the player and the computer scores
    let players_score=0;
    let computers_score=0;

   /*  A for loop is called to play 5 rounds of Rock Paper Scissors, for each round the following things are shown and asked to the player:
    1) The player is asked for its choice for this round
    2) The number of the round being played
    3) After inserting its choice ,the player shall see the result on screen of the current round, whether it was a win , lose or draw and the choices of both the player and the computer made*/
    for (let i=0 ; i<5 ; i++){
        console.log(`This is round number : ${i+1}`);
        let players_choice=prompt(`Write your choice for this round (Rock,Paper,Scissors)`);//The Player is asked for its choice
        let computers_choice =getComputerChoice(); //The computer generates its choice using the getComputerChoice() function
        let round_result=playRound(players_choice,computers_choice); //The round is played using the playRound()function , the result is stored in the variable round_result ("Draw","Win","Lose")

        std_players_choice=standardized_rps[["rock","paper","scissors"].indexOf(players_choice.toLowerCase())]; //Recalling the formatting of the playRound() function, in order to guarantee for the function to be insensible to lower, uper case, or any mix of both in the way the player's choice is typed , the players_choice is first made into lower case, then, using an auxiliar array ["rock","paper","scissors"], we can make a function where all the possible ways of typing Rock,Paper Scissors are send into the values 0,1,2 respectively, then using the standardized rock paper scissors array, we can send this three possible values into a nice ,first letter in upper case ,format.
        

        //The result of the round is then compared in this if else structure, and depending on the result adds a point to either to the player's score, the computer's score, or to neither.
        if (round_result == "Draw"){
            console.log(`It's a Draw!,both players choosed ${std_players_choice}`);
        }
        else{
            if (round_result == "Win"){
                
                console.log(`It's a Win!, ${std_players_choice} beats ${computers_choice}`);
                players_score=++players_score;
            }
            else{
                console.log(`It's a Lose!, ${computers_choice}  beats  ${std_players_choice}`);
                computers_score=++computers_score;

            }

        }

    }
    //The final scores are then compared and depending on whether the values are equal or different a player is called winner or it's a draw.

    if (players_score==computers_score){
        console.log(`Game Result: It's a Draw! Both players got ${players_score} points`)
    }
    else{
        if (players_score > computers_score){
            console.log(`Game Result: Player Wins! Player beats computer with ${players_score} points `)

        }
        else{
            console.log(`Game Result: Computer Wins! Computer beats player with ${computers_score} points `)
        }
    }
}


