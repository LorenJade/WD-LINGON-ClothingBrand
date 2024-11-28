document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    if (this.checkValidity()) {
        var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
        confirmationModal.show();
    } else {
        this.reportValidity(); // Highlight invalid fields
    }
});