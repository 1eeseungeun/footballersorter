// img preload
function preloadImages() {
    const images = document.querySelectorAll('img');
    images.forEach((image) => {
        const img = new Image();
        img.src = image.src;
    });
}

window.addEventListener('load', preloadImages);

// header
document.addEventListener('scroll', function () {
    const headerText = document.getElementById('header-text');
    const header2Text = document.getElementById('header2-text');
    const header2Rect = header2Text.getBoundingClientRect();
    const headerHeight = document.getElementById('header').offsetHeight;

    let opacity = 1 - (header2Rect.top / headerHeight);
    if (opacity > 1) {
        opacity = 1;
    }
    if (opacity < 0) {
        opacity = 0;
    }
    headerText.style.opacity = opacity;
});

window.addEventListener('load', function () {
    const headerText = document.getElementById('header-text');
    const header2Text = document.getElementById('header2-text');
    const header2Rect = header2Text.getBoundingClientRect();
    const headerHeight = document.getElementById('header').offsetHeight;

    // Calculate opacity based on the position of header2Text relative to header
    let opacity = 1 - (header2Rect.top / headerHeight);
    if (opacity > 1) {
        opacity = 1;
    }
    if (opacity < 0) {
        opacity = 0;
    }
    headerText.style.opacity = opacity;
});

// search function
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const searchField = document.getElementById('searchField');
    const searchField2 = document.getElementById('searchField2');
    const cancelBtn = document.getElementById('cancelBtn');
    const teams = document.querySelectorAll('.not-prose > div');

    // search btn -> search bar comes up
    searchBtn.addEventListener('click', function() {
        searchBtn.classList.add('hidden');
        searchInput.classList.remove('hidden');
        searchInput.classList.remove('translate-x-full');
        searchField.focus();
    });

    // cancel btn -> search bar hidden
    cancelBtn.addEventListener('click', function() {
        searchInput.classList.add('hidden');
        searchBtn.classList.remove('hidden');
        searchField.value = '';
        filterTeams('');
    });

    // search team
    searchField.addEventListener('input', function() {
        const searchText = searchField.value.trim().toLowerCase();
        filterTeams(searchText);
    });

    searchField2.addEventListener('input', function() {
        const searchText2 = searchField2.value.trim().toLowerCase();
        filterTeams(searchText2);
    });

    // team filtering
    function filterTeams(searchText) {
        teams.forEach(team => {
            const teamName = team.querySelector('h3').textContent.trim().toLowerCase();
            if (teamName.includes(searchText)) {
                team.style.display = 'block';
            } else {
                team.style.display = 'none';
            }
        });
    }

    // mb: hide the search bar
    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && event.target !== searchBtn) {
            searchInput.classList.add('hidden');
            searchBtn.classList.remove('hidden');
            searchField.value = '';
            filterTeams('');
        }
    });
});
