class WindowManager {
    constructor() {
        this.windows = [];
        this.zIndex = 50;
    }

    createWindow(appUrl, title) {
        const win = document.createElement("div");
        win.className = "window";
        win.style.zIndex = ++this.zIndex;

        win.innerHTML = `
            <div class="titlebar">
                <span class="title">${title}</span>
                <button class="min">—</button>
                <button class="max">⬜</button>
                <button class="close">×</button>
            </div>
            <iframe src="${appUrl}" class="content"></iframe>
        `;

        this.makeDraggable(win);

        document.body.appendChild(win);
        this.windows.push(win);

        win.querySelector(".close").onclick = () => win.remove();
        win.querySelector(".min").onclick = () => win.classList.toggle("minimized");
        win.querySelector(".max").onclick = () => this.snapWindow(win);

        return win;
    }

    makeDraggable(win) {
        const bar = win.querySelector(".titlebar");
        let offsetX, offsetY;

        bar.onmousedown = e => {
            win.style.zIndex = ++this.zIndex;
            offsetX = e.clientX - win.offsetLeft;
            offsetY = e.clientY - win.offsetTop;

            document.onmousemove = e => {
                win.style.left = (e.clientX - offsetX) + "px";
                win.style.top = (e.clientY - offsetY) + "px";
            };

            document.onmouseup = () => {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        };
    }

    snapWindow(win) {
        const w = window.innerWidth;
        const h = window.innerHeight;

        // Snap right
        if (win.offsetLeft > w * 0.6) {
            win.style.left = (w / 2) + "px";
            win.style.top = "0px";
            win.style.width = (w / 2) + "px";
            win.style.height = h + "px";
            return;
        }

        // Snap left
        if (win.offsetLeft < w * 0.4) {
            win.style.left = 0;
            win.style.top = "0px";
            win.style.width = (w / 2) + "px";
            win.style.height = h + "px";
            return;
        }

        // Maximize
        win.style.left = "0px";
        win.style.top = "0px";
        win.style.width = w + "px";
        win.style.height = h + "px";
    }
}

window.windowManager = new WindowManager();
