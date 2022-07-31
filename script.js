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




