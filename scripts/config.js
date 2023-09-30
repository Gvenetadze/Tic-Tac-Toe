function startOverlay(event) {
  editedPlayer = +event.target.dataset.playerid;
  backdropElement.style.display = "block";
  overlayElement.style.display = "block";
}

function closeOverlay() {
  backdropElement.style.display = "none";
  overlayElement.style.display = "none";

  formElement.firstElementChild.classList.remove("error");
  errorsOutput.textContent = "";
  formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerData(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPLayerName = formData.get("username").trim();

  if (!enteredPLayerName) {
    event.target.firstElementChild.classList.add("error");
    errorsOutput.textContent = "Please enter a valid name!";
    return;
  }
  const updatedPlayerName = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerName.children[1].textContent = enteredPLayerName;
  players[editedPlayer - 1].name = enteredPLayerName;
  closeOverlay();
}


