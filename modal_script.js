// Modal functionality
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalGithub = document.getElementById('modal-github');
const modalDocs = document.getElementById('modal-docs');
const closeBtn = document.querySelector('.close-btn');
const modalBtns = document.querySelectorAll('.modal-btn');

// Open modal and set content
modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-title');
        const description = btn.getAttribute('data-description');
        const github = btn.getAttribute('data-github');
        const docs = btn.getAttribute('data-docs');
        
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalGithub.href = github;
        
        // Handle documentation link
        if (docs) {
            modalDocs.href = docs;
            modalDocs.style.display = 'inline-block';
        } else {
            modalDocs.style.display = 'none';
        }
        
        modal.classList.add('show');
    });
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});