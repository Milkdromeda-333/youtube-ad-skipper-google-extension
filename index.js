const vidPlayer = document.querySelector("#movie_player");

const observer = new MutationObserver((mutations) => {
    console.log("working");
    for (const mutation of mutations) {
        if (mutation.target.className == "ytp-ad-skip-button-container") {
            const adSkipBtn = document.querySelector(".ytp-ad-skip-button.ytp-button");

            // allows for the user to see that the ad ended
            setTimeout(() => adSkipBtn.click(), 500);
        }
    }

});

observer.observe(vidPlayer, { attributes: true, childList: true, subtree: true });
