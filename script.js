document.addEventListener('DOMContentLoaded', function () {
    const projectDetails = {
        1: {
            title: "Library Lending System",
            description: "Developed a Library Lending web application for Hope Ridge School. The application maintains records of students and teachers borrowing books from the school's library.",
            technologies: "Django, MySQL, HTML, CSS, GitHub"
        },
        2: {
            title: "Choir Database System",
            description: "Developed a database web application for GHAMSU Choir, UCC chapter. Implemented an attendance system for meeting tracking, created a birthday generator to list members with birthdays, implemented an auto-promote feature to advance members to the next academic level annually, and added import/export features for administrators to manage member data in various document formats.",
            technologies: "Django, MySQL, HTML, CSS, Javascript, GitHub"
        },
        3: {
            title: "Weather Application",
            description: "Created a mobile application to fetch weather data based on the user's location. Integrated Open Weather API to retrieve weather information and enabled city-based weather searches.",
            technologies: "Flutter"
        }
    };

    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTechnologies = document.getElementById('modal-technologies');


    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function () {
            const projectId = this.closest('.col-lg-4').getAttribute('data-project-id');
            loadProjectDetails(projectId);
            const modal = new bootstrap.Modal(document.getElementById('project-modal'));
            modal.show();
        });
    });

    function loadProjectDetails(projectId) {
        const project = projectDetails[projectId];
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalTechnologies.innerHTML = `<b>Technologies Used</b>: <i>${project.technologies}</i>`;
        }
    });