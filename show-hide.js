var a;
function show_hide()
{
if(a==1)
{
document.getElementById("Message").style.display="inline";
return a=0;
}
else 
{
document.getElementById("Message").style.display="none";
return a=1;
}
}

function nextPage() {
    window.location.href = "the-msg.html";
  }