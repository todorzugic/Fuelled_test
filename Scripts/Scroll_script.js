$(document).ready(function () {
    let currentPage = 1;
    let scrollAccumulator = 0;
    let scrollThreshold = 400;
    let header = document.querySelector('.header-text');
    let header_about = document.querySelector('.header-text-about');

    let progress = document.getElementById("progressbar");

    $(document).on('wheel', function (e) {
        if (scrollAccumulator <= -1) {
            console.log("1")
            scrollAccumulator = 0;
        } else if (scrollAccumulator >= 401 && currentPage <= 11) {
            console.log("2")
            scrollAccumulator = 400;
        } else {
            
            let progressHeight = (scrollAccumulator * 70) / 400;

            progress.style.height = progressHeight + "%";
            scrollAccumulator += e.originalEvent.deltaY;
            console.log("scrollAccumulator " + scrollAccumulator);

            if (scrollAccumulator >= scrollThreshold) {
                if (currentPage < 11) {
                    $(`.page${currentPage}`).hide();
                    currentPage++;
                    $(`.page${currentPage}`).show();
                    scrollAccumulator = 0;
                }
            } else if (scrollAccumulator <= -1) {
                if (currentPage > 1) {
                    $(`.page${currentPage}`).hide();
                    currentPage--;
                    $(`.page${currentPage}`).show();
                    scrollAccumulator = 400;
                }
            }            
            // Text Animations
            if (currentPage == 1) {
                if (header.classList.contains('moved')) {
                    header.classList.remove('moved');
                    header.classList.add('moveBack1');
                } else if (header_about.classList.contains('movedRight')) {
                    header_about.classList.remove('movedRight');
                    header_about.classList.add('moveBack2');
                }
            } else if (currentPage == 2) {
                header.classList.add('moved');
                header_about.classList.add('movedRight');
                header.classList.remove('moveBack1');
                header_about.classList.remove('moveBack2');
            }

            const hovered = document.getElementById('chat-hoverId');
            const page11 = document.getElementById('Page11');

            if (currentPage == 11 && hovered) {
                hovered.onmouseover = function() {
                    page11.style.background = 'linear-gradient(to right, #c80404 0%, #c80404 60%, #950000 60%, #950000 100%)';
                };
            }
            hovered.onmouseout = function() {
                page11.style.background = 'linear-gradient(to right, #ae0000 0%, #ae0000 60%, #950000 60%, #950000 100%)';
            };      
        }
    });
});