function check()
{
var elt=document.getElementById("mymail");
confirm("Do you confirm that your adresss mail is " + elt.value + "?");
}

function PutMask(id)
{
var par = document.getElementById(id);
if(par.style.display == 'none')
{
par.style.display = 'block';
}
else
{
par.style.display='none';
}
}

function AddWork(){
var x=document.getElementById('yearexp').value;
var y=document.getElementById('nameexp').value;
var z=document.getElementById('desexp').value;
document.getElementById('lworkexp').innerHTML += '<dt><em>'+x+'</em>: '+y+'</dt><dd>'+z+'</dd>';
}

function AddSco(){
var x=document.getElementById('yearsco').value;
var y=document.getElementById('namesco').value;
document.getElementById('led').innerHTML += '<li><em>'+x+'</em>:'+y+'</li>';
}