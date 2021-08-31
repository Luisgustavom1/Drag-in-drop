const cards = document.querySelectorAll('.card');
const zonedrops = document.querySelectorAll('.zonedrop');

cards.forEach(card => {
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragEnd);
    card.addEventListener('dragstart', dragStart);
});

function drag() {
};

function dragEnd() {
    this.classList.remove('moving');

    zonedrops.forEach(zonedrop => zonedrop.classList.remove('highlighted'))
};

function dragStart() {
    zonedrops.forEach(zonedrop => zonedrop.classList.add('highlighted'))

    this.classList.add('moving');
};


zonedrops.forEach(zonedrop => {
    zonedrop.addEventListener('dragenter', dragEnter);
    zonedrop.addEventListener('dragleave', dragLeave);
    zonedrop.addEventListener('dragover', dragOver);
    zonedrop.addEventListener('drop', drop);
})

function dragEnter() {
    console.log('enter in the dropzone');
}

function dragLeave() {
    this.classList.remove('over');
}

function dragOver() {
    const cardMoving = document.querySelector('.moving')
    this.classList.add('over');
    this.appendChild(cardMoving);
}

function drop() {
    console.log('drop over the dropzone');
}