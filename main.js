document.addEventListener("DOMContentLoaded", function() {
    // Image Preview Functionality
    document.querySelector('input[type="file"]').addEventListener('change', function(event) {
        let file = event.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function(e) {
                let imgPreview = document.getElementById('imagePreview');
                imgPreview.src = e.target.result;
                imgPreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    // Theme Toggle (Light/Dark Mode)
    const themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // Maintain Theme Selection on Reload
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});
