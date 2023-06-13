class GitHub {
  static client_ID = "9dac8bc3c4b9744e4149";
  static client_Secret = "23584998795821b985a0186d7a2824f6c9e9a809";
  static url = "https://api.github.com";

  constructor() {}

  async getUser(user) {
    const profileResponse = await fetch(
      `${GitHub.url}/users/${user}?client_id=${GitHub.client_ID}&client_secret=${GitHub.client_Secret}`
    );
    const profileData = await profileResponse.json();

    return {
      profileData
    }
  }
}
