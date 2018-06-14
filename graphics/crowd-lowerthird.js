(function () {
    'use strict';

    const o_section = document.getElementById('section');

    const r_crowdLowerThird = nodecg.Replicant('crowdLowerThird');

    var hideTimeout;
    var showing = false;

    function showCrowd() {
        if (showing) {
            return;
        }
        showing = true;
        TweenMax.set('#lowerThird', {left: 1950, opacity: 1});
        TweenMax.set('.text-container', {opacity: 0});

        TweenMax.to('#lowerThird', 0.75, {left: 0});
        TweenMax.to('.text-container', 0.5, {opacity: 1, delay: 0.75});
    }

    function hideCrowd() {
        TweenMax.to('#lowerThird', 1, {opacity: 0});
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

    r_crowdLowerThird.on('change', newData => {
        updateSection(newData, o_section);
    });

    nodecg.listenFor('showCrowd', () => {
        window.clearTimeout(hideTimeout);
        showCrowd();
    });

    nodecg.listenFor('hideCrowd', () => {
        window.clearTimeout(hideTimeout);
        hideCrowd();
    });

    nodecg.listenFor('showCrowd7s', () => {
        showCrowd();
        hideTimeout = window.setTimeout(hideCrowd, 7000);
    });

})();