
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
 //Take the name of the second player and store it in a variable

    localStorage.setItem("player1_name", player1_name);
   //Store the name of the second player to the local storage

    window.location = "game_page.html";
}

