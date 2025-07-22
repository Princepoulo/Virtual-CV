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
    button.addEventListener('click', async function(e) {
        e.preventDefault();
        
        const fileName = this.getAttribute('data-file');
        const certName = this.parentElement.querySelector('h4').textContent;
        const filePath = `assets/${fileName}`;
        
        try {
            // Check if file exists
            const response = await fetch(filePath, { method: 'HEAD' });
            
            if (!response.ok) {
                throw new Error('File not found on server');
            }
            
            // Create download link
            const link = document.createElement('a');
            link.href = filePath;
            link.download = fileName;
            
            // For better cross-browser support
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            console.log(`Downloading ${certName} certificate`);
            
        } catch (error) {
            console.error('Download error:', error);
            alert(`Could not download ${certName} certificate. Please contact me directly.`);
        }
    });
})
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

