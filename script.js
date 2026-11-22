
// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// DEPARTMENTS DATA

const departments = [
    {
        icon: "💻",
        name: "Computer Science",
        description: "Explore programming, AI, data science and software development."
    },
    {
        icon: "⚡",
        name: "Electrical Engineering",
        description: "Study electrical systems, circuits and emerging technologies."
    },
    {
        icon: "🏗️",
        name: "Civil Engineering",
        description: "Learn about construction, structures and infrastructure."
    },
    {
        icon: "⚙️",
        name: "Mechanical Engineering",
        description: "Discover mechanical systems, design and manufacturing."
    },
    {
        icon: "📊",
        name: "Business Administration",
        description: "Develop management, leadership and business skills."
    },
    {
        icon: "🔬",
        name: "Electronics Engineering",
        description: "Explore electronics, embedded systems and communication."
    }
];

// COURSES DATA

const courses = [
    {
        name: "B.Tech Computer Science",
        department: "Computer Science",
        duration: "4 Years",
        description: "Programming, software engineering, AI and computer systems."
    },
    {
        name: "B.Tech Electrical Engineering",
        department: "Electrical Engineering",
        duration: "4 Years",
        description: "Electrical circuits, power systems and control engineering."
    },
    {
        name: "B.Tech Civil Engineering",
        department: "Civil Engineering",
        duration: "4 Years",
        description: "Construction, structural engineering and infrastructure."
    },
    {
        name: "B.Tech Mechanical Engineering",
        department: "Mechanical Engineering",
        duration: "4 Years",
        description: "Mechanical design, manufacturing and thermodynamics."
    },
    {
        name: "BBA",
        department: "Business Administration",
        duration: "3 Years",
        description: "Business management, finance and marketing."
    },
    {
        name: "B.Tech Electronics",
        department: "Electronics Engineering",
        duration: "4 Years",
        description: "Electronics, communication and embedded technologies."
    }
];

// FACULTY DATA

const faculty = [
    {
        icon: "👩‍🏫",
        name: "Dr. Ananya Sharma",
        designation: "Professor",
        department: "Computer Science"
    },
    {
        icon: "👨‍🏫",
        name: "Dr. Rahul Verma",
        designation: "Associate Professor",
        department: "Electrical Engineering"
    },
    {
        icon: "👩‍🏫",
        name: "Dr. Priya Reddy",
        designation: "Professor",
        department: "Civil Engineering"
    },
    {
        icon: "👨‍🏫",
        name: "Dr. Arjun Rao",
        designation: "Assistant Professor",
        department: "Mechanical Engineering"
    },
    {
        icon: "👩‍🏫",
        name: "Dr. Sneha Kapoor",
        designation: "Professor",
        department: "Business Administration"
    },
    {
        icon: "👨‍🏫",
        name: "Dr. Kiran Kumar",
        designation: "Associate Professor",
        department: "Electronics Engineering"
    }
];

// STUDENT DATA

const students = [
    {
        icon: "👩🏻‍🎓",
        name: "Aarav Sharma",
        department: "Computer Science",
        achievement: "Hackathon Winner"
    },
    {
        icon: "👨🏻‍🎓",
        name: "Riya Patel",
        department: "Electrical Engineering",
        achievement: "Academic Excellence"
    },
    {
        icon: "👩🏻‍🎓",
        name: "Aditya Reddy",
        department: "Civil Engineering",
        achievement: "Research Contributor"
    }
];

// EVENTS DATA

const events = [
    {
        date: "DEC 05",
        name: "Tech Fest 2026",
        description: "A campus technology festival featuring coding, innovation and project exhibitions."
    },
    {
        date: "DEC 12",
        name: "Career Guidance Seminar",
        description: "Connect with industry experts and learn about career opportunities."
    },
    {
        date: "DEC 20",
        name: "Cultural Festival",
        description: "Celebrate music, dance, creativity and campus culture."
    }
];

// DISPLAY DEPARTMENTS

const departmentGrid = document.getElementById("departmentGrid");

departments.forEach(department => {
    const card = document.createElement("div");
    card.className = "department-card";

    card.innerHTML = `
        <div class="department-icon">${department.icon}</div>
        <h3>${department.name}</h3>
        <p>${department.description}</p>
    `;

    departmentGrid.appendChild(card);
});

// DISPLAY COURSES

const courseGrid = document.getElementById("courseGrid");

courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";

    card.innerHTML = `
        <h3>${course.name}</h3>
        <p><strong>Department:</strong> ${course.department}</p>
        <p><strong>Duration:</strong> ${course.duration}</p>
        <p>${course.description}</p>
        <span class="course-tag">Undergraduate</span>
    `;

    courseGrid.appendChild(card);
});

// DISPLAY FACULTY

const facultyGrid = document.getElementById("facultyGrid");

faculty.forEach(member => {
    const card = document.createElement("div");
    card.className = "faculty-card";

    card.innerHTML = `
        <div class="faculty-avatar">${member.icon}</div>
        <h3>${member.name}</h3>
        <p>${member.designation}</p>
        <p>${member.department}</p>
    `;

    facultyGrid.appendChild(card);
});

// DISPLAY STUDENTS

const studentGrid = document.getElementById("studentGrid");

students.forEach(student => {
    const card = document.createElement("div");
    card.className = "student-card";

    card.innerHTML = `
        <div class="student-avatar">${student.icon}</div>
        <h3>${student.name}</h3>
        <p>${student.department}</p>
        <span class="achievement">${student.achievement}</span>
    `;

    studentGrid.appendChild(card);
});

// DISPLAY EVENTS

const eventGrid = document.getElementById("eventGrid");

events.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
        <span class="event-date">${event.date}</span>
        <h3>${event.name}</h3>
        <p>${event.description}</p>
    `;

    eventGrid.appendChild(card);
});

// CONTACT FORM

const contactForm = document.getElementById("contactForm");
const contactStatus = document.getElementById("contactStatus");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !message) {
        contactStatus.textContent = "Please fill in all fields.";
        return;
    }

    contactStatus.textContent =
        "Thank you, " + name + "! Your message has been received in this demo.";

    contactForm.reset();
});
