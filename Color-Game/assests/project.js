var square = document.querySelectorAll(".square");
var colordisplay = document.getElementById("colordisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var button = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");


var colors = generaterandomcolors(numsquares);
var pickedcolor = pickcolor();
var numsquares = 6;


easybtn.addEventListener("click", function()
{
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    numsquares = 3;
    colors = generaterandomcolors(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    for(var i = 0; i < square.length; i ++)
    {
        if(colors[i])
        {
            square[i].style.background = colors[i];
        }
        else
        {
            square[i].style.display = "none";
        }
    }
});



hardbtn.addEventListener("click", function()
{
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numsquares = 6;
    colors = generaterandomcolors(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    for(var i = 0; i < square.length; i ++)
    {
            square[i].style.background = colors[i];
            square[i].style.display = "block";
        }
});



button.addEventListener("click", function() 
{
    colors = generaterandomcolors(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    button.textContent = "New Colors";
    message.textContent = "";
    for(var i = 0; i< square.length; i ++)
    {
        square[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
});


 colordisplay.textContent = pickedcolor;


for(var i = 0; i < square.length; i++)
{
    square[i].style.background = colors[i];
    square[i].addEventListener("click", function()
    {
        clickedcolor = this.style.background;
        if(clickedcolor === pickedcolor)
        {
            message.textContent = "Correct!";
            changecolors(clickedcolor);
            h1.style.background = clickedcolor;
            button.textContent = "Play Again ?";
        }
        else 
        {
            this.style.background = "#232323";
            message.textContent = "Try Again";
        }
    });
}


function changecolors(color)
{
    for(var i = 0; i < colors.length; i++)
    {
        square[i].style.background = color;
    }
}


function pickcolor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generaterandomcolors(num)
{
    var arr = [];

    for(var i = 0; i < num; i++)
    {
        arr[i] = randomcolor(); 
    }

    return arr;
}


function randomcolor()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var randomcolorr = "rgb(" + r + ", " + g + ", " + b + ")";
    return randomcolorr;
}