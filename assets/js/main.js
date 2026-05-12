/* =========================
   HEADER SCROLL EFFECT
========================= */

window.addEventListener("scroll", function () {

    const header =
        document.getElementById("header");

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(0,0,0,0.9)";

    } else {

        header.style.background =
            "rgba(0,0,0,0.5)";

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

/* ONLY RUN IF GALLERY EXISTS */

if (
    galleryImages.length > 0 &&
    modal &&
    modalImage &&
    modalTitle &&
    modalCaption &&
    closeButton
) {

    /* OPEN MODAL */

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            modal.classList.add("active");

            modalImage.src =
                image.src;

            modalTitle.textContent =
                image.dataset.title;

            modalCaption.textContent =
                image.dataset.caption;

            document.body.style.overflow =
                "hidden";

        });

    });

    /* CLOSE BUTTON */

    closeButton.addEventListener("click", () => {

        closeModal();

    });

    /* CLICK OUTSIDE */

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            closeModal();

        }

    });

    /* ESC KEY */

    document.addEventListener("keydown", (e) => {

        if (
            e.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            closeModal();

        }

    });

}

/* =========================
   CLOSE MODAL FUNCTION
========================= */

function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow =
        "auto";

}