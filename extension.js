'use strict';

module.exports = function (nodecg) {
    const commentatorsInitialValue = {
        default: {
            section1: {
                line1: "",
                line2: ""
            },
            section2: {
                line1: "",
                line2: ""
            },
            section3: {
                line1: "",
                line2: ""
            }
        },
        section1: {
            line1: "",
            line2: ""
        },
        section2: {
            line1: "",
            line2: ""
        },
        section3: {
            line1: "",
            line2: ""
        }
    }

    const crowdInitialValue = {
        default: {
            line1: "",
            line2: ""
        },
        line1: "",
        line2: ""
    };

    const splashTextInitialValue = "";

    const r_commentatorsLowerThird = nodecg.Replicant('commentatorsLowerThird', {defaultValue: commentatorsInitialValue});
    const r_crowdLowerThird = nodecg.Replicant('crowdLowerThird', {defaultValue: crowdInitialValue});
    const r_splashText = nodecg.Replicant('splashText', {defaultValue: splashTextInitialValue});
};
