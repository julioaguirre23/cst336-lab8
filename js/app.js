$(document).ready(function(){
    //Global Variables
    var score = 0;
    var attempts = localStorage.getItem("total_attempts");
    //event Listeners
    $("button").on("click", gradeQuiz);
    
    $(".q5Choice").on("click",function(){
       $(".q5Choice").css("background", "");
       $(this).css("background", "rgb(255, 255, 0)");
    });
    //functions
    function displayQ4Choices(){
        let q4ChoicesArray = ["Maine", "Rhode Island", "Maryland", "Delaware"];
        q4ChoicesArray = _.shuffle(q4ChoicesArray);
        for(let i = 0; i < q4ChoicesArray.length; i++){
            $("#q4Choices").append(`<input type="radio" name="q4" id="${q4ChoicesArray[i]}" value="${q4ChoicesArray[i]}"> <label for="${q4ChoicesArray[i]}">${q4ChoicesArray[i]}</label>`);
            
        }
    }
    displayQ4Choices();
    
    function isFormValid(){
        let isValid = true;
        if($("#q1").val() == ""){
            isValid = false;
            $("#validationFdbk").html("Question 1 was not answered");
        }
        return isValid;
    }
    function rightAnswer(index){
        $(`#q${index}Feedback`).html("Correct!");
        $(`#q${index}Feedback`).attr("class", "bg-success text-white");
        $(`#markImg${index}`).html("<img src='checkmark.png' alt='checkmark'>");
        score += 12.50;
    }
    function wrongAnswer(index){
        $(`#q${index}Feedback`).html("Incorrect!");
        $(`#q${index}Feedback`).attr("class", "bg-warning text-white");
        $(`#markImg${index}`).html("<img src='xmark.png' alt='xmark'>");
    }
    function gradeQuiz(){
        $("#validationFdbk").html("");//resets validation feedback
        
        if(!isFormValid()){
            return;
        }
        
        //variables
        score = 0;
        let q1Response = $("#q1").val().toLocaleLowerCase();
        let q2Response = $("#q2").val();
        let q4Response = $("input[name=q4]:checked").val();
        let q6Response = $("#q6").val().toLocaleLowerCase();
        let q7Response = $("#q7").val().toLocaleLowerCase();
        let q8Response = $("#q8").val().toLocaleLowerCase();
        //Question 1
        if(q1Response == "sacramento"){
            rightAnswer(1);
        }else{
            wrongAnswer(1);
        }
         if(q2Response == "mo"){
            rightAnswer(2);
        }else{
            wrongAnswer(2);
        }
        if($("#Jefferson").is(":checked") && $("#Roosevelt").is(":checked") && $("#Jackson").is(":checked") && $("#Franklin").is(":checked")){
            rightAnswer(3);
        }else{
            wrongAnswer(3);
        }
        if(q4Response == "Rhode Island"){
            rightAnswer(4);
        }else{
            wrongAnswer(4);
        }
        if($("#seal2").css("background-color") == "rgb(255, 255, 0)" ){
            rightAnswer(5);
        }else{
            wrongAnswer(5);
        }
        if(q6Response == "northern california"){
            rightAnswer(6);
        }else{
            wrongAnswer(6);
        }
        if(q7Response == "colorado"){
            rightAnswer(7);
        }else{
            wrongAnswer(7);
        }
        if(q8Response == "savannah"){
            rightAnswer(8);
        }else{
            wrongAnswer(8);
        }
        $("#totalScore").html(`Total Score:  ${score}`);
        if(score == 100){
            $("#congrats").html("Congratulations!");
        }if(score > 80){
            $("#congrats").html("Congratulations!");
        }else{
            $("#fail").html("Try Again");
        }
        $("#totalAttempts").html(`Total Attempts: ${++attempts}`);
        localStorage.setItem("total_attempts", attempts);
    }
    
});//ready