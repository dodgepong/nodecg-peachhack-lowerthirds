(function () {
    'use strict';

    var returnTime = null;

    function getTimeRemainingMinutesSeconds(myReturnTime) {
        const now = moment();

        if (now.isAfter(myReturnTime)) {
            return "Soon";
        } else {
            var duration = moment.duration(myReturnTime.diff(now));
            var hours = duration.hours();
            var minutes = duration.minutes();
            if (hours >= 1) {
                minutes += 60;
            }
            var seconds = duration.seconds();
            if (seconds < 10) {
                seconds = "0" + seconds.toString();
            }
            return minutes.toString() + ":" + seconds.toString();
        }
    }

    function tickTimer() {
        if (!returnTime || returnTime === null || returnTime === "" || returnTime === undefined) {
            o_returnTime.innerHTML = "";
        } else {
            o_returnTime.innerHTML = getTimeRemainingMinutesSeconds(returnTime);
        }
    }

    const o_rewind = document.getElementById("rewind");
    const o_returnTime = document.getElementById('returnTime');

    const r_splashText = nodecg.Replicant("splashText");

    r_splashText.on('change', newSplashText => {
        o_rewind.innerHTML = newSplashText.rewind;

        const newReturnTime = newSplashText.returnTime;
        var same = false;
        if (newReturnTime && newReturnTime !== null && newReturnTime !== "") {
            const newMomentReturnTime = moment(newReturnTime);
            if (newMomentReturnTime.isSame(returnTime)) {
                same = true;
            } else {
                returnTime = moment(newReturnTime);
            }
        } else {
            returnTime = null;
        }
        if (!same) {
            window.clearInterval(timeInterval);
            tickTimer();
            timeInterval = window.setInterval(tickTimer, 1000);
        }
    });

    var timeInterval = window.setInterval(tickTimer, 1000);

})();