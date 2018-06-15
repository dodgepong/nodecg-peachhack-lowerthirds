(function () {
    'use strict';

    const o_section1 = document.getElementById('section1');
    const o_section2 = document.getElementById('section2');
    const o_section3 = document.getElementById('section3');

    const r_commentatorsLowerThird = nodecg.Replicant('commentatorsLowerThird');

    var hideTimeout;
    var showing = false;

    function showCommentators() {
        if (showing) {
            return;
        }
        showing = true;
        TweenMax.set('#lowerThird', {left: 1950, opacity: 1});
        TweenMax.set('.text-container', {opacity: 0});

        TweenMax.to('#lowerThird', 0.75, {left: 0});
        TweenMax.to('.text-container', 0.5, {opacity: 1, delay: 0.75});
    }

    function hideCommentators() {
        TweenMax.to('#lowerThird', 1, {opacity: 0, ease: Power1.easeIn});
        showing = false;
    }

    function updateSection(sectionData, sectionElement) {
        if (sectionData.line1 === "" && sectionData.line2 === "") {
            sectionElement.style.display = "none";
        }
        else if (sectionData.line1 !== "" && sectionData.line2 !== "") {
            sectionElement.children[0].style.lineHeight = "55px";
            sectionElement.children[0].innerHTML = sectionData.line1;

            sectionElement.children[1].style.display = "block";
            sectionElement.children[1].innerHTML = sectionData.line2;

            sectionElement.style.display = "flex";
        }
        else {
            var textContent;
            if (sectionData.line1 !== "") {
                textContent = sectionData.line1;
            } else {
                textContent = sectionData.line2;
            }

            sectionElement.children[0].style.lineHeight = "120px";
            sectionElement.children[0].innerHTML = textContent;

            sectionElement.children[1].style.display = "none";
            sectionElement.children[1].innerHTML = "";

            sectionElement.style.display = "flex";
        }
    }

    r_commentatorsLowerThird.on('change', newData => {
        updateSection(newData.section1, o_section1);
        updateSection(newData.section2, o_section2);
        updateSection(newData.section3, o_section3);
    });

    nodecg.listenFor('showCommentators', () => {
        window.clearTimeout(hideTimeout);
        showCommentators();
    });

    nodecg.listenFor('hideCommentators', () => {
        window.clearTimeout(hideTimeout);
        hideCommentators();
    });

    nodecg.listenFor('showCommentators7s', () => {
        showCommentators();
        hideTimeout = window.setTimeout(hideCommentators, 7000);
    });

})();