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

/* =========================
   ARTWORK DATA
========================= */

const ARTWORKS = [

    {
        id: "rework-assignment-red",
        title: "Rework Assignment - Red",
        collection: "College Collection",
        image: "assets/images/wall_art/ReworkAssignment_RedBook_Final.png",
        caption: "A cropped reworking of a famous piece.",
        notes:
            "This section will eventually include the full background, project notes, class context, date, medium, dimensions, process details, and any additional story behind the piece. For now, this is placeholder text so the layout can be tested before final writing is added."
    },

    {
        id: "reimbursement",
        title: "Reimbursement",
        collection: "College Collection",
        image: "assets/images/wall_art/Reimbursement.png",
        caption: "A piece exploring the concept of life, and who ours belongs to.",
        notes:
            "Here I will write in more details about my process, assignment details if from school, maybe dates, year, medium, and any other notes I would like to add to give further context to my art. If the text exceeds the size of this box, this box becomes scrollable so the viewer can keep reading."
    },

    {
        id: "surroundings-patchwork",
        title: "Surroundings Patchwork",
        collection: "College Collection",
        image: "assets/images/wall_art/Surroundings_Patchwork.png",
        caption: "A vibrant composition of interconnected elements from my world.",
        notes:
            "This piece can eventually describe the visual references, textures, colors, and personal surroundings that influenced the final composition. Placeholder text is being used here to test the read-more popup and spacing."
    },

    {
        id: "duochromatic-still-life",
        title: "Duochromatic Still Life",
        collection: "College Collection",
        image: "assets/images/wall_art/Still_Life.png",
        caption: "A duochromatic tangled composition of everyday objects using complementary colors.",
        notes:
            "This future writeup can include the still-life setup, color limitations, assignment requirements, medium, date, and why the objects were arranged this way."
    },

    {
        id: "silhouette-assignment",
        title: "Silhouette Assignment",
        collection: "College Collection",
        image: "assets/images/wall_art/silhouette_assignment.png",
        caption: "A pair of canvases made from silhouettes found in the world around me, layered together in a complementary composition.",
        notes:
            "This section can explain where the silhouettes came from, how they were selected, and what the final paired canvas composition is meant to communicate."
    },

    {
        id: "dripping-lollipop",
        title: "Dripping Lollipop",
        collection: "Pop Collection",
        image: "assets/images/wall_art/Dripping_lollie_pop.png",
        caption: "A bright sky composition featuring a melting heart-shaped lollipop.",
        notes:
            "This future description can cover the contrast between playful imagery and darker visual tension, plus details about the color palette, scale, and medium."
    },

    {
        id: "dripping-skull-acrylic",
        title: "Dripping Skull Acrylic",
        collection: "Acrylic Collection",
        image: "assets/images/wall_art/dripping_skull_acrylic.png",
        caption: "A bold skull composition with colorful dripping paint against a dark purple sky.",
        notes:
            "This popup will later include more about the skull motif, the dripping paint effect, the acrylic process, and the visual contrast between the dark background and bright color."
    },

    {
        id: "ethereal-portrait",
        title: "Ethereal Portrait",
        collection: "Portrait Collection",
        image: "assets/images/wall_art/ethereal_portrait.png",
        caption: "A stylized portrait surrounded by clouds and soft atmospheric color.",
        notes:
            "This section can eventually explain the portrait style, character inspiration, facial details, cloud imagery, and the intended atmosphere of the piece."
    },

    {
        id: "knome-land",
        title: "Knome Land",
        collection: "Fantasy Collection",
        image: "assets/images/wall_art/knome_land.png",
        caption: "A colorful fantasy landscape with trees, mountains, mushrooms, and surreal scenery.",
        notes:
            "This placeholder can later be replaced with notes about the imagined world, fantasy elements, color choices, and how the landscape composition developed."
    },

    {
        id: "open-mind-perspective",
        title: "Open Mind Perspective",
        collection: "Surreal Collection",
        image: "assets/images/wall_art/open_mind_perspective.png",
        caption: "A surreal city scene filled with color, motion, and layered perspective.",
        notes:
            "This future writeup can cover the perspective choices, city imagery, hidden details, and the concept of opening the mind through layered visual movement."
    },

    {
        id: "pearl-watercolor",
        title: "Pearl Watercolor",
        collection: "Watercolor Collection",
        image: "assets/images/wall_art/pearl_watercolor.png",
        caption: "A soft watercolor portrait of a small dog with delicate blue accents.",
        notes:
            "This section can later include the pet portrait context, watercolor process, reference image details, and any personal meaning behind the piece."
    },

    {
        id: "pink-moon",
        title: "Pink Moon",
        collection: "Celestial Collection",
        image: "assets/images/wall_art/pink_moon.png",
        caption: "A pink celestial painting with clouds, stars, and a glowing moon.",
        notes:
            "This future description can explain the moon imagery, cloud treatment, color palette, and the dreamy atmosphere of the composition."
    },

    {
        id: "split-head",
        title: "Split Head",
        collection: "Portrait Collection",
        image: "assets/images/wall_art/split_head.png",
        caption: "A surreal portrait exploring emotion, identity, and inner fragmentation.",
        notes:
            "This placeholder can later become a fuller explanation of the emotional concept, the divided facial structure, and the meaning behind the flowing visual elements."
    },

    {
        id: "suburbia-project",
        title: "Suburbia Project",
        collection: "Narrative Collection",
        image: "assets/images/wall_art/Suburbia_Project.png",
        caption: "A divided scene contrasting suburban calm with shadowed interior emotion.",
        notes:
            "This section can eventually include the story behind the suburban setting, the contrast between exterior and interior space, and the project context."
    },

    {
        id: "more-art-coming-soon",
        title: "More Art Coming Soon",
        collection: "Upcoming Collection",
        image: "assets/images/wall_art/BLANK_ART.png",
        caption: "A placeholder for upcoming artwork.",
        notes:
            "More original artwork will be added here soon. This placeholder page confirms that the gallery detail-page system works for future pieces too."
    }

];

/* =========================
   SAFE TEXT HELPERS
========================= */

function escapeHtml(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}

/* =========================
   RENDER GALLERY LINKS
========================= */

function renderGalleryGrid() {

    const galleryGrid =
        document.getElementById("galleryGrid");

    if (!galleryGrid) return;

    galleryGrid.innerHTML =
        ARTWORKS.map(artwork => {

            return `
                <a
                    href="artwork.html?id=${encodeURIComponent(artwork.id)}"
                    class="gallery-item gallery-link"
                >

                    <div class="gallery-image-wrapper">

                        <img
                            src="${escapeHtml(artwork.image)}"
                            alt="${escapeHtml(artwork.title)}"
                            class="gallery-image"
                        >

                        <div class="gallery-overlay">

                            <h3>
                                ${escapeHtml(artwork.title)}
                            </h3>

                            <h4>
                                ${escapeHtml(artwork.collection)}
                            </h4>

                            <p>
                                ${escapeHtml(artwork.caption)}
                            </p>

                        </div>

                    </div>

                    <div class="gallery-title">

                        <span class="gallery-name">
                            ${escapeHtml(artwork.title)}
                        </span>

                    </div>

                </a>
            `;

        }).join("");

}

renderGalleryGrid();

/* =========================
   RENDER ARTWORK DETAIL PAGE
========================= */

function renderArtworkPage() {

    const artworkPage =
        document.getElementById("artworkPage");

    if (!artworkPage) return;

    const params =
        new URLSearchParams(window.location.search);

    const artworkId =
        params.get("id");

    const artwork =
        ARTWORKS.find(item => item.id === artworkId) ||
        ARTWORKS[0];

    const title =
        document.getElementById("artworkTitle");

    const collection =
        document.getElementById("artworkCollection");

    const image =
        document.getElementById("artworkImage");

    const caption =
        document.getElementById("artworkCaption");

    const readMoreButton =
        document.getElementById("readMoreButton");

    const modal =
        document.getElementById("artworkModal");

    const modalTitle =
        document.getElementById("modalArtworkTitle");

    const modalCollection =
        document.getElementById("modalArtworkCollection");

    const modalCaption =
        document.getElementById("modalArtworkCaption");

    const modalNotes =
        document.getElementById("modalArtworkNotes");

    document.title =
        `${artwork.title} | Jacqueline`;

    title.textContent =
        artwork.title;

    collection.textContent =
        artwork.collection;

    image.src =
        artwork.image;

    image.alt =
        artwork.title;

    caption.textContent =
        artwork.caption;

    modalTitle.textContent =
        artwork.title;

    modalCollection.textContent =
        artwork.collection;

    modalCaption.textContent =
        artwork.caption;

    modalNotes.textContent =
        artwork.notes;

    function openModal() {

        modal.classList.add("active");

        document.body.style.overflow =
            "hidden";

    }

    function closeModal() {

        modal.classList.remove("active");

        document.body.style.overflow =
            "auto";

    }

    if (readMoreButton && modal) {

        readMoreButton.addEventListener(
            "click",
            openModal
        );

        modal.addEventListener(
            "click",
            function (event) {

                if (event.target === modal) {
                    closeModal();
                }

            }
        );

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape" &&
                    modal.classList.contains("active")
                ) {
                    closeModal();
                }

            }
        );

    }

}

renderArtworkPage();