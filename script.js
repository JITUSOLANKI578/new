// script.js

// Array of job postings
const jobPostings = [
    {
        icon: 'fas fa-user-cog fa-3x',
        title: 'HR',
        company: 'Apex Finance & Telecalling Company',
        description: 'Responsible for recruitment, employee relations, and performance management.',
        age: '18+',
        languages: 'Hindi & Basic English',
        timing: 'Part-time',
        salary: '₹15,000 - ₹30,000 per month',
        additionalInfo: 'You can choose daily basis also',
        applyLink: 'https://surveyheart.com/form/66dc45191e6bd00681369a2f'
    },
    {
        icon: 'fas fa-user fa-3x',
        title: 'Company Staff',
        company: 'Apex Finance & Telecalling Company',
        description: 'Support various operational tasks and assist in different departments as needed.',
        age: '18+',
        languages: 'Hindi & Basic English',
        timing: 'Part-time',
        salary: '₹20,000 - ₹30,000 per month',
        additionalInfo: '',
        applyLink: 'https://surveyheart.com/form/66dc45191e6bd00681369a2f'
    },
    {
        icon: 'fas fa-phone-volume fa-3x',
        title: 'Telecaller',
        company: 'Apex Finance & Telecalling Company',
        description: 'Responsible for making calls to potential clients, generating leads, and following up on sales opportunities.',
        age: '18+',
        languages: 'Hindi & Basic English',
        timing: 'Part-time',
        salary: '₹15,000 - ₹20,000 per month',
        additionalInfo: '',
        applyLink: 'https://surveyheart.com/form/66dc45191e6bd00681369a2f'
    }
    // Add more job postings as needed
];

// Function to create a job posting element
function createJobPosting(job) {
    return `
        <div class="col-md-4 col-sm-6 mb-4">
            <div class="card">
                <div class="card-body text-center">
                    <i class="${job.icon} mb-3"></i>
                    <h5 class="card-title">${job.title}</h5>
                    <p class="card-text"><strong>Company:</strong> ${job.company}</p>
                    <p class="card-text"><strong>Job Description:</strong> ${job.description}</p>
                    <p class="card-text"><strong>Age:</strong> ${job.age}</p>
                    <p class="card-text"><strong>Languages:</strong> ${job.languages}</p>
                    <p class="card-text"><strong>Timing:</strong> ${job.timing}</p>
                    <p class="card-text"><strong>Salary:</strong> ${job.salary}</p>
                    <p class="card-text"><strong>Additional Info:</strong> ${job.additionalInfo}</p>
                    <a href="${job.applyLink}" class="btn btn-primary">Apply Now</a>
                </div>
            </div>
        </div>
    `;
}

// Function to render all job postings
function renderJobPostings() {
    const container = document.querySelector('#job-postings');
    container.innerHTML = jobPostings.map(createJobPosting).join('');
}

// Call the function to render the job postings when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderJobPostings);
