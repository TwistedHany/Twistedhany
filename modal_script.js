document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalGithub = document.getElementById("modal-github");
    const closeModal = document.querySelector(".close-btn");

    document.querySelectorAll(".modal-btn").forEach(button => {
        button.addEventListener("click", () => {
            modalTitle.textContent = button.getAttribute("data-title");
            modalDescription.textContent = button.getAttribute("data-description");
            modalGithub.href = button.getAttribute("data-github");
            modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

