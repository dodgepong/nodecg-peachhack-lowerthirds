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



    ////--------------------------
    //// at what point do i make these separate bundles
    ////--------------------------



    const i_splashTitle = document.getElementById('splashTitle');
    const i_splashComingUp = document.getElementById('splashComingUp');
    const i_rewindText = document.getElementById('rewindText');

    const i_returnHour = document.getElementById('returnHour');
    const i_returnMinute = document.getElementById('returnMinute');
    const i_returnSecond = document.getElementById('returnSecond');

    const b_updateSplashText = document.getElementById('updateSplashText');
    const b_clearTime = document.getElementById('clearTime');

    const r_splashText = nodecg.Replicant('splashText');

    b_clearTime.addEventListener('click', () => {
        setReturnTime("");
    });

    function getReturnTime() {
        var returnHour = parseInt(document.getElementById('returnHour').value);
        if (isNaN(returnHour)) {
            return false;
        }
        var returnMinute = parseInt(document.getElementById('returnMinute').value);
        if (isNaN(returnMinute)) {
            return false;
        }
        var returnSecond = parseInt(document.getElementById('returnSecond').value);
        if (isNaN(returnSecond)) {
            return false;
        }

        var now = moment();
        if (returnHour < now.hour()) {
            now.add(1, 'days');
        }

        return now.hour(returnHour).minute(returnMinute).second(returnSecond);
    }

    function setReturnTime(newTime) {
        if (!newTime || newTime === "" || !newTime.isValid()) {
            document.getElementById('returnHour').value = "";
            document.getElementById('returnMinute').value = "";
            document.getElementById('returnSecond').value = "";
        } else {
            document.getElementById('returnHour').value = newTime.hour();
            document.getElementById('returnMinute').value = newTime.minute();
            document.getElementById('returnSecond').value = newTime.second();
        }
    }

    nodecg.readReplicant('splashText', splash => {
        i_splashTitle.value = splash.title;
        i_splashComingUp.value = splash.comingUp;
        i_rewindText.value = splash.rewind;

        setReturnTime(moment(splash.returnTime));
    });

    b_updateSplashText.addEventListener('click', () => {
        r_splashText.value.title = i_splashTitle.value;
        r_splashText.value.comingUp = i_splashComingUp.value;
        r_splashText.value.rewind = i_rewindText.value;

        const returnTime = getReturnTime();
        if (returnTime) {
            r_splashText.value.returnTime = returnTime.format()
        } else {
            r_splashText.value.returnTime = null;
        }
    });

})();