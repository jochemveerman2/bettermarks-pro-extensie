function removeElements() {
    document.querySelectorAll(".chakra-tex1t.css-0, .css-14r5isu, .css-kz4gu6").forEach(el => el.remove());
}

function replaceIcons() {
    document.querySelectorAll(".fa-triangle-exclamation").forEach(icon => {
        const replacement = document.createElement("div");
        replacement.className = "css-k008qs";

        const rand = Math.random() * 100;
        let imgSrc, altText;

        if (rand < 40) {
            imgSrc = "/bundles/bookview/icons/twoCoins.svg"; 
            altText = "twoCoins";
        } else if (rand < 70) {
            imgSrc = "/bundles/bookview/icons/oneCoin.svg"; 
            altText = "oneCoin";
        } else if (rand < 90) {
            imgSrc = "/bundles/bookview/icons/threeCoins.svg"; 
            altText = "threeCoins";
        } else {
            imgSrc = "/bundles/bookview/icons/star.svg"; 
            altText = "star";
        }

        replacement.innerHTML = `<img alt="${altText}" src="${imgSrc}" class="chakra-image css-0" data-cy="${altText}-icon">`;
        icon.parentElement.replaceWith(replacement);
    });
}

function addExtensionButton() {
    document.querySelectorAll(".chakra-menu__menu-list").forEach(menu => {
        const colofonButton = menu.querySelector('[data-cy="imprint"]');

        if (colofonButton && !menu.querySelector('[data-cy="extension"]')) {
            const extButton = document.createElement("a");

            extButton.className = colofonButton.className;
            extButton.href = "https://github.com/jochemveerman2/bettermarksproextensie";
            extButton.target = "_blank";
            extButton.setAttribute("data-cy", "extension");
            extButton.innerHTML = `
                <span class="chakra-menu__icon-wrapper css-7halv9">
                    <img src="https://jochemveerman.nl/images/svg/extensie.svg" alt="Extensie" style="width: 16px; height: 16px;">
                </span>
                <span style="pointer-events: none; flex: 1 1 0%;">Extentie</span>
            `;

            colofonButton.insertAdjacentElement("afterend", extButton);

            extButton.style.transition = "background 0.2s ease-in-out, color 0.2s ease-in-out";
            extButton.addEventListener("mouseover", () => {
                extButton.style.backgroundColor = "var(--chakra-colors-gray-100)"; 
                extButton.style.color = "var(--chakra-colors-gray-900)";
            });
            extButton.addEventListener("mouseout", () => {
                extButton.style.backgroundColor = "";
                extButton.style.color = "";
            });
        }
    });
}

removeElements();
replaceIcons();
addExtensionButton();

const observer = new MutationObserver(() => {
    removeElements();
    replaceIcons();
    addExtensionButton();
});

observer.observe(document.body, { childList: true, subtree: true });