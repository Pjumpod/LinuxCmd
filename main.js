function lw() {
  var i=document.getElementById("input").value
  var xhr = new XMLHttpRequest()
  xhr.open("GET","http://127.0.0.1/cgi-bin/linux.py?cmd="+i,true);
  xhr.send();
  xhr.onload = function(){
    var output = xhr.responseText;
    document.getElementById("d1").innerHTML=output;
  }
}
