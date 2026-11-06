const title = document.getElementById("title");

if (title) {
  document.title = title.textContent;
}

const profiles = document.querySelectorAll(".expandable");
const backdrop = document.querySelector(".profile-backdrop");
let openProfile = null;

function openCard(card) {
  if (openProfile && openProfile !== card) {
    closeCard(openProfile, false);
  }

  card.classList.add("is-open");
  card.setAttribute("aria-expanded", "true");
  backdrop.hidden = false;
  document.body.classList.add("profile-open");
  openProfile = card;
}

function closeCard(card, restoreFocus) {
  card.classList.remove("is-open");
  card.setAttribute("aria-expanded", "false");

  if (openProfile === card) {
    backdrop.hidden = true;
    document.body.classList.remove("profile-open");
    openProfile = null;
  }

  if (restoreFocus) {
    card.focus();
  }
}

if (profiles.length && backdrop) {
  profiles.forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest(".close")) {
        closeCard(card, true);
        return;
      }

      if (!card.classList.contains("is-open")) {
        openCard(card);
      }
    });

    card.addEventListener("keydown", (event) => {
      if (card.classList.contains("is-open")) {
        return;
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openCard(card);
      }
    });
  });

  backdrop.addEventListener("click", () => {
    if (openProfile) {
      closeCard(openProfile, true);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && openProfile) {
      closeCard(openProfile, true);
    }
  });
}
