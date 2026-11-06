const title = document.getElementById("title");

if (title) {
  document.title = title.textContent;
}

const issac = document.querySelector(".scheme-issac");
const backdrop = document.querySelector(".profile-backdrop");

function openIssac() {
  issac.classList.add("is-open");
  issac.setAttribute("aria-expanded", "true");
  backdrop.hidden = false;
  document.body.classList.add("profile-open");
}

function closeIssac() {
  issac.classList.remove("is-open");
  issac.setAttribute("aria-expanded", "false");
  backdrop.hidden = true;
  document.body.classList.remove("profile-open");
  issac.focus();
}

if (issac && backdrop) {
  issac.addEventListener("click", (event) => {
    if (event.target.closest(".close")) {
      closeIssac();
      return;
    }

    if (!issac.classList.contains("is-open")) {
      openIssac();
    }
  });

  issac.addEventListener("keydown", (event) => {
    if (issac.classList.contains("is-open")) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openIssac();
    }
  });

  backdrop.addEventListener("click", closeIssac);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && issac.classList.contains("is-open")) {
      closeIssac();
    }
  });
}
