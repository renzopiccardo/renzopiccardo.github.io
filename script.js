function leerJSONLocal(file, callback) 
{
  if (localStorage.getItem("juegos") == undefined) 
  {
    var jsonOriginal = new XMLHttpRequest();
    jsonOriginal.overrideMimeType("application/json");
    jsonOriginal.open("GET", file, true);
    jsonOriginal.onreadystatechange = () => 
    {
      if (jsonOriginal.readyState === 4 && jsonOriginal.status == "200") 
      {
        localStorage.setItem("juegos", jsonOriginal.responseText);
        callback(jsonOriginal.responseText);
      }
    }
    jsonOriginal.send(null);
  }
  else
  {
    callback(localStorage.getItem("juegos"));
  }
}