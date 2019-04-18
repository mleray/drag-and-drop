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
    }
};

export default functions;