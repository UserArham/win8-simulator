function enableTileDragging(tile) {
    tile.draggable = true;

    tile.addEventListener("dragstart", e => {
        e.dataTransfer.setData("id", tile.id);
    });

    tile.addEventListener("dragover", e => e.preventDefault());

    tile.addEventListener("drop", e => {
        const id = e.dataTransfer.getData("id");
        const other = document.getElementById(id);

        tile.before(other);
    });
}
