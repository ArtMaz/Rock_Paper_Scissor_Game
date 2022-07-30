function getComputerChoice(){
    standardized_rps=["Rock","Paper","Scissors"]; //The standardized Rock Paper Scissors is in array which will contain a quick reference for the possible values of the result of the game, further explanation shall be given in further comments.
    return standardized_rps[Math.floor(Math.random()*3)] //First the function Math.random() is used to generate a number between 0 and 1 using a continous uniforn distribution, multiplying it by 3 we get another continuous uniform distribution with at three whole numbers, 0,1,2, using the Math.floor() function we transform the continuous uniform distribution into a discrete uniform distribution, which now can be used to generate a random index number for the standardized_rps array and thus  creating a random choice for the computer in its turn. 

}



