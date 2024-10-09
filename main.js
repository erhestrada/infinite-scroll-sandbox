let currentNumber = 1;
const contentContainer = document.getElementById('content');

function addItems(count) {
    for (let i = 0; i < count; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.textContent = currentNumber++;
        contentContainer.appendChild(item);
    }
}

function checkScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        addItems(10);
    }
}

// Initial load
addItems(20);

// Add scroll event listener
window.addEventListener('scroll', checkScroll);