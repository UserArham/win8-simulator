window.Themes = {
    current: "win8",

    apply(name) {
        const theme = this.list[name];
        if (!theme) return;

        // Set CSS variables
        for (const key in theme.css) {
            document.documentElement.style.setProperty(`--${key}`, theme.css[key]);
        }

        // Set wallpaper
        document.body.style.backgroundImage =
            `url(${theme.wallpaper})`;

        this.current = name;
        localStorage.setItem("theme", name);
    },

    loadSaved() {
        const saved = localStorage.getItem("theme");
        if (saved && this.list[saved]) {
            this.apply(saved);
        }
    },

    list: {}
};

window.addEventListener("DOMContentLoaded", () => {
    Themes.loadSaved();
});
