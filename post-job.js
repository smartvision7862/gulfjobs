// GullfJob Employer Portal - Authentication & Posting Logic Controller

// --- DOM References ---
let elements = {};

document.addEventListener("DOMContentLoaded", () => {
    cacheElements();
    initTheme();
    checkAuthSession();
    setupEventListeners();
});

function cacheElements() {
    elements = {
        themeToggle: document.getElementById("theme-toggle"),
        themeToggleIconLight: document.querySelector(".theme-toggle-light-icon"),
        themeToggleIconDark: document.querySelector(".theme-toggle-dark-icon"),
        
        authCard: document.getElementById("auth-card"),
        loginForm: document.getElementById("login-form"),
        usernameInput: document.getElementById("login-username"),
        passwordInput: document.getElementById("login-password"),
        errorMessage: document.getElementById("error-message"),
        
        postJobContainer: document.getElementById("post-job-container"),
        postJobForm: document.getElementById("post-job-form"),
        logoutBtn: document.getElementById("btn-logout"),
        
        gformContainer: document.getElementById("gform-settings-container"),
        gformForm: document.getElementById("gform-settings-form"),
        
        toastNotification: document.getElementById("toast-notification")
    };
}

// --- Theme Controller ---
function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeToggleIcons(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeToggleIcons(newTheme);
}

function updateThemeToggleIcons(theme) {
    if (theme === "light") {
        elements.themeToggleIconLight.style.display = "none";
        elements.themeToggleIconDark.style.display = "block";
    } else {
        elements.themeToggleIconLight.style.display = "block";
        elements.themeToggleIconDark.style.display = "none";
    }
}

// --- Session Authentication Checking ---
function checkAuthSession() {
    const isLoggedIn = sessionStorage.getItem("employer_logged_in") === "true";
    if (isLoggedIn) {
        elements.authCard.style.display = "none";
        elements.postJobContainer.style.display = "block";
        if (elements.gformContainer) elements.gformContainer.style.display = "block";
        loadGformSettings();
    } else {
        elements.authCard.style.display = "block";
        elements.postJobContainer.style.display = "none";
        if (elements.gformContainer) elements.gformContainer.style.display = "none";
    }
}

// --- Login Form Handler ---
function handleLoginSubmit(event) {
    event.preventDefault();
    
    const username = elements.usernameInput.value.trim();
    const password = elements.passwordInput.value.trim();
    
    // Credentials check
    if (username === "admin" && password === "admin123") {
        elements.errorMessage.style.display = "none";
        sessionStorage.setItem("employer_logged_in", "true");
        
        showToast("Access Granted", "Logged into the employer portal successfully.");
        
        setTimeout(() => {
            checkAuthSession();
        }, 800);
    } else {
        elements.errorMessage.style.display = "block";
        elements.passwordInput.value = "";
    }
}

// --- Logout Handler ---
function handleLogout() {
    sessionStorage.removeItem("employer_logged_in");
    showToast("Logged Out", "Session cleared successfully.");
    setTimeout(() => {
        checkAuthSession();
    }, 500);
}

// --- Job Posting Submission Handler ---
function handleJobSubmit(event) {
    event.preventDefault();
    
    const title = document.getElementById("job-title").value.trim();
    const company = document.getElementById("job-company").value.trim();
    const location = document.getElementById("job-location").value;
    const category = document.getElementById("job-category").value;
    const jobType = document.getElementById("job-type").value;
    const experience = document.getElementById("job-experience").value;
    const salary = document.getElementById("job-salary").value.trim();
    const description = document.getElementById("job-description").value.trim();
    
    // Parse keynotes (split by line, remove empty lines)
    const responsibilities = document.getElementById("job-responsibilities").value
        .split("\n")
        .map(line => line.trim())
        .filter(line => line.length > 0);
        
    const requirements = document.getElementById("job-requirements").value
        .split("\n")
        .map(line => line.trim())
        .filter(line => line.length > 0);
        
    // Generate simple company initials for logo letters
    const initials = company.split(" ")
        .map(word => word.charAt(0))
        .join("")
        .toUpperCase()
        .substring(0, 2);
        
    const newJob = {
        id: "job-" + Date.now(),
        title,
        company,
        logoLetters: initials || "GJ",
        location,
        category,
        jobType,
        experience,
        salary,
        postedDate: "Just now",
        userPosted: true,
        featured: true,
        description,
        responsibilities,
        requirements
    };
    
    // Load existing database
    let database = [];
    const savedDb = localStorage.getItem("gullfjob_db");
    if (savedDb) {
        database = JSON.parse(savedDb);
    }
    
    // Insert new job at the beginning of the list
    database.unshift(newJob);
    
    // Store back to local storage
    localStorage.setItem("gullfjob_db", JSON.stringify(database));
    
    // Button loading animation state
    const submitBtn = document.getElementById("btn-job-submit");
    submitBtn.disabled = true;
    submitBtn.innerText = "Publishing...";
    
    // Show confirmation
    showToast("Vacancy Published!", "Your listing is now live on the search dashboard.");
    
    // Redirect to home page
    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000);
}

// --- Recruiter Application Delivery Settings Handler ---
function handleGformSettingsSubmit(event) {
    event.preventDefault();
    
    const channel = document.getElementById("delivery-channel").value;
    const email = document.getElementById("gform-url").value.trim();
    const sheetUrl = document.getElementById("google-sheet-url").value.trim();
    
    localStorage.setItem("recruiter_delivery_channel", channel);
    localStorage.setItem("recruiter_email", email);
    localStorage.setItem("recruiter_sheet_url", sheetUrl);
    
    showToast("Settings Saved", "Recruiter application delivery configuration updated successfully.");
}

// Load existing settings into form fields
function loadGformSettings() {
    const savedChannel = localStorage.getItem("recruiter_delivery_channel") || "google_sheets";
    const savedEmail = localStorage.getItem("recruiter_email") || "smartvisionwll@gmail.com";
    const savedSheetUrl = localStorage.getItem("recruiter_sheet_url") || "https://script.google.com/macros/s/AKfycbyBhAZSE_bO-273uWU93LIlQkzEcs_w7elEBgHC0Ey5rIzW2N6ZQW8Xet_efuYIx99j/exec";
    
    document.getElementById("delivery-channel").value = savedChannel;
    document.getElementById("gform-url").value = savedEmail;
    document.getElementById("google-sheet-url").value = savedSheetUrl;
    
    // Set field visibilities
    if (savedChannel === "email") {
        document.getElementById("settings-group-email").style.display = "block";
        document.getElementById("settings-group-sheet").style.display = "none";
    } else {
        document.getElementById("settings-group-email").style.display = "none";
        document.getElementById("settings-group-sheet").style.display = "block";
    }
}

// --- Toast Controller ---
function showToast(title, message) {
    const toast = elements.toastNotification;
    toast.querySelector("h4").innerText = title;
    toast.querySelector("p").innerText = message;
    
    toast.classList.add("active");
    
    setTimeout(() => {
        toast.classList.remove("active");
    }, 4000);
}

// --- Setup Event Listeners ---
function setupEventListeners() {
    if (elements.themeToggle) {
        elements.themeToggle.addEventListener("click", toggleTheme);
    }
    
    if (elements.loginForm) {
        elements.loginForm.addEventListener("submit", handleLoginSubmit);
    }
    
    if (elements.logoutBtn) {
        elements.logoutBtn.addEventListener("click", handleLogout);
    }
    
    if (elements.postJobForm) {
        elements.postJobForm.addEventListener("submit", handleJobSubmit);
    }
    
    if (elements.gformForm) {
        elements.gformForm.addEventListener("submit", handleGformSettingsSubmit);
    }
    
    // Toggling the settings fields
    const channelSelect = document.getElementById("delivery-channel");
    if (channelSelect) {
        channelSelect.addEventListener("change", (e) => {
            const value = e.target.value;
            if (value === "email") {
                document.getElementById("settings-group-email").style.display = "block";
                document.getElementById("settings-group-sheet").style.display = "none";
            } else {
                document.getElementById("settings-group-email").style.display = "none";
                document.getElementById("settings-group-sheet").style.display = "block";
            }
        });
    }
}
