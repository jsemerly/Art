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

/* OPEN MODAL */

if (
    galleryImages.length > 0 &&
    modal &&
    modalImage &&
    modalTitle &&
    modalCaption
) {

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            modal.classList.add("active");

            modalImage.src =
                image.src;

            modalTitle.textContent =
                image.dataset.title || "";

            modalCaption.textContent =
                image.dataset.caption || "";

            document.body.style.overflow =
                "hidden";

        });

    });

}

/* CLOSE BUTTON */

if (closeButton && modal) {

    closeButton.addEventListener("click", () => {

        modal.classList.remove("active");

        document.body.style.overflow =
            "auto";

    });

}

/* CLICK OUTSIDE */

if (modal) {

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.classList.remove("active");

            document.body.style.overflow =
                "auto";

        }

    });

}

/* =========================
   FEATURED CAROUSEL
========================= */

const carouselContainers =
    document.querySelectorAll(
        ".featured-carousel-container"
    );

carouselContainers.forEach(container => {

    const track =
        container.querySelector(
            ".featured-track"
        );

    const prevButton =
        container.querySelector(
            ".carousel-prev"
        );

    const nextButton =
        container.querySelector(
            ".carousel-next"
        );

    const products =
        container.querySelectorAll(
            ".featured-product"
        );

    if (
        !track ||
        !prevButton ||
        !nextButton ||
        products.length === 0
    ) return;

    let currentIndex = 0;

    function visibleCards() {

        if (window.innerWidth <= 700) {
            return 1;
        }

        if (window.innerWidth <= 1000) {
            return 2;
        }

        return 3;

    }

    function updateCarousel() {

        const gap = 30;

        const width =
            products[0].offsetWidth + gap;

        track.style.transform =
            `translateX(-${currentIndex * width}px)`;

    }

    nextButton.addEventListener(
        "click",
        () => {

            const maxIndex =
                products.length - visibleCards();

            if (currentIndex < maxIndex) {

                currentIndex++;

                updateCarousel();

            }

        }
    );

    prevButton.addEventListener(
        "click",
        () => {

            if (currentIndex > 0) {

                currentIndex--;

                updateCarousel();

            }

        }
    );

    window.addEventListener(
        "resize",
        updateCarousel
    );

    updateCarousel();

});

/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

const formStatus =
    document.getElementById("formStatus");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (e) {

            e.preventDefault();

            const formData =
                new FormData(contactForm);

            const data = {

                name:
                    formData.get("name"),

                email:
                    formData.get("email"),

                message:
                    formData.get("message")

            };

            try {

                const response =
                    await fetch(
                        "YOUR_GOOGLE_SCRIPT_URL_HERE",
                        {

                            method: "POST",

                            mode: "cors",

                            headers: {
                                "Content-Type":
                                    "text/plain"
                            },

                            body:
                                JSON.stringify(data)

                        }
                    );

                const result =
                    await response.json();

                if (
                    result.result === "success"
                ) {

                    formStatus.textContent =
                        "Message sent successfully.";

                    formStatus.style.color =
                        "#00bfff";

                    contactForm.reset();

                } else {

                    formStatus.textContent =
                        "Something went wrong.";

                    formStatus.style.color =
                        "red";

                }

            } catch (error) {

                formStatus.textContent =
                    "Connection failed.";

                formStatus.style.color =
                    "red";

            }

        }
    );

}