export function loadOurServices() {
  document.addEventListener("DOMContentLoaded", () => {
    const ourServicesCardContainer = document.getElementById(
      "our-services-card-container",
    );
    const viewAllButton = document.getElementById("view-all-button");

    // Card Data for "Our Services"
    const ourServicesCards = [
      {
        image: "assets/Blog/33/service-img-1.png",
        title: "One Bedroom Apartment",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      },
      {
        image: "assets/Blog/33/service-img-2.png",
        title: "Window Cleaning",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      },
      {
        image: "assets/Blog/33/service-img-3.png",
        title: "Residential Cleaning",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      },
      {
        image: "assets/Blog/33/service-img-4.png",
        title: "Office Cleaning",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      },
      {
        image: "assets/Blog/33/service-img-5.png",
        title: "Carpet Cleaning",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      },
      {
        image: "assets/Blog/33/service-img-6.png",
        title: "Deep Cleaning",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      },
    ];

    let isMobile = window.innerWidth < 1024;
    let cardsToRender = isMobile
      ? ourServicesCards.slice(0, 3)
      : ourServicesCards;

    // Function to render cards
    function renderCards(cards) {
      ourServicesCardContainer.innerHTML = ""; // Clear existing cards
      cards.forEach((service) => {
        const cardElement = `
        <div class="rounded-md border border-gray-400 bg-transparent">
            <img
              src="${service.image}"
              alt="${service.title}"
              class="h-64 w-full object-cover"
            />
            <div class="p-6 pt-12 text-center">
              <a href="#" class="inline-block mb-4 text-2xl font-bold text-black">
                ${service.title}
              </a>
              <p class="max-w-[300px] text-black">
                ${service.description}
              </p>
            </div>
          </div>
        `;
        ourServicesCardContainer.innerHTML += cardElement;
      });
    }

    // Initial render of cards
    renderCards(cardsToRender);

    // Add click event listener to the "View all" button
    viewAllButton.addEventListener("click", () => {
      // Display all the cards when clicked
      renderCards(ourServicesCards);
      // Hide the "View all" button after showing all cards
      viewAllButton.style.display = "none";
    });

    // Re-render cards when the window is resized
    window.addEventListener("resize", () => {
      isMobile = window.innerWidth < 1024;
      if (isMobile) {
        cardsToRender = ourServicesCards.slice(0, 3);
        renderCards(cardsToRender);
        viewAllButton.style.display = "block"; // Show the button again in mobile view
      } else {
        renderCards(ourServicesCards);
        viewAllButton.style.display = "none"; // Hide the button in larger views
      }
    });
  });
}
