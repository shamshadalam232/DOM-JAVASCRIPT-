const input = document.querySelector(".input");
const searchbtn = document.querySelector(".searchBtn");
const profileCard = document.querySelector(".profile-card");

const name = document.querySelector(".name");
const userId = document.querySelector(".userid");
const bio = document.querySelector(".bio");
const userlocation = document.querySelector(".location");
const link = document.querySelector(".link");
const joinDate = document.querySelector(".joinedate");

const repos = document.querySelector(".repo");
const followers = document.querySelector(".followers");
const following = document.querySelector(".followwing");

const img = document.querySelector(".img");
const githublink = document.querySelector(".btn-btn")

let currentSearch = "";

let fetchedAccount = async () => {
  let url = `https://api.github.com/users/${currentSearch}`;

  try {
    let result = await fetch(url);

    if (!result.ok) {
      throw new Error(`HTTP error! Status: ${result.status}`);
    }

    let data = await result.json();

    console.log(data);

    // Profile Information
    name.textContent = data.name || "No name available";
    userId.textContent = `@${data.login}`;
    bio.textContent = data.bio || "No bio available";

    // Profile Image
    img.src = data.avatar_url;
    img.alt = `${data.login}'s profile picture`;

    // Location
    userlocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${
      data.location || "Not available"
    }`;

    // GitHub Link
    link.innerHTML = `<i class="fa-solid fa-link"></i> ${data.html_url}`;

    // Joined Date
    joinDate.textContent = new Date(data.created_at).toLocaleDateString();

    // Statistics
    repos.innerHTML = `<p>${data.public_repos}</p><p>Repos</p>`;

    followers.innerHTML = `<p>${data.followers}</p><p>Followers</p>`;

    following.innerHTML = `<p>${data.following}</p><p>Following</p>`;

    githublink.addEventListener("click", ()=> {
        window.open(data.html_url, "_blank")
    })

  } catch (error) {
    console.log(error);
    alert("GitHub user not found!");
  }
};

searchbtn.addEventListener("click", () => {
  let value = input.value.trim();

  if (value === "") {
    return alert("Please enter a username");
  }

  currentSearch = value;
  fetchedAccount();
});