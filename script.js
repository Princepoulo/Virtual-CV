// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menuIcon.classList.replace('bx-x', 'bx-menu');
        }
    });
});

// Menu toggle functionality
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});

// CV Download functionality
document.getElementById('download-cv').addEventListener('click', function() {
    // Create a temporary link
    const link = document.createElement('a');
    link.href = 'CV.pdf';
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Add download tracking here
    console.log('CV downloaded');
    
    // Optional: Show download confirmation
    alert('Your CV download has started!');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        navbar.classList.remove('active');
        menuIcon.classList.replace('bx-x', 'bx-menu');
    }
});
// Certification Download Functionality
document.querySelectorAll('.download-btn').forEach(button => {
  button.addEventListener('click', function() {
    const fileName = this.getAttribute('data-file');
    const certName = this.parentElement.querySelector('h4').textContent;
    
    // Create temporary download link
    const link = document.createElement('a');
    link.href = `assets/certifications/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show download confirmation
    alert(`Downloading ${certName} certificate...`);
  });
});
// CV Download
document.getElementById('download-cv').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = './CV.pdf'; // Updated path
    link.download = 'Jabulane_Poulo_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Certificates Download
document.querySelectorAll('.download-btn').forEach(button => {
  button.addEventListener('click', function() {
    const fileName = this.getAttribute('data-file');
    const link = document.createElement('a');
    link.href = `./assets/certifications/${fileName}`; // Updated path
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

