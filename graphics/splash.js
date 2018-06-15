(function () {
    'use strict';

    const o_splashText = document.getElementById("splashText");
    const r_splashText = nodecg.Replicant("splashText");

    r_splashText.on('change', newSplashText => {
        o_splashText.innerHTML = newSplashText;
    });

})();