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

/* CLOSE MODAL FUNCTION */

function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow =
        "auto";

}

/* =========================
   FEATURED CAROUSEL
========================= */

const featuredTrack =
    document.getElementById("featuredTrack");

const prevButton =
    document.getElementById("prevBtn");

const nextButton =
    document.getElementById("nextBtn");

if (
    featuredTrack &&
    prevButton &&
    nextButton
) {

    let currentIndex = 0;

    const products =
        document.querySelectorAll(".featured-product");

    function visibleCards() {

        if (window.innerWidth <= 700) {
            return 1;
        }

        if (window.innerWidth <= 1000) {
            return 2;
        }

        return 3;

    }

    function updateFeaturedCarousel() {

        const product =
            products[0];

        const gap = 30;

        const width =
            product.offsetWidth + gap;

        featuredTrack.style.transform =
            `translateX(-${currentIndex * width}px)`;

    }

    nextButton.addEventListener("click", () => {

        const maxIndex =
            products.length - visibleCards();

        if (currentIndex < maxIndex) {

            currentIndex++;

            updateFeaturedCarousel();

        }

    });

    prevButton.addEventListener("click", () => {

        if (currentIndex > 0) {

            currentIndex--;

            updateFeaturedCarousel();

        }

    });

    window.addEventListener(
        "resize",
        updateFeaturedCarousel
    );

    updateFeaturedCarousel();

}

/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (e) {

            e.preventDefault();

            const formStatus =
                document.getElementById(
                    "formStatus"
                );

            const formData = {

                name:
                    contactForm.name.value,

                email:
                    contactForm.email.value,

                message:
                    contactForm.message.value

            };

            formStatus.textContent =
                "Sending...";

            formStatus.style.color =
                "white";

            try {

                await fetch(
                    "https://script.google.com/macros/s/AKfycbwK2iJv9S7iNKd5TRnsopJv03i3EHrG4EGkyDdFaeQqMgar0fJusrzXt63R6aAHozSzyQ/exec",
                    {

                        method: "POST",

                        mode: "no-cors",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body:
                            JSON.stringify(formData)

                    }
                );

                formStatus.textContent =
                    "Message sent successfully.";

                formStatus.style.color =
                    "#00bfff";

                contactForm.reset();

            } catch (error) {

                console.error(error);

                formStatus.textContent =
                    "Connection failed.";

                formStatus.style.color =
                    "#ff6b6b";

            }

        }
    );
}
