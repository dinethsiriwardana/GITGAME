// Get the ul element for the repository list
const repoList = document.getElementById("repo-list");

// Sample data for repositories (you can replace this with real data from the GitHub API)
const repositories = [
    { name: "repo1", description: "Description for repo1" },
    { name: "repo2", description: "Description for repo2" },
    { name: "repo3", description: "Description for repo3" }
];

// Function to populate the repository list
function populateRepoList() {
    repositories.forEach(repo => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${repo.name}</strong>: ${repo.description}`;
        repoList.appendChild(li);
    });
}

// Call the function to populate the repository list
populateRepoList();
