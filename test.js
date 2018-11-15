json = [
    {
      "id":0,
        "imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg",
        "altText":"A white cat wearing a green helmet shaped melon on its head. ",
        "codeNames":[ "Juggernaut", "Mrs. Wallace", "Buttercup"
      ]
    }
  ]
let html ="";

json.forEach(function(elem) {
    var keys = Object.keys(elem);
    html += "<div class = 'cat'>";
    keys.forEach(function(key) {
      html += "<strong>" + key + "</strong>: " + elem[key] + "<br>";
    });
    html += "</div><br>";
  });

  
  console.log(html);