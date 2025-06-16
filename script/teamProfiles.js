// teamProfiles.js
export function loadTeamProfiles() {
  document.addEventListener("DOMContentLoaded", () => {
    const teamProfileContainer = document.getElementById(
      "team-profile-container",
    );

    // Data profile tim
    const teamProfiles = [
      {
        image: "assets/Team/team-1.png",
        name: "Leslie Alexander",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        socialLinks: {
          linkedIn: "https://linkedin.com",
          twitter: "https://twitter.com",
          dribbble: "https://dribbble.com",
        },
      },
      {
        image: "assets/Team/team-2.png",
        name: "Jacob Jones",
        description:
          "Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu.",
        socialLinks: {
          linkedIn: "https://linkedin.com",
          twitter: "https://twitter.com",
          dribbble: "https://dribbble.com",
        },
      },
      {
        image: "assets/Team/team-3.png",
        name: "Courtney Henry",
        description:
          "Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.",
        socialLinks: {
          linkedIn: "https://linkedin.com",
          twitter: "https://twitter.com",
          dribbble: "https://dribbble.com",
        },
      },
      {
        image: "assets/Team/team-4.png",
        name: "Jenny Wilson",
        description:
          "Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.",
        socialLinks: {
          linkedIn: "https://linkedin.com",
          twitter: "https://twitter.com",
          dribbble: "https://dribbble.com",
        },
      },
    ];

    // Generate profile cards secara dinamis
    teamProfiles.forEach((profile) => {
      const profileElement = `
               <div
            class="bg-white xl:flex xl:max-w-[560px] xl:items-center xl:gap-8"
          >
            <img
              src="${profile.image}"
              alt="${profile.name}"
              class="h-[220px] w-full object-cover"
            />
            <div class="p-4 text-center md:p-2 md:text-left">
              <h3 class="mb-4 text-xl font-semibold text-black">
                ${profile.name}
              </h3>
              <p class="mb-4 text-black">${profile.description}</p>
              <div class="flex justify-center gap-4 md:justify-start">
                <a href="${profile.socialLinks.linkedIn}" target="_blank">
                  <img src="assets/Icon/LinkedIn.svg" alt="LinkedIn" />
                </a>
                <a href="${profile.socialLinks.twitter}" target="_blank">
                  <img src="assets/Icon/Twitter.svg" alt="Twitter" />
                </a>
                <a href="${profile.socialLinks.dribbble}" target="_blank">
                  <img src="assets/Icon/Dribble.svg" alt="Dribbble" />
                </a>
              </div>
            </div>
          </div>
      `;

      teamProfileContainer.innerHTML += profileElement;
    });
  });
}
