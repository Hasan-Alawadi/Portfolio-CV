// Smooth Scroll Funktion für den "Hire Me"-Button
document.querySelector('.smoothscroll').addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
    });
});

// Funktion zum Download des CVs
document.getElementById('downloadCV').addEventListener('click', function(event) {
    event.preventDefault();
    // Füge hier den tatsächlichen CV-Download-Link ein
    const cvLink = 'path/to/your/cv.pdf';  // Beispiel: '/files/Hasan_CV.pdf'
    const link = document.createElement('a');
    link.href = cvLink;
    link.download = 'Hasan_Mohammed_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
