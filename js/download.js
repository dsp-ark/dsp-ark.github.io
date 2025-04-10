// download.js
async function downloadLatestRelease(repoOwner, repoName, filename) {
    try {
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases/latest`);
        const data = await response.json();
        const tag = data.tag_name;
        console.log(`Latest version of ${repoName} is ${tag}`);
        window.location.href = `https://github.com/${repoOwner}/${repoName}/releases/download/${tag}/${filename}`;
    } catch (error) {
        console.error("Failed to fetch release:", error);
        alert("Failed to fetch the latest release. Please try again later.");
    }
}