document.querySelectorAll('.job h3').forEach(jobTitle => {
    jobTitle.addEventListener('click', () => {
        const responsibilities = jobTitle.nextElementSibling;
        responsibilities.style.display = responsibilities.style.display === 'none' ? 'block' : 'none';
    });
});


