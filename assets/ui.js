class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-profile img-fluid mb-2" src="${user["avatar_url"]}"/>
          <a href="${user["html_url"]}" target="_blank" class="btn btn-primary btn-block view-profile">view Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repos: ${user["public_repos"]}</span>
          <span class="badge badge-secondary">Public Gists: ${user["public_Gists"]}</span>
          <span class="badge badge-success">Followers: ${user["followers"]}</span>
          <span class="badge badge-info">Following: ${user["following"]}</span>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user["company"]}</li>
            <li class="list-group-item">Website / Blog: ${user["blog"]}</li>
            <li class="list-group-item">Location: ${user["location"]}</li>
            <li class="list-group-item">Member Since: ${user["created_at"]}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }

  showAlert(message, className) {
    // clear alert first
    this.clearAlert();
    // set timeout for clear alert
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
    // create a div element
    const div = document.createElement("div");
    // add Classes
    div.className = className;
    // add Text message
    // div.innerHTML = message;
    div.appendChild(document.createTextNode(message));
    // Get Parent
    const container = document.querySelector(".searchContainer");
    // Get Search box
    const search = document.querySelector(".search");
    // insert alert
    container.insertBefore(div, search);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
