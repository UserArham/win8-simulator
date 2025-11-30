class DesktopManager {
    constructor() {
        this.active = 0;
        this.desktops = [[], [], []];
    }

    switch(n) {
        // hide windows from others
        document.querySelectorAll(".window").forEach(w => w.style.display = "none");

        this.desktops[this.active] = [...document.querySelectorAll(".window")];

        this.active = n;

        this.desktops[n].forEach(w => w.style.display = "block");
    }
}

window.desktopManager = new DesktopManager();
