var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var h1 = document.querySelector("h1");
var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
var reset = document.getElementById("reset");
var input = document.querySelector("input");
var p = document.querySelector("p");
var span = document.querySelector("p span");



var p1score = 0;
var p2score = 0;
var gameover = false;
var win = 5;




p1button.addEventListener("click", function()
{
    if(!gameover)
    {
        p1score++;
        if(p1score === win)
        {
            span1.classList.add("winner");
            gameover = true;
        }
        span1.textContent = p1score;
    }
    
});




p2button.addEventListener("click", function()
{
    if(!gameover)
    {
        p2score++;
        if(p2score === win)
        {
            span2.classList.add("winner");
            gameover = true;
        }
        span2.textContent = p2score;
    }

});




reset.addEventListener("click", function()
{
    p1score = 0;
    p2score = 0;
    span1.textContent = 0;
    span2.textContent = 0;
    span1.classList.remove("winner");
    span2.classList.remove("winner");
    gameover = false;
});




input.addEventListener("change", function()
{
span.textContent = input.value;
win = Number(input.value);
});