// Simple scroll effect for header

window.addEventListener("scroll", function () {

    const header = document.getElementById("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.9)";
    } else {
        header.style.background = "rgba(0,0,0,0.5)";
    }

});

/* =========================
   GALLERY MODAL
========================= */

const galleryImages =
    document.querySelectorAll(".gallery-image");

const modal =
    document.getElementById("galleryModal");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalCaption =
    document.getElementById("modalCaption");

const closeButton =
    document.querySelector(".gallery-close");

/* OPEN MODAL */

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        modal.classList.add("active");

        modalImage.src = image.src;

        modalTitle.textContent =
            image.dataset.title;

        modalCaption.textContent =
            image.dataset.caption;

        document.body.style.overflow = "hidden";

    });

});

/* CLOSE BUTTON */

closeButton.addEventListener("click", () => {

    modal.classList.remove("active");

    document.body.style.overflow = "auto";

});

/* CLICK OUTSIDE */

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});