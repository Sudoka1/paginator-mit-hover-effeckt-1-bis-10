const prevArrow = document.getElementById('prev') as HTMLAnchorElement;
const nextArrow = document.getElementById('next') as HTMLAnchorElement;
const firstArrow = document.getElementById('first') as HTMLAnchorElement;
const lastArrow = document.getElementById('last') as HTMLAnchorElement;
const pagesContainer = document.getElementById('pages-container') as HTMLSpanElement;

let currentPage: number = 1;
const totalPages: number = 10;
const visiblePages: number = 5;

function updatePages(): void {
    pagesContainer.innerHTML = ''; 

    let startPage: number = Math.max(1, currentPage - 1);
    let endPage: number = Math.min(totalPages, startPage + visiblePages - 1);

    startPage = Math.max(1, endPage - visiblePages + 1);

    for (let i = startPage; i <= endPage; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.className = 'page';
        pageLink.dataset.page = i.toString();
        pageLink.textContent = i.toString();

        if (i === currentPage) {
            pageLink.classList.add('active');
        }

        pageLink.addEventListener('click', (e: Event) => {
            e.preventDefault();
            currentPage = i;
            updatePages();
        });

        pagesContainer.appendChild(pageLink);
    }
}

prevArrow.addEventListener('click', (e: Event) => {
    e.preventDefault();
    if (currentPage > 1) {
        currentPage--;
        updatePages();
    }
});

nextArrow.addEventListener('click', (e: Event) => {
    e.preventDefault();
    if (currentPage < totalPages) {
        currentPage++;
        updatePages();
    }
});

firstArrow.addEventListener('click', (e: Event) => {
    e.preventDefault();
    currentPage = 1;
    updatePages();
});

lastArrow.addEventListener('click', (e: Event) => {
    e.preventDefault();
    currentPage = totalPages;
    updatePages();
});

updatePages();
