let s="";
let s1="";
let arr=[];
const displayarea=document.getElementById("displayarea");
const historyarea=document.getElementById("historyarea");
function add(str){ 
    s+=str;
    displayarea.value=s;
}
function solve()
{
    let result=eval(s);
    s1+=" "+(s+" = "+" "+result);
    arr.push(s1);
    s="";
    s1="";
    displayarea.value=result;
    history();
}
function history()
{
    historyarea.innerHTML="";
    for(let i=arr.length-1;i>=0;i--)
    {
        let item=document.createElement("li");
        item.innerHTML=arr[i];
        item.style.marginBottom="10px";
        historyarea.appendChild(item);
    }
}
function allclear()
{
    s="";
    displayarea.value=s;
}
function clearchar()
{
    s=s.slice(0,s.length-1);
    displayarea.value=s;
}
function historyclear()
{
    arr.splice(0,arr.length);
    history();
}