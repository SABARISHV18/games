let count=0;
function func()
{
    count+=1;
    document.getElementById("total").innerHTML="No of touches: "+count;
   
}
var second=60;
function timer()
{ 
     second--;
     document.getElementById("first").style.marginLeft=Math.random()*600+"px";
     document.getElementById("first").style.marginTop=Math.random()*300+"px";
     var min=Math.floor(second/60);
     var rem=second%60;
     if(rem<10)
     rem="0"+rem;
     document.getElementById("timer").innerHTML="Time remaining: "+min+":"+rem;
    if(second==0)
    {
        clearTimeout(timerId);
        window.alert("game over");
        location.reload();
    }
     
}
var timerId=setInterval(timer,1000);
function restart()
{
   window.location.reload();
}