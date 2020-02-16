const changeTheme = () => {
    const themeBtn = document.querySelector(".change-theme");
    const chatContainer = document.getElementById("chat-container");

    themeBtn.addEventListener("click", () => {
        const bgcolor = getComputedStyle(
            document.documentElement
        ).getPropertyValue("--main-bgColor");

        if (bgcolor === " black") {
            document.documentElement.style.setProperty(
                "--main-bgColor",
                "#8CCFAA"
            );
            document.documentElement.style.setProperty(
                "--main-contrastColor",
                "black"
            );
            document.documentElement.style.setProperty(
                "--light-blue",
                "#36CB78"
            );
            document.documentElement.style.setProperty(
                "--main-blue",
                "#217F4B"
            );
            document.documentElement.style.setProperty(
                "--light-darker-blue",
                "#217F4B"
            );
            document.documentElement.style.setProperty(
                "--dark-blue",
                "#144C2D"
            );
            document.documentElement.style.setProperty(
                "--ugly-blue",
                "#449468"
            );
        } else {
            document.documentElement.style.setProperty(
                "--main-bgColor",
                " black"
            );
            document.documentElement.style.setProperty(
                "--main-contrastColor",
                "white"
            );
            document.documentElement.style.setProperty(
                "--light-blue",
                "#1d16f2"
            );
            document.documentElement.style.setProperty(
                "--main-blue",
                "#040dbf"
            );
            document.documentElement.style.setProperty(
                "--light-darker-blue",
                "#03178c"
            );
            document.documentElement.style.setProperty(
                "--dark-blue",
                "#010626"
            );
            document.documentElement.style.setProperty(
                "--ugly-blue",
                "#021859"
            );
        }
    });
};
changeTheme();
