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
// Certificate Download Functionality
document.querySelectorAll('.download-btn').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const fileName = this.getAttribute('data-file');
    const filePath = `assets/${fileName}`; // Assuming certificates are in assets folder
    
    // Create temporary download link
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    
    // Check if file exists
    fetch(filePath, { method: 'HEAD' })
      .then(res => {
        if (res.ok) {
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          alert('Certificate file not found. Please contact me directly.');
          console.error('File not found:', filePath);
        }
      })
      .catch(err => {
        alert('Error downloading certificate. Please try again later.');
        console.error('Download error:', err);
      });
  });
});
// CV Download
// In your script.js
document.getElementById('download-cv').addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'assets/CV.pdf';
  link.download = 'Jabulane_Poulo_CV.pdf';
  link.click();
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

