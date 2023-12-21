function showJobDetails(jobId) {
    // This is a simplified example; in a real scenario, you'd fetch job details from the server
    const jobDetails = getJobDetailsById(jobId);

    // Update the jobDetails div with the content
    document.getElementById('jobTitle').innerText = jobDetails.title;
    document.getElementById('jobDescription').innerText = jobDetails.description;
    document.getElementById('jobLocation').innerText = `Location: ${jobDetails.location}`;

    // Update the URL
    window.history.pushState({}, '', `/job-details/${jobId}`);

    // Hide the jobPosts and show the jobDetails
    document.getElementById('jobPosts').style.display = 'none';
    document.getElementById('jobDetails').style.display = 'block';
}

function goBack() {
    // Show the jobPosts and hide the jobDetails
    document.getElementById('jobPosts').style.display = 'flex';
    document.getElementById('jobDetails').style.display = 'none';

    // Restore the original URL
    window.history.pushState({}, '', '/');
}

// This is a placeholder function; in a real scenario, you'd fetch job details from the server
function getJobDetailsById(jobId) {
    // Assume some dummy data for demonstration purposes
    const dummyData = [

        {
            id: 1,
            title: "Software Engineer",
            description: "",
            location: "City A"
        },
        {
            id: 2,
            title: "Data Scientist",
            description: "We are looking for a skilled data scientist to analyze and interpret complex data sets.",
            location: "City B"
        },
        {
            id: 3,
            title: "Software Engineer",
            description: "Join our dynamic team and work on cutting-edge technologies.",
            location: "City A"
        },
        {
            id: 4,
            title: "Software Engineer",
            description: "Join our dynamic team and work on cutting-edge technologies.",
            location: "City A"
        },
        {
            id: 5,
            title: "Software Engineer",
            description: "Join our dynamic team and work on cutting-edge technologies.",
            location: "City A"
        },
        {
            id: 6,
            title: "Software Engineer",
            description: "Join our dynamic team and work on cutting-edge technologies.",
            location: "City A"
        },
        // Add more dummy data as needed
    ];

    // Find the job details by ID
    return dummyData.find(job => job.id === jobId);

}

function applyForJob(jobId) {
    // Replace this with your actual application logic
    const jobDetails = getJobDetailsById(jobId);

    // Assuming the jobDetails object has an 'applyUrl' property for the external URL
    const applyUrl = jobDetails.applyUrl;

    // Open the external URL in a new tab/window
    window.open(applyUrl, '_blank');
}