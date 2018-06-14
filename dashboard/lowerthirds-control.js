(function () {
    'use strict';

    const i_commentator1Line1 = document.getElementById('commentator1Line1');
    const i_commentator1Line2 = document.getElementById('commentator1Line2');
    const i_commentator2Line1 = document.getElementById('commentator2Line1');
    const i_commentator2Line2 = document.getElementById('commentator2Line2');
    const i_commentator3Line1 = document.getElementById('commentator3Line1');
    const i_commentator3Line2 = document.getElementById('commentator3Line2');

    const b_showCommentators = document.getElementById('showCommentators');
    const b_hideCommentators = document.getElementById('hideCommentators');
    const b_showCommentators7s = document.getElementById('showCommentators7s');
    const b_clearCommentators = document.getElementById('clearCommentators');
    const b_resetCommentatorsToDefault = document.getElementById('resetCommentatorsToDefault');
    const b_setCommentatorsDefault = document.getElementById('setCommentatorsDefault');

    const r_commentatorsLowerThird = nodecg.Replicant('commentatorsLowerThird');

    nodecg.readReplicant('commentatorsLowerThird', commentatorsLowerThird => {
        i_commentator1Line1.value = commentatorsLowerThird.section1.line1;
        i_commentator1Line2.value = commentatorsLowerThird.section1.line2;
        i_commentator2Line1.value = commentatorsLowerThird.section2.line1;
        i_commentator2Line2.value = commentatorsLowerThird.section2.line2;
        i_commentator3Line1.value = commentatorsLowerThird.section3.line1;
        i_commentator3Line2.value = commentatorsLowerThird.section3.line2;
	});

    function setCommentatorsLowerThirdValues() {
        var currentCommentatorsLowerThird = r_commentatorsLowerThird.value;

        currentCommentatorsLowerThird.section1.line1 = i_commentator1Line1.value;
        currentCommentatorsLowerThird.section1.line2 = i_commentator1Line2.value;
        currentCommentatorsLowerThird.section2.line1 = i_commentator2Line1.value;
        currentCommentatorsLowerThird.section2.line2 = i_commentator2Line2.value;
        currentCommentatorsLowerThird.section3.line1 = i_commentator3Line1.value;
        currentCommentatorsLowerThird.section3.line2 = i_commentator3Line2.value;

        r_commentatorsLowerThird.value = currentCommentatorsLowerThird;
    }

    function setCommentatorsLowerThirdValuesToDefault() {
        var currentCommentatorsLowerThird = r_commentatorsLowerThird.value;

        i_commentator1Line1.value = currentCommentatorsLowerThird.default.section1.line1;
        i_commentator1Line2.value = currentCommentatorsLowerThird.default.section1.line2;
        i_commentator2Line1.value = currentCommentatorsLowerThird.default.section2.line1;
        i_commentator2Line2.value = currentCommentatorsLowerThird.default.section2.line2;
        i_commentator3Line1.value = currentCommentatorsLowerThird.default.section3.line1;
        i_commentator3Line2.value = currentCommentatorsLowerThird.default.section3.line2;
    }

    function clearCommentators() {
        i_commentator1Line1.value = "";
        i_commentator1Line2.value = "";
        i_commentator2Line1.value = "";
        i_commentator2Line2.value = "";
        i_commentator3Line1.value = "";
        i_commentator3Line2.value = "";
    }

    function setCommentatorsDefault() {
        var currentCommentatorsLowerThird = r_commentatorsLowerThird.value;

        currentCommentatorsLowerThird.default.section1.line1 = i_commentator1Line1.value;
        currentCommentatorsLowerThird.default.section1.line2 = i_commentator1Line2.value;
        currentCommentatorsLowerThird.default.section2.line1 = i_commentator2Line1.value;
        currentCommentatorsLowerThird.default.section2.line2 = i_commentator2Line2.value;
        currentCommentatorsLowerThird.default.section3.line1 = i_commentator3Line1.value;
        currentCommentatorsLowerThird.default.section3.line2 = i_commentator3Line2.value;

        r_commentatorsLowerThird.value = currentCommentatorsLowerThird;
    }

    b_showCommentators.addEventListener('click', () => {
        setCommentatorsLowerThirdValues();
        window.setTimeout(() => nodecg.sendMessage('showCommentators'), 500);
    });

    b_hideCommentators.addEventListener('click', () => {
        nodecg.sendMessage('hideCommentators');
    });

    b_showCommentators7s.addEventListener('click', () => {
        setCommentatorsLowerThirdValues();
        window.setTimeout(() => nodecg.sendMessage('showCommentators7s'), 500);
    });

    b_clearCommentators.addEventListener('click', () => {
        clearCommentators();
    });

    b_resetCommentatorsToDefault.addEventListener('click', () => {
        setCommentatorsLowerThirdValuesToDefault();
    });

    b_setCommentatorsDefault.addEventListener('click', () => {
        setCommentatorsDefault();
    });



    ////--------------------------
    //// I know this is sort of bad, hush
    ////--------------------------



    const i_crowd1 = document.getElementById('crowd1');
    const i_crowd2 = document.getElementById('crowd2');

    const b_showCrowd = document.getElementById('showCrowd');
    const b_hideCrowd = document.getElementById('hideCrowd');
    const b_showCrowd7s = document.getElementById('showCrowd7s');
    const b_clearCrowd = document.getElementById('clearCrowd');
    const b_resetCrowdToDefault = document.getElementById('resetCrowdToDefault');
    const b_setCrowdDefault = document.getElementById('setCrowdDefault');

    const r_crowdLowerThird = nodecg.Replicant('crowdLowerThird');

    nodecg.readReplicant('crowdLowerThird', crowdLowerThird => {
        i_crowd1.value = crowdLowerThird.line1;
        i_crowd2.value = crowdLowerThird.line2;
	});

    function setCrowdLowerThirdValues() {
        var currentCrowdLowerThird = r_crowdLowerThird.value;

        currentCrowdLowerThird.line1 = i_crowd1.value;
        currentCrowdLowerThird.line2 = i_crowd2.value;

        r_crowdLowerThird.value = currentCrowdLowerThird;
    }

    function setCrowdLowerThirdValuesToDefault() {
        var currentCrowdLowerThird = r_crowdLowerThird.value;

        i_crowd1.value = currentCrowdLowerThird.default.line1;
        i_crowd2.value = currentCrowdLowerThird.default.line2;
    }

    function clearCrowd() {
        i_crowd1.value = "";
        i_crowd2.value = "";
    }

    function setCrowdDefault() {
        var currentCrowdLowerThird = r_crowdLowerThird.value;

        currentCrowdLowerThird.default.line1 = i_crowd1.value;
        currentCrowdLowerThird.default.line2 = i_crowd2.value;

        r_crowdLowerThird.value = currentCrowdLowerThird;
    }

    b_showCrowd.addEventListener('click', () => {
        setCrowdLowerThirdValues();
        window.setTimeout(() => nodecg.sendMessage('showCrowd'), 500);
    });

    b_hideCrowd.addEventListener('click', () => {
        nodecg.sendMessage('hideCrowd');
    });

    b_showCrowd7s.addEventListener('click', () => {
        setCrowdLowerThirdValues();
        window.setTimeout(() => nodecg.sendMessage('showCrowd7s'), 500);
    });

    b_clearCrowd.addEventListener('click', () => {
        clearCrowd();
    });

    b_resetCrowdToDefault.addEventListener('click', () => {
        setCrowdLowerThirdValuesToDefault();
    });

    b_setCrowdDefault.addEventListener('click', () => {
        setCrowdDefault();
    });

})();