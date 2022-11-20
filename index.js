const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        const clickBtn = () => {
            if (document.querySelector(".ytp-ad-skip-button.ytp-button")) {
                const adBtn = document.querySelector(".ytp-ad-skip-button.ytp-button");
                // allows for the user to see that the ad ended
                setTimeout(() => adBtn.click(), 700);
            }
        };
        mutation.target.className === "ytp-ad-skip-button-container" ? clickBtn() : null;

    }

});
observer.observe(document.body, { attributes: true, childList: true, subtree: true });
