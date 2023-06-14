// const options = {
//   headers: {
//     Authorization: `Bearer ${GitHub.myToken}`,
//   },
// };
class GitHub {
  static client_ID = "9dac8bc3c4b9744e4149";
  static client_Secret = "23584998795821b985a0186d7a2824f6c9e9a809";
  static myToken =
    "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";
  static mySecondToken = "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";
  static url = "https://api.github.com";

  constructor() {}

  async getUser(user) {
    const profileResponse = await fetch(
      `${GitHub.url}/users/${user}?client_id=${GitHub.client_ID}&client_secret=${GitHub.client_Secret}`
    );
    const profileData = await profileResponse.json();

    return {
      profileData,
    };
  }
}
