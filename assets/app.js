const search_user = document.getElementById("search_user");
const gitHub = new GitHub();
const ui = new UI();

search_user.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText !== "") {
    gitHub
      .getUser(userText)
      .then((data) => {
        if (data.profileData.message === "Not Found") {
          // show error msg
          ui.showAlert("User Not Found!", "alert alert-danger");
        } else {
          // show profile
          ui.showProfile(data.profileData);
        }
      })
      .catch((err) => console.log(err));
  } else {
    ui.clearProfile();
  }
});
