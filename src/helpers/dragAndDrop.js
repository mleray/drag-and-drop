const functions = {
    allowDrop(event) {
        event.preventDefault();
    },
    drag(event) {
        event.dataTransfer.setData('text', event.target.id);
    },
    drop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData('text');
        event.target.appendChild(document.getElementById(data));
    },
    areAllItemsDragged() {
        const dropAreas = document.getElementsByClassName('drop-area');
        const emptyDropAreas = Array.from(dropAreas).filter(dropArea => !dropArea.childNodes || !dropArea.childNodes.length);
        return !emptyDropAreas.length;
    }
};

export default functions;