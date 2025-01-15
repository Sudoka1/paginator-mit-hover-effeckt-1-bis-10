var prevArrow = document.getElementById('prev');
var nextArrow = document.getElementById('next');
var firstArrow = document.getElementById('first');
var lastArrow = document.getElementById('last');
var pagesContainer = document.getElementById('pages-container');
var currentPage = 1;
var totalPages = 10;
var visiblePages = 5;
function updatePages() {
    pagesContainer.innerHTML = '';
    var startPage = Math.max(1, currentPage - 1);
    var endPage = Math.min(totalPages, startPage + visiblePages - 1);
    startPage = Math.max(1, endPage - visiblePages + 1);
    var _loop_1 = function (i) {
        var pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.className = 'page';
        pageLink.dataset.page = i.toString();
        pageLink.textContent = i.toString();
        if (i === currentPage) {
            pageLink.classList.add('active');
        }
        pageLink.addEventListener('click', function (e) {
            e.preventDefault();
            currentPage = i;
            updatePages();
        });
        pagesContainer.appendChild(pageLink);
    };
    for (var i = startPage; i <= endPage; i++) {
        _loop_1(i);
    }
}
prevArrow.addEventListener('click', function (e) {
    e.preventDefault();
    if (currentPage > 1) {
        currentPage--;
        updatePages();
    }
});
nextArrow.addEventListener('click', function (e) {
    e.preventDefault();
    if (currentPage < totalPages) {
        currentPage++;
        updatePages();
    }
});
firstArrow.addEventListener('click', function (e) {
    e.preventDefault();
    currentPage = 1;
    updatePages();
});
lastArrow.addEventListener('click', function (e) {
    e.preventDefault();
    currentPage = totalPages;
    updatePages();
});
updatePages();
