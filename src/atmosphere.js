var Atmosphere = {};

Atmosphere.Sun = function (context, x, y, ratio) {
    'use strict';

    return new function () {
        this.settings = {
            context: context,
            xPos: x || 0,
            yPos: y || 0,
            sizeRatio: ratio || 1.0
        };

        var cfg = this.settings;
        var ctx = cfg.context;

        this.draw = function () {
            var sunSize = 50;

            cfg.xPos = x;
            cfg.yPos = y;

            ctx.scale(cfg.sizeRatio, cfg.sizeRatio);
            ctx.translate(cfg.xPos, cfg.yPos);
            ctx.save();

            var alpha = ctx.globalAlpha;
            var gradient;

            // Sun
            ctx.save();

            // Initialise drawing settings
            ctx.shadowColor = 'rgb(255, 255, 255)';
            ctx.shadowBlur = 20;

            ctx.beginPath();
            ctx.moveTo(sunSize, sunSize);
            ctx.arc(sunSize, sunSize, sunSize, Math.PI, Math.PI - 0.0001);
            ctx.closePath();
            ctx.fillStyle = 'rgb(255, 255, 2)';
            ctx.fill();

            ctx.shadowColor = 'rgb(255, 255, 2)';
            ctx.shadowBlur = sunSize;

            ctx.beginPath();
            ctx.moveTo(sunSize, sunSize);
            ctx.arc(sunSize, sunSize, sunSize, Math.PI, Math.PI - 0.0001);
            ctx.closePath();
            ctx.fillStyle = 'rgb(255, 255, 2)';
            ctx.fill();
            ctx.restore();

            // Warmth
            ctx.globalAlpha = alpha * 0.65;
            ctx.beginPath();
            ctx.moveTo(sunSize * 2, sunSize);
            ctx.bezierCurveTo(sunSize * 2.0, sunSize * 1.55213, sunSize * 1.55213, sunSize * 2.0, sunSize * 1.0, sunSize * 2.0);
            ctx.bezierCurveTo(sunSize * 0.44786, sunSize * 2.0, sunSize * 0.0, sunSize * 1.55213, sunSize * 0.0, sunSize * 1.0);
            ctx.bezierCurveTo(sunSize * 0.0, sunSize * 0.44786, sunSize * 0.44786, sunSize * 0.0, sunSize * 1.0, sunSize * 0.0);
            ctx.bezierCurveTo(sunSize * 1.55213, sunSize * 0.0, sunSize * 2.0, sunSize * 0.44786, sunSize * 2.0, sunSize * 1.0);
            ctx.closePath();
            gradient = ctx.createRadialGradient(sunSize, sunSize, 0.0, sunSize, sunSize, sunSize);
            gradient.addColorStop(0.00, 'rgba(240, 89, 35, 0.65)');
            gradient.addColorStop(0.82, 'rgba(243, 118, 32, 0.65)');
            gradient.addColorStop(1.00, 'rgba(246, 146, 29, 0.65)');
            ctx.fillStyle = gradient;
            ctx.fill();

            // Shadow
            ctx.globalAlpha = alpha * 0.20;
            ctx.beginPath();
            ctx.moveTo(sunSize * 0.38917, sunSize * 1.48148);
            ctx.bezierCurveTo(sunSize * 0.46723, sunSize * 1.50997, sunSize * 0.5886, sunSize * 1.6547, sunSize * 0.72193, sunSize * 1.7396);
            ctx.bezierCurveTo(sunSize * 0.83304, sunSize * 1.81082, sunSize * 0.95783, sunSize * 1.82678, sunSize * 1.02108, sunSize * 1.82678);
            ctx.bezierCurveTo(sunSize * 1.31509, sunSize * 1.82678, sunSize * 1.70199, sunSize * 1.57834, sunSize * 1.70199, sunSize * 1.61937);
            ctx.bezierCurveTo(sunSize * 1.70199, sunSize * 1.67692, sunSize * 1.54017, sunSize * 1.82165, sunSize * 1.32307, sunSize * 1.89743);
            ctx.bezierCurveTo(sunSize * 1.23133, sunSize * 1.92934, sunSize * 1.12136, sunSize * 1.95954, sunSize * 1.02165, sunSize * 1.95441);
            ctx.bezierCurveTo(sunSize * 0.96581, sunSize * 1.95156, sunSize * 0.91282, sunSize * 1.94985, sunSize * 0.86039, sunSize * 1.94358);
            ctx.bezierCurveTo(sunSize * 0.73732, sunSize * 1.9282, sunSize * 0.62165, sunSize * 1.87407, sunSize * 0.51452, sunSize * 1.8188);
            ctx.bezierCurveTo(sunSize * 0.33504, sunSize * 1.72763, sunSize * 0.20113, sunSize * 1.58461, sunSize * 0.20113, sunSize * 1.54074);
            ctx.bezierCurveTo(sunSize * 0.20113, sunSize * 1.51908, sunSize * 0.22849, sunSize * 1.42222, sunSize * 0.38917, sunSize * 1.48148);
            ctx.closePath();
            ctx.fillStyle = 'rgb(255, 150, 0)';
            ctx.fill();

            // Glare
            ctx.globalAlpha = alpha * 1.00;
            ctx.beginPath();
            ctx.moveTo(sunSize * 1.10085, sunSize * 0.04444);
            ctx.bezierCurveTo(sunSize * 1.27407, sunSize * 0.07008, sunSize * 1.42222, sunSize * 0.12592, sunSize * 1.53732, sunSize * 0.20398);
            ctx.bezierCurveTo(sunSize * 1.62735, sunSize * 0.26438, sunSize * 1.69743, sunSize * 0.33846, sunSize * 1.74529, sunSize * 0.42336);
            ctx.bezierCurveTo(sunSize * 1.79316, sunSize * 0.50769, sunSize * 1.89173, sunSize * 0.59829, sunSize * 1.8188, sunSize * 0.70427);
            ctx.bezierCurveTo(sunSize * 1.7168, sunSize * 0.85128, sunSize * 1.76182, sunSize * 1.0433, sunSize * 1.58404, sunSize * 0.86552);
            ctx.bezierCurveTo(sunSize * 1.53561, sunSize * 0.81766, sunSize * 1.39145, sunSize * 0.55213, sunSize * 1.34472, sunSize * 0.47122);
            ctx.bezierCurveTo(sunSize * 1.27635, sunSize * 0.35327, sunSize * 1.21766, sunSize * 0.3168, sunSize * 1.1282, sunSize * 0.25641);
            ctx.bezierCurveTo(sunSize * 0.92307, sunSize * 0.11737, sunSize * 0.70484, sunSize * 0.02792, sunSize * 0.87179, sunSize * 0.02792);
            ctx.bezierCurveTo(sunSize * 0.95213, sunSize * 0.02792, sunSize * 1.02849, sunSize * 0.03361, sunSize * 1.10085, sunSize * 0.04444);
            ctx.closePath();
            gradient = ctx.createLinearGradient(sunSize * 1.21139, sunSize * 0.54415, sunSize * 1.52421, sunSize * 0.18461);
            gradient.addColorStop(0.00, 'rgba(255, 255, 255, 0)');
            gradient.addColorStop(1.00, 'rgba(255, 255, 255, 1)');
            ctx.fillStyle = gradient;
            ctx.fill();

            // Highlight
            ctx.globalAlpha = alpha * 0.80;
            ctx.beginPath();
            ctx.moveTo(sunSize * 1.96011, sunSize * 0.9829);
            ctx.bezierCurveTo(sunSize * 1.96011, sunSize * 1.51965, sunSize * 1.52877, sunSize * 1.95441, sunSize * 0.99715, sunSize * 1.95441);
            ctx.bezierCurveTo(sunSize * 0.46552, sunSize * 1.95441, sunSize * 0.03418, sunSize * 1.51965, sunSize * 0.03418, sunSize * 0.9829);
            ctx.bezierCurveTo(sunSize * 0.03418, sunSize * 0.44615, sunSize * 0.46552, sunSize * 0.01139, sunSize * 0.99715, sunSize * 0.01139);
            ctx.bezierCurveTo(sunSize * 1.52877, sunSize * 0.01139, sunSize * 1.96011, sunSize * 0.44615, sunSize * 1.96011, sunSize * 0.9829);
            ctx.closePath();
            gradient = ctx.createLinearGradient(sunSize * 0.99715, sunSize * 1.95441, sunSize * 0.99715, sunSize * 0.01139);
            gradient.addColorStop(0.33, 'rgba(255, 255, 255, 0)');
            gradient.addColorStop(0.63, 'rgba(255, 255, 255, 0.5)');
            gradient.addColorStop(1.00, 'rgba(255, 255, 255, 1)');
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.restore();
            ctx.translate(cfg.xPos * -1, cfg.yPos * -1);

        };
    };
};



Atmosphere.Moon = function (context, x, y, ratio, tint) {
    'use strict';

    return new function () {
        this.settings = {
            context: context,
            xPos: x || 0,
            yPos: y || 0,
            sizeRatio: ratio,
            tint: tint || '#fff'
        };


        var cfg = this.settings;
        cfg.xPos = x;
        cfg.yPos = y;

        var ctx = cfg.context,
            moonSize = 50;


        this.draw = function () {
            var alpha = ctx.globalAlpha;
            ctx.scale(cfg.sizeRatio, cfg.sizeRatio);
            ctx.translate(cfg.xPos, cfg.yPos);

            ctx.save();

            // Initialise drawing settings
            ctx.fillStyle = cfg.tint;


            ctx.shadowColor = cfg.tint;
            ctx.shadowBlur = moonSize / 2;

            ctx.beginPath();
            ctx.moveTo(moonSize, moonSize);
            ctx.arc(moonSize, moonSize, moonSize, Math.PI, Math.PI - 0.0001);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.shadowBlur = 8;
            ctx.shadowColor = cfg.tint;
            ctx.fillStyle = '#c0c0c0';
            ctx.arc(moonSize, moonSize, moonSize - 2, Math.PI, Math.PI - 0.0001);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            var gradient = ctx.createRadialGradient(moonSize, moonSize, 0, moonSize, moonSize, moonSize);
            gradient.addColorStop(0.00, 'rgb(255, 255, 255)');
            gradient.addColorStop(0.50, 'rgb(241, 241, 241)');
            gradient.addColorStop(0.85, 'rgb(171, 171, 171)');
            gradient.addColorStop(1.00, 'rgb(101, 101, 101)');
            ctx.fillStyle = gradient;
            ctx.arc(moonSize, moonSize, moonSize - 3, Math.PI, Math.PI - 0.0001);
            ctx.fill();

            ctx.restore();

            // Subtle-tones
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(moonSize * 0.88167, moonSize * 1.58278);
            ctx.bezierCurveTo(moonSize * 0.84444, moonSize * 1.58278, moonSize * 0.85833, moonSize * 1.54444, moonSize * 0.85222, moonSize * 1.52278);
            ctx.bezierCurveTo(moonSize * 0.84722, moonSize * 1.50444, moonSize * 0.81944, moonSize * 1.48056, moonSize * 0.82667, moonSize * 1.46167);
            ctx.bezierCurveTo(moonSize * 0.83278, moonSize * 1.44722, moonSize * 0.85, moonSize * 1.46, moonSize * 0.85611, moonSize * 1.45278);
            ctx.bezierCurveTo(moonSize * 0.86778, moonSize * 1.43889, moonSize * 0.86111, moonSize * 1.43222, moonSize * 0.86667, moonSize * 1.41611);
            ctx.bezierCurveTo(moonSize * 0.87888, moonSize * 1.38222, moonSize * 0.87388, moonSize * 1.38833, moonSize * 0.91055, moonSize * 1.395);
            ctx.bezierCurveTo(moonSize * 0.96055, moonSize * 1.405, moonSize * 1.00888, moonSize * 1.41111, moonSize * 1.055, moonSize * 1.38555);
            ctx.bezierCurveTo(moonSize * 1.07666, moonSize * 1.37388, moonSize * 1.10277, moonSize * 1.36333, moonSize * 1.12333, moonSize * 1.34944);
            ctx.bezierCurveTo(moonSize * 1.14277, moonSize * 1.33666, moonSize * 1.14999, moonSize * 1.31666, moonSize * 1.16611, moonSize * 1.30166);
            ctx.bezierCurveTo(moonSize * 1.17222, moonSize * 1.31888, moonSize * 1.13999, moonSize * 1.47833, moonSize * 1.17777, moonSize * 1.48666);
            ctx.bezierCurveTo(moonSize * 1.23388, moonSize * 1.49888, moonSize * 1.305, moonSize * 1.38555, moonSize * 1.34388, moonSize * 1.36111);
            ctx.bezierCurveTo(moonSize * 1.36222, moonSize * 1.405, moonSize * 1.32833, moonSize * 1.42111, moonSize * 1.30111, moonSize * 1.45444);
            ctx.bezierCurveTo(moonSize * 1.255, moonSize * 1.51055, moonSize * 1.30277, moonSize * 1.49, moonSize * 1.32722, moonSize * 1.52666);
            ctx.bezierCurveTo(moonSize * 1.34055, moonSize * 1.54666, moonSize * 1.35055, moonSize * 1.60055, moonSize * 1.33722, moonSize * 1.62055);
            ctx.bezierCurveTo(moonSize * 1.31166, moonSize * 1.66, moonSize * 1.26111, moonSize * 1.63722, moonSize * 1.23277, moonSize * 1.66055);
            ctx.bezierCurveTo(moonSize * 1.24944, moonSize * 1.665, moonSize * 1.27333, moonSize * 1.67166, moonSize * 1.28888, moonSize * 1.68222);
            ctx.bezierCurveTo(moonSize * 1.26388, moonSize * 1.68666, moonSize * 1.24611, moonSize * 1.67388, moonSize * 1.22277, moonSize * 1.67611);
            ctx.bezierCurveTo(moonSize * 1.22277, moonSize * 1.69833, moonSize * 1.20444, moonSize * 1.70333, moonSize * 1.2, moonSize * 1.72333);
            ctx.bezierCurveTo(moonSize * 1.19555, moonSize * 1.74333, moonSize * 1.20666, moonSize * 1.75888, moonSize * 1.21055, moonSize * 1.775);
            ctx.bezierCurveTo(moonSize * 1.18722, moonSize * 1.77611, moonSize * 1.19722, moonSize * 1.75666, moonSize * 1.18111, moonSize * 1.74666);
            ctx.bezierCurveTo(moonSize * 1.17, moonSize * 1.74, moonSize * 1.14611, moonSize * 1.73777, moonSize * 1.13277, moonSize * 1.73555);
            ctx.bezierCurveTo(moonSize * 1.09944, moonSize * 1.73111, moonSize * 1.05722, moonSize * 1.745, moonSize * 1.04777, moonSize * 1.70222);
            ctx.bezierCurveTo(moonSize * 1.01055, moonSize * 1.69111, moonSize * 0.97722, moonSize * 1.69444, moonSize * 0.94166, moonSize * 1.67111);
            ctx.bezierCurveTo(moonSize * 0.90777, moonSize * 1.64833, moonSize * 0.89444, moonSize * 1.615, moonSize * 0.86666, moonSize * 1.59055);
            ctx.fillStyle = 'rgb(231, 229, 229)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.17222, moonSize * 1.31888)
            ctx.bezierCurveTo(moonSize * 1.21111, moonSize * 1.36444, moonSize * 1.15777, moonSize * 1.36444, moonSize * 1.15777, moonSize * 1.36444);
            ctx.bezierCurveTo(moonSize * 1.17888, moonSize * 1.35888, moonSize * 1.15777, moonSize * 1.40888, moonSize * 1.15777, moonSize * 1.40888);
            ctx.fill();
            ctx.restore();

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(moonSize * 1.02777, moonSize * 1.95888)
            ctx.bezierCurveTo(moonSize * 1.02499, moonSize * 1.92277, moonSize * 1.05777, moonSize * 1.90888, moonSize * 1.06666, moonSize * 1.88111);
            ctx.bezierCurveTo(moonSize * 1.07444, moonSize * 1.85666, moonSize * 1.06777, moonSize * 1.81277, moonSize * 1.06555, moonSize * 1.78777);
            ctx.bezierCurveTo(moonSize * 1.06333, moonSize * 1.76833, moonSize * 1.04222, moonSize * 1.72555, moonSize * 1.05555, moonSize * 1.70333);
            ctx.bezierCurveTo(moonSize * 1.07611, moonSize * 1.66777, moonSize * 1.09722, moonSize * 1.70388, moonSize * 1.10777, moonSize * 1.73055);
            ctx.bezierCurveTo(moonSize * 1.16611, moonSize * 1.71777, moonSize * 1.17444, moonSize * 1.77388, moonSize * 1.2, moonSize * 1.80888);
            ctx.bezierCurveTo(moonSize * 1.22444, moonSize * 1.84222, moonSize * 1.27833, moonSize * 1.87277, moonSize * 1.28833, moonSize * 1.91333);
            ctx.bezierCurveTo(moonSize * 1.24, moonSize * 1.92666, moonSize * 1.20333, moonSize * 1.915, moonSize * 1.15944, moonSize * 1.92388);
            ctx.bezierCurveTo(moonSize * 1.11555, moonSize * 1.93333, moonSize * 1.08333, moonSize * 1.97611, moonSize * 1.02777, moonSize * 1.95333);
            ctx.fillStyle = 'rgb(134, 134, 134)';
            ctx.fill();

            // Mid-tones
            ctx.beginPath();
            ctx.moveTo(moonSize * 1.23888, moonSize * 1.50333)
            ctx.bezierCurveTo(moonSize * 1.26499, moonSize * 1.47666, moonSize * 1.30166, moonSize * 1.46944, moonSize * 1.32888, moonSize * 1.44333);
            ctx.bezierCurveTo(moonSize * 1.35277, moonSize * 1.42055, moonSize * 1.37444, moonSize * 1.385, moonSize * 1.39611, moonSize * 1.35444);
            ctx.bezierCurveTo(moonSize * 1.43666, moonSize * 1.29611, moonSize * 1.42888, moonSize * 1.19833, moonSize * 1.505, moonSize * 1.17333);
            ctx.bezierCurveTo(moonSize * 1.57666, moonSize * 1.02611, moonSize * 1.64333, moonSize * 0.87333, moonSize * 1.67722, moonSize * 0.71444);
            ctx.bezierCurveTo(moonSize * 1.68055, moonSize * 0.69944, moonSize * 1.69388, moonSize * 0.60611, moonSize * 1.70388, moonSize * 0.60166);
            ctx.bezierCurveTo(moonSize * 1.72888, moonSize * 0.59, moonSize * 1.76611, moonSize * 0.65111, moonSize * 1.775, moonSize * 0.67111);
            ctx.bezierCurveTo(moonSize * 1.79166, moonSize * 0.70777, moonSize * 1.78777, moonSize * 0.74833, moonSize * 1.8, moonSize * 0.78666);
            ctx.bezierCurveTo(moonSize * 1.81277, moonSize * 0.82722, moonSize * 1.82, moonSize * 0.855, moonSize * 1.82333, moonSize * 0.90222);
            ctx.bezierCurveTo(moonSize * 1.87666, moonSize * 0.90944, moonSize * 1.86444, moonSize * 0.97388, moonSize * 1.84555, moonSize * 1.005);
            ctx.bezierCurveTo(moonSize * 1.83277, moonSize * 1.02666, moonSize * 1.82055, moonSize * 1.00444, moonSize * 1.81111, moonSize * 1.04222);
            ctx.bezierCurveTo(moonSize * 1.805, moonSize * 1.06611, moonSize * 1.82, moonSize * 1.08666, moonSize * 1.81666, moonSize * 1.10888);
            ctx.bezierCurveTo(moonSize * 1.81, moonSize * 1.155, moonSize * 1.775, moonSize * 1.19166, moonSize * 1.76111, moonSize * 1.23666);
            ctx.bezierCurveTo(moonSize * 1.75, moonSize * 1.27166, moonSize * 1.74888, moonSize * 1.33277, moonSize * 1.73222, moonSize * 1.36833);
            ctx.bezierCurveTo(moonSize * 1.69277, moonSize * 1.45166, moonSize * 1.59222, moonSize * 1.45277, moonSize * 1.52222, moonSize * 1.47555);
            ctx.bezierCurveTo(moonSize * 1.44055, moonSize * 1.50222, moonSize * 1.35944, moonSize * 1.53944, moonSize * 1.26666, moonSize * 1.53666);
            ctx.bezierCurveTo(moonSize * 1.23833, moonSize * 1.53611, moonSize * 1.21388, moonSize * 1.53777, moonSize * 1.195, moonSize * 1.51555);
            ctx.bezierCurveTo(moonSize * 1.21111, moonSize * 1.51388, moonSize * 1.22722, moonSize * 1.50277, moonSize * 1.23888, moonSize * 1.49777);
            ctx.fillStyle = 'rgb(157, 157, 157)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.77444, moonSize * 0.44055)
            ctx.bezierCurveTo(moonSize * 1.81222, moonSize * 0.47555, moonSize * 1.83111, moonSize * 0.49277, moonSize * 1.84444, moonSize * 0.54222);
            ctx.bezierCurveTo(moonSize * 1.86777, moonSize * 0.62944, moonSize * 1.90111, moonSize * 0.70611, moonSize * 1.92666, moonSize * 0.78777);
            ctx.bezierCurveTo(moonSize * 1.95166, moonSize * 0.86944, moonSize * 1.97277, moonSize * 0.94777, moonSize * 1.95555, moonSize * 1.02555);
            ctx.bezierCurveTo(moonSize * 1.93833, moonSize * 1.10333, moonSize * 1.92111, moonSize * 1.19555, moonSize * 1.90055, moonSize * 1.27555);
            ctx.bezierCurveTo(moonSize * 1.88166, moonSize * 1.34944, moonSize * 1.85722, moonSize * 1.47222, moonSize * 1.79722, moonSize * 1.52999);
            ctx.bezierCurveTo(moonSize * 1.77611, moonSize * 1.55055, moonSize * 1.76, moonSize * 1.55277, moonSize * 1.74055, moonSize * 1.57777);
            ctx.bezierCurveTo(moonSize * 1.72666, moonSize * 1.59611, moonSize * 1.72, moonSize * 1.61833, moonSize * 1.70444, moonSize * 1.635);
            ctx.bezierCurveTo(moonSize * 1.67722, moonSize * 1.66444, moonSize * 1.63944, moonSize * 1.68888, moonSize * 1.60555, moonSize * 1.71);
            ctx.bezierCurveTo(moonSize * 1.52999, moonSize * 1.75888, moonSize * 1.47111, moonSize * 1.815, moonSize * 1.39722, moonSize * 1.86888);
            ctx.bezierCurveTo(moonSize * 1.35111, moonSize * 1.90222, moonSize * 1.32222, moonSize * 1.90444, moonSize * 1.27888, moonSize * 1.86);
            ctx.bezierCurveTo(moonSize * 1.26444, moonSize * 1.845, moonSize * 1.20833, moonSize * 1.78777, moonSize * 1.20388, moonSize * 1.76611);
            ctx.bezierCurveTo(moonSize * 1.20111, moonSize * 1.76444, moonSize * 1.2, moonSize * 1.76222, moonSize * 1.19944, moonSize * 1.75888);
            ctx.bezierCurveTo(moonSize * 1.22277, moonSize * 1.74833, moonSize * 1.23444, moonSize * 1.72611, moonSize * 1.22888, moonSize * 1.69833);
            ctx.bezierCurveTo(moonSize * 1.26777, moonSize * 1.69166, moonSize * 1.29833, moonSize * 1.72333, moonSize * 1.33277, moonSize * 1.73611);
            ctx.bezierCurveTo(moonSize * 1.32388, moonSize * 1.68, moonSize * 1.24833, moonSize * 1.70166, moonSize * 1.22722, moonSize * 1.65888);
            ctx.bezierCurveTo(moonSize * 1.25055, moonSize * 1.63555, moonSize * 1.29944, moonSize * 1.65666, moonSize * 1.31388, moonSize * 1.61);
            ctx.bezierCurveTo(moonSize * 1.32722, moonSize * 1.56611, moonSize * 1.28222, moonSize * 1.56833, moonSize * 1.24111, moonSize * 1.57);
            ctx.bezierCurveTo(moonSize * 1.28944, moonSize * 1.545, moonSize * 1.36722, moonSize * 1.58166, moonSize * 1.42222, moonSize * 1.55777);
            ctx.bezierCurveTo(moonSize * 1.48055, moonSize * 1.53222, moonSize * 1.52, moonSize * 1.505, moonSize * 1.58388, moonSize * 1.49777);
            ctx.bezierCurveTo(moonSize * 1.64722, moonSize * 1.49055, moonSize * 1.68111, moonSize * 1.47888, moonSize * 1.72833, moonSize * 1.43277);
            ctx.bezierCurveTo(moonSize * 1.77111, moonSize * 1.39055, moonSize * 1.765, moonSize * 1.375, moonSize * 1.77833, moonSize * 1.31444);
            ctx.bezierCurveTo(moonSize * 1.79444, moonSize * 1.23611, moonSize * 1.83277, moonSize * 1.16388, moonSize * 1.86666, moonSize * 1.08666);
            ctx.bezierCurveTo(moonSize * 1.89833, moonSize * 1.01333, moonSize * 1.91111, moonSize * 0.89888, moonSize * 1.88944, moonSize * 0.81944);
            ctx.bezierCurveTo(moonSize * 1.87722, moonSize * 0.77666, moonSize * 1.84166, moonSize * 0.73944, moonSize * 1.82333, moonSize * 0.70055);
            ctx.bezierCurveTo(moonSize * 1.80611, moonSize * 0.66277, moonSize * 1.79944, moonSize * 0.625, moonSize * 1.775, moonSize * 0.59055);
            ctx.bezierCurveTo(moonSize * 1.72777, moonSize * 0.52444, moonSize * 1.67055, moonSize * 0.42388, moonSize * 1.67611, moonSize * 0.34166);
            ctx.bezierCurveTo(moonSize * 1.72055, moonSize * 0.34777, moonSize * 1.74333, moonSize * 0.41222, moonSize * 1.77444, moonSize * 0.44055);
            ctx.closePath();
            ctx.fillStyle = 'rgb(134, 134, 134)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 0.92444, moonSize * 1.60722)
            ctx.bezierCurveTo(moonSize * 0.95833, moonSize * 1.64277, moonSize * 1.00277, moonSize * 1.64666, moonSize * 1.02277, moonSize * 1.69333);
            ctx.bezierCurveTo(moonSize * 1.04722, moonSize * 1.74944, moonSize * 1.02888, moonSize * 1.90666, moonSize * 1.00444, moonSize * 1.96611);
            ctx.bezierCurveTo(moonSize * 0.94888, moonSize * 1.98055, moonSize * 0.86944, moonSize * 1.94611, moonSize * 0.81055, moonSize * 1.93611);
            ctx.bezierCurveTo(moonSize * 0.74611, moonSize * 1.92555, moonSize * 0.68111, moonSize * 1.90611, moonSize * 0.62277, moonSize * 1.88388);
            ctx.bezierCurveTo(moonSize * 0.51666, moonSize * 1.84388, moonSize * 0.39888, moonSize * 1.76666, moonSize * 0.31277, moonSize * 1.68666);
            ctx.bezierCurveTo(moonSize * 0.23055, moonSize * 1.60944, moonSize * 0.15166, moonSize * 1.47222, moonSize * 0.10666, moonSize * 1.36722);
            ctx.bezierCurveTo(moonSize * 0.05888, moonSize * 1.25666, moonSize * 0.02222, moonSize * 1.10555, moonSize * 0.02277, moonSize * 0.97611);
            ctx.bezierCurveTo(moonSize * 0.02277, moonSize * 0.87555, moonSize * 0.06555, moonSize * 0.75222, moonSize * 0.10833, moonSize * 0.67);
            ctx.bezierCurveTo(moonSize * 0.12944, moonSize * 0.63, moonSize * 0.15055, moonSize * 0.51666, moonSize * 0.19833, moonSize * 0.50222);
            ctx.bezierCurveTo(moonSize * 0.24833, moonSize * 0.48666, moonSize * 0.28277, moonSize * 0.57722, moonSize * 0.33, moonSize * 0.59611);
            ctx.bezierCurveTo(moonSize * 0.35333, moonSize * 0.64833, moonSize * 0.34722, moonSize * 0.66, moonSize * 0.39333, moonSize * 0.69666);
            ctx.bezierCurveTo(moonSize * 0.46166, moonSize * 0.75166, moonSize * 0.53333, moonSize * 0.76777, moonSize * 0.58111, moonSize * 0.85555);
            ctx.bezierCurveTo(moonSize * 0.64166, moonSize * 0.965, moonSize * 0.76833, moonSize * 1.14722, moonSize * 0.79388, moonSize * 1.27111);
            ctx.bezierCurveTo(moonSize * 0.80555, moonSize * 1.32777, moonSize * 0.77722, moonSize * 1.39666, moonSize * 0.80055, moonSize * 1.45111);
            ctx.bezierCurveTo(moonSize * 0.81666, moonSize * 1.48833, moonSize * 0.83888, moonSize * 1.485, moonSize * 0.85888, moonSize * 1.51);
            ctx.bezierCurveTo(moonSize * 0.88111, moonSize * 1.53722, moonSize * 0.89833, moonSize * 1.57944, moonSize * 0.92444, moonSize * 1.60722);
            ctx.closePath();
            ctx.fillStyle = 'rgb(149, 149, 149)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 0.87277, moonSize * 1.42)
            ctx.bezierCurveTo(moonSize * 0.81722, moonSize * 1.39388, moonSize * 0.83888, moonSize * 1.25611, moonSize * 0.81444, moonSize * 1.20611);
            ctx.bezierCurveTo(moonSize * 0.78999, moonSize * 1.15611, moonSize * 0.72722, moonSize * 1.10888, moonSize * 0.70611, moonSize * 1.05611);
            ctx.bezierCurveTo(moonSize * 0.69055, moonSize * 1.01666, moonSize * 0.69333, moonSize * 0.97166, moonSize * 0.68111, moonSize * 0.93111);
            ctx.bezierCurveTo(moonSize * 0.62777, moonSize * 0.75388, moonSize * 0.43166, moonSize * 0.71388, moonSize * 0.355, moonSize * 0.56166);
            ctx.bezierCurveTo(moonSize * 0.26666, moonSize * 0.38555, moonSize * 0.45444, moonSize * 0.36, moonSize * 0.52722, moonSize * 0.23777);
            ctx.bezierCurveTo(moonSize * 0.56333, moonSize * 0.17722, moonSize * 0.58944, moonSize * 0.14722, moonSize * 0.64777, moonSize * 0.115);
            ctx.bezierCurveTo(moonSize * 0.675, moonSize * 0.1, moonSize * 0.70222, moonSize * 0.08722, moonSize * 0.73111, moonSize * 0.08111);
            ctx.bezierCurveTo(moonSize * 0.75, moonSize * 0.07666, moonSize * 0.77777, moonSize * 0.08222, moonSize * 0.79666, moonSize * 0.08111);
            ctx.bezierCurveTo(moonSize * 0.845, moonSize * 0.07888, moonSize * 0.90833, moonSize * 0.095, moonSize * 0.955, moonSize * 0.07944);
            ctx.bezierCurveTo(moonSize * 0.96555, moonSize * 0.07611, moonSize * 0.97888, moonSize * 0.05055, moonSize * 0.98277, moonSize * 0.04944);
            ctx.bezierCurveTo(moonSize * 1.06666, moonSize * 0.02722, moonSize * 1.11611, moonSize * 0.07277, moonSize * 1.19611, moonSize * 0.06555);
            ctx.bezierCurveTo(moonSize * 1.19555, moonSize * 0.06555, moonSize * 1.25166, moonSize * 0.21722, moonSize * 1.25444, moonSize * 0.23166);
            ctx.bezierCurveTo(moonSize * 1.26833, moonSize * 0.29555, moonSize * 1.25944, moonSize * 0.36666, moonSize * 1.25611, moonSize * 0.43111);
            ctx.bezierCurveTo(moonSize * 1.25333, moonSize * 0.48444, moonSize * 1.27722, moonSize * 0.51611, moonSize * 1.28166, moonSize * 0.55555);
            ctx.bezierCurveTo(moonSize * 1.28666, moonSize * 0.60722, moonSize * 1.26166, moonSize * 0.65111, moonSize * 1.25611, moonSize * 0.69777);
            ctx.bezierCurveTo(moonSize * 1.25, moonSize * 0.74833, moonSize * 1.27277, moonSize * 0.79388, moonSize * 1.27333, moonSize * 0.83722);
            ctx.bezierCurveTo(moonSize * 1.27388, moonSize * 0.91055, moonSize * 1.26277, moonSize * 1.02166, moonSize * 1.24111, moonSize * 1.09111);
            ctx.bezierCurveTo(moonSize * 1.21722, moonSize * 1.16777, moonSize * 1.14666, moonSize * 1.28555, moonSize * 1.09833, moonSize * 1.32833);
            ctx.bezierCurveTo(moonSize * 1.05944, moonSize * 1.36222, moonSize * 0.92555, moonSize * 1.44444, moonSize * 0.87277, moonSize * 1.42);
            ctx.closePath();
            ctx.fillStyle = 'rgb(169, 169, 169)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.19777, moonSize * 1.49555)
            ctx.bezierCurveTo(moonSize * 1.24777, moonSize * 1.47555, moonSize * 1.29722, moonSize * 1.37833, moonSize * 1.34444, moonSize * 1.33666);
            ctx.bezierCurveTo(moonSize * 1.41277, moonSize * 1.27611, moonSize * 1.45055, moonSize * 1.18833, moonSize * 1.49166, moonSize * 1.10888);
            ctx.bezierCurveTo(moonSize * 1.57388, moonSize * 0.95, moonSize * 1.64777, moonSize * 0.78333, moonSize * 1.66444, moonSize * 0.60388);
            ctx.bezierCurveTo(moonSize * 1.67055, moonSize * 0.53555, moonSize * 1.66444, moonSize * 0.46388, moonSize * 1.66444, moonSize * 0.39555);
            ctx.bezierCurveTo(moonSize * 1.66444, moonSize * 0.28722, moonSize * 1.66611, moonSize * 0.295, moonSize * 1.58055, moonSize * 0.25444);
            ctx.bezierCurveTo(moonSize * 1.44833, moonSize * 0.19166, moonSize * 1.40777, moonSize * 0.08944, moonSize * 1.24, moonSize * 0.09666);
            ctx.bezierCurveTo(moonSize * 1.29166, moonSize * 0.215, moonSize * 1.30055, moonSize * 0.34277, moonSize * 1.30611, moonSize * 0.47888);
            ctx.bezierCurveTo(moonSize * 1.31722, moonSize * 0.75111, moonSize * 1.32, moonSize * 0.99833, moonSize * 1.225, moonSize * 1.25777);
            ctx.bezierCurveTo(moonSize * 1.205, moonSize * 1.31111, moonSize * 1.14666, moonSize * 1.47666, moonSize * 1.18111, moonSize * 1.50388);
            ctx.fillStyle = 'rgb(172, 172, 172)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.10555, moonSize * 1.56055)
            ctx.bezierCurveTo(moonSize * 1.08166, moonSize * 1.58444, moonSize * 1.08888, moonSize * 1.585, moonSize * 1.04833, moonSize * 1.585);
            ctx.bezierCurveTo(moonSize * 0.99388, moonSize * 1.585, moonSize * 0.985, moonSize * 1.57, moonSize * 0.97222, moonSize * 1.53666);
            ctx.bezierCurveTo(moonSize * 0.95944, moonSize * 1.50388, moonSize * 0.98, moonSize * 1.49222, moonSize * 1.03444, moonSize * 1.49222);
            ctx.bezierCurveTo(moonSize * 1.08833, moonSize * 1.49222, moonSize * 1.13111, moonSize * 1.53555, moonSize * 1.10555, moonSize * 1.56055);
            ctx.closePath();
            ctx.lineWidth = 6.0;
            ctx.strokeStyle = 'rgb(154, 154, 154)';
            ctx.lineJoin = 'miter';
            ctx.miterLimit = 4.0;
            ctx.stroke();
            ctx.restore();

            // Dark-spots
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(moonSize * 1.68111, moonSize * 0.43444)
            ctx.bezierCurveTo(moonSize * 1.51222, moonSize * 0.42388, moonSize * 1.56611, moonSize * 0.58222, moonSize * 1.68055, moonSize * 0.61777);
            ctx.bezierCurveTo(moonSize * 1.83777, moonSize * 0.66666, moonSize * 1.76, moonSize * 0.48277, moonSize * 1.67277, moonSize * 0.44277);
            ctx.fillStyle = 'rgb(95, 95, 95)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 0.33944, moonSize * 0.32611)
            ctx.bezierCurveTo(moonSize * 0.36055, moonSize * 0.30722, moonSize * 0.39166, moonSize * 0.275, moonSize * 0.42055, moonSize * 0.25722);
            ctx.bezierCurveTo(moonSize * 0.46, moonSize * 0.23333, moonSize * 0.485, moonSize * 0.20166, moonSize * 0.51611, moonSize * 0.18);
            ctx.bezierCurveTo(moonSize * 0.58222, moonSize * 0.13333, moonSize * 0.65111, moonSize * 0.14888, moonSize * 0.72944, moonSize * 0.12388);

            ctx.bezierCurveTo(moonSize * 0.80056, moonSize * 0.10167, moonSize * 1.09389, moonSize * -0.02222, moonSize * 1.13889, moonSize * 0.08944);
            ctx.bezierCurveTo(moonSize * 1.08277, moonSize * 0.09111, moonSize * 0.98333, moonSize * 0.11277, moonSize * 0.93777, moonSize * 0.14055);
            ctx.bezierCurveTo(moonSize * 0.91833, moonSize * 0.15277, moonSize * 0.77111, moonSize * 0.33555, moonSize * 0.805, moonSize * 0.17722);
            ctx.bezierCurveTo(moonSize * 0.73777, moonSize * 0.17388, moonSize * 0.64777, moonSize * 0.17444, moonSize * 0.58944, moonSize * 0.20055);
            ctx.bezierCurveTo(moonSize * 0.51722, moonSize * 0.23277, moonSize * 0.49, moonSize * 0.28444, moonSize * 0.39944, moonSize * 0.27777);
            ctx.bezierCurveTo(moonSize * 0.39666, moonSize * 0.28888, moonSize * 0.39111, moonSize * 0.29666, moonSize * 0.38777, moonSize * 0.30777);
            ctx.bezierCurveTo(moonSize * 0.37333, moonSize * 0.30944, moonSize * 0.35444, moonSize * 0.31222, moonSize * 0.33944, moonSize * 0.30944);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.31111, moonSize * 0.69222)
            ctx.bezierCurveTo(moonSize * 1.35, moonSize * 0.67333, moonSize * 1.35833, moonSize * 0.64944, moonSize * 1.37222, moonSize * 0.61444);
            ctx.bezierCurveTo(moonSize * 1.38277, moonSize * 0.58722, moonSize * 1.375, moonSize * 0.55444, moonSize * 1.41666, moonSize * 0.55888);
            ctx.bezierCurveTo(moonSize * 1.47277, moonSize * 0.565, moonSize * 1.48388, moonSize * 0.65777, moonSize * 1.51555, moonSize * 0.68666);
            ctx.bezierCurveTo(moonSize * 1.54666, moonSize * 0.71555, moonSize * 1.55388, moonSize * 0.695, moonSize * 1.58888, moonSize * 0.68777);
            ctx.bezierCurveTo(moonSize * 1.62888, moonSize * 0.67944, moonSize * 1.63888, moonSize * 0.68666, moonSize * 1.67222, moonSize * 0.69944);
            ctx.bezierCurveTo(moonSize * 1.69777, moonSize * 0.70944, moonSize * 1.71666, moonSize * 0.73277, moonSize * 1.75, moonSize * 0.72);
            ctx.bezierCurveTo(moonSize * 1.78111, moonSize * 0.70888, moonSize * 1.77944, moonSize * 0.66388, moonSize * 1.82666, moonSize * 0.67611);
            ctx.bezierCurveTo(moonSize * 1.82777, moonSize * 0.70666, moonSize * 1.82999, moonSize * 0.72555, moonSize * 1.84, moonSize * 0.75166);
            ctx.bezierCurveTo(moonSize * 1.85111, moonSize * 0.77944, moonSize * 1.87277, moonSize * 0.78333, moonSize * 1.86666, moonSize * 0.82);
            ctx.bezierCurveTo(moonSize * 1.86333, moonSize * 0.84111, moonSize * 1.83944, moonSize * 0.87666, moonSize * 1.82555, moonSize * 0.89111);
            ctx.bezierCurveTo(moonSize * 1.795, moonSize * 0.92277, moonSize * 1.79388, moonSize * 0.91944, moonSize * 1.77777, moonSize * 0.95888);
            ctx.bezierCurveTo(moonSize * 1.71, moonSize * 1.12555, moonSize * 1.605, moonSize * 0.80722, moonSize * 1.68222, moonSize * 0.79722);
            ctx.bezierCurveTo(moonSize * 1.70055, moonSize * 0.71277, moonSize * 1.62055, moonSize * 0.72222, moonSize * 1.56166, moonSize * 0.72666);
            ctx.bezierCurveTo(moonSize * 1.58666, moonSize * 0.74444, moonSize * 1.66222, moonSize * 0.72, moonSize * 1.64888, moonSize * 0.77444);
            ctx.bezierCurveTo(moonSize * 1.58222, moonSize * 0.78777, moonSize * 1.61222, moonSize * 0.91722, moonSize * 1.52888, moonSize * 0.89833);
            ctx.bezierCurveTo(moonSize * 1.51888, moonSize * 0.98833, moonSize * 1.59222, moonSize * 0.90277, moonSize * 1.61666, moonSize * 0.90333);
            ctx.bezierCurveTo(moonSize * 1.65611, moonSize * 0.90444, moonSize * 1.64888, moonSize * 1.005, moonSize * 1.62388, moonSize * 1.02722);
            ctx.bezierCurveTo(moonSize * 1.54666, moonSize * 1.09444, moonSize * 1.39888, moonSize * 0.90611, moonSize * 1.49222, moonSize * 0.86944);
            ctx.bezierCurveTo(moonSize * 1.46611, moonSize * 0.87, moonSize * 1.41888, moonSize * 0.87944, moonSize * 1.39444, moonSize * 0.87);
            ctx.bezierCurveTo(moonSize * 1.37555, moonSize * 0.86333, moonSize * 1.36888, moonSize * 0.84166, moonSize * 1.35333, moonSize * 0.83388);
            ctx.bezierCurveTo(moonSize * 1.33833, moonSize * 0.82666, moonSize * 1.31111, moonSize * 0.83277, moonSize * 1.3, moonSize * 0.82611);
            ctx.bezierCurveTo(moonSize * 1.27222, moonSize * 0.80888, moonSize * 1.25722, moonSize * 0.78222, moonSize * 1.26111, moonSize * 0.74777);
            ctx.bezierCurveTo(moonSize * 1.26666, moonSize * 0.69944, moonSize * 1.29888, moonSize * 0.71, moonSize * 1.31111, moonSize * 0.67555);
            ctx.fillStyle = 'rgb(101, 101, 101)';
            ctx.fill();

            ctx.globalAlpha = alpha * 0.75;
            ctx.beginPath();
            ctx.moveTo(moonSize * 0.01666, moonSize * 0.85888)
            ctx.bezierCurveTo(moonSize * 0.01888, moonSize * 0.77555, moonSize * 0.10111, moonSize * 0.65277, moonSize * 0.11944, moonSize * 0.58388);
            ctx.bezierCurveTo(moonSize * 0.13444, moonSize * 0.52666, moonSize * 0.20833, moonSize * 0.50777, moonSize * 0.24611, moonSize * 0.46111);
            ctx.bezierCurveTo(moonSize * 0.29, moonSize * 0.40722, moonSize * 0.41, moonSize * 0.34666, moonSize * 0.47333, moonSize * 0.33055);
            ctx.bezierCurveTo(moonSize * 0.35277, moonSize * 0.38055, moonSize * 0.45277, moonSize * 0.35611, moonSize * 0.34666, moonSize * 0.41777);
            ctx.bezierCurveTo(moonSize * 0.32777, moonSize * 0.42888, moonSize * 0.29444, moonSize * 0.43388, moonSize * 0.28333, moonSize * 0.45055);
            ctx.bezierCurveTo(moonSize * 0.26666, moonSize * 0.47555, moonSize * 0.25166, moonSize * 0.50944, moonSize * 0.22777, moonSize * 0.52833);
            ctx.bezierCurveTo(moonSize * 0.16555, moonSize * 0.57722, moonSize * 0.19666, moonSize * 0.64222, moonSize * 0.29444, moonSize * 0.62);
            ctx.bezierCurveTo(moonSize * 0.305, moonSize * 0.57555, moonSize * 0.295, moonSize * 0.55444, moonSize * 0.31666, moonSize * 0.51444);
            ctx.bezierCurveTo(moonSize * 0.34111, moonSize * 0.47, moonSize * 0.38833, moonSize * 0.48111, moonSize * 0.42777, moonSize * 0.45055);
            ctx.bezierCurveTo(moonSize * 0.48111, moonSize * 0.40944, moonSize * 0.58611, moonSize * 0.30055, moonSize * 0.60833, moonSize * 0.38388);
            ctx.bezierCurveTo(moonSize * 0.62111, moonSize * 0.43166, moonSize * 0.62722, moonSize * 0.42111, moonSize * 0.65555, moonSize * 0.45888);
            ctx.bezierCurveTo(moonSize * 0.675, moonSize * 0.48444, moonSize * 0.71944, moonSize * 0.50555, moonSize * 0.73333, moonSize * 0.52);
            ctx.bezierCurveTo(moonSize * 0.76333, moonSize * 0.55055, moonSize * 0.71777, moonSize * 0.61944, moonSize * 0.71666, moonSize * 0.65888);
            ctx.bezierCurveTo(moonSize * 0.715, moonSize * 0.71777, moonSize * 0.54111, moonSize * 0.75944, moonSize * 0.48611, moonSize * 0.79777);
            ctx.bezierCurveTo(moonSize * 0.44833, moonSize * 0.82388, moonSize * 0.45888, moonSize * 0.82888, moonSize * 0.44444, moonSize * 0.87555);
            ctx.bezierCurveTo(moonSize * 0.42888, moonSize * 0.925, moonSize * 0.53388, moonSize * 0.96333, moonSize * 0.58055, moonSize * 0.97);
            ctx.bezierCurveTo(moonSize * 0.63611, moonSize * 0.97833, moonSize * 0.67222, moonSize * 1.01722, moonSize * 0.72888, moonSize * 0.87666);
            ctx.bezierCurveTo(moonSize * 0.73611, moonSize * 0.85833, moonSize * 0.73222, moonSize * 0.83444, moonSize * 0.73777, moonSize * 0.81444);
            ctx.bezierCurveTo(moonSize * 0.74555, moonSize * 0.78444, moonSize * 0.71333, moonSize * 0.735, moonSize * 0.73055, moonSize * 0.70888);
            ctx.bezierCurveTo(moonSize * 0.74333, moonSize * 0.69, moonSize * 0.79555, moonSize * 0.65888, moonSize * 0.80555, moonSize * 0.63944);
            ctx.bezierCurveTo(moonSize * 0.82611, moonSize * 0.59833, moonSize * 0.84277, moonSize * 0.55055, moonSize * 0.85333, moonSize * 0.50111);
            ctx.bezierCurveTo(moonSize * 0.86833, moonSize * 0.43333, moonSize * 0.99444, moonSize * 0.535, moonSize * 0.99444, moonSize * 0.47277);
            ctx.bezierCurveTo(moonSize * 0.99444, moonSize * 0.40333, moonSize * 1.18166, moonSize * 0.36555, moonSize * 1.16555, moonSize * 0.47555);
            ctx.bezierCurveTo(moonSize * 1.15555, moonSize * 0.54222, moonSize * 1.25111, moonSize * 0.53833, moonSize * 1.27222, moonSize * 0.58111);
            ctx.bezierCurveTo(moonSize * 1.29444, moonSize * 0.62611, moonSize * 1.29166, moonSize * 0.68333, moonSize * 1.25666, moonSize * 0.71444);
            ctx.bezierCurveTo(moonSize * 1.22777, moonSize * 0.74, moonSize * 1.18888, moonSize * 0.73333, moonSize * 1.16944, moonSize * 0.76555);
            ctx.bezierCurveTo(moonSize * 1.15111, moonSize * 0.79666, moonSize * 1.16833, moonSize * 0.83333, moonSize * 1.16, moonSize * 0.86722);
            ctx.bezierCurveTo(moonSize * 1.15111, moonSize * 0.90277, moonSize * 1.05777, moonSize * 0.80277, moonSize * 1.03611, moonSize * 0.82833);
            ctx.bezierCurveTo(moonSize * 1.005, moonSize * 0.865, moonSize * 1.02277, moonSize * 0.85166, moonSize * 0.98055, moonSize * 0.90333);
            ctx.bezierCurveTo(moonSize * 0.96111, moonSize * 0.92722, moonSize * 0.89111, moonSize * 0.91666, moonSize * 0.91888, moonSize * 0.99555);
            ctx.bezierCurveTo(moonSize * 0.95555, moonSize * 1.00444, moonSize * 0.95888, moonSize * 1.00833, moonSize * 0.99444, moonSize * 1.02);
            ctx.bezierCurveTo(moonSize * 1.02166, moonSize * 1.02888, moonSize * 1.09166, moonSize * 1.00333, moonSize * 1.14166, moonSize * 1.03388);
            ctx.bezierCurveTo(moonSize * 1.13888, moonSize * 1.06166, moonSize * 1.05388, moonSize * 1.06111, moonSize * 1.02222, moonSize * 1.06);
            ctx.bezierCurveTo(moonSize * 0.99388, moonSize * 1.05944, moonSize * 0.95166, moonSize * 1.03277, moonSize * 0.92222, moonSize * 1.03111);
            ctx.bezierCurveTo(moonSize * 0.90722, moonSize * 1.03055, moonSize * 0.90555, moonSize * 1.05333, moonSize * 0.88999, moonSize * 1.05388);
            ctx.bezierCurveTo(moonSize * 0.87555, moonSize * 1.13111, moonSize * 0.95333, moonSize * 1.16, moonSize * 0.99444, moonSize * 1.20888);
            ctx.bezierCurveTo(moonSize * 1.04777, moonSize * 1.27333, moonSize * 1.00944, moonSize * 1.24166, moonSize * 0.99444, moonSize * 1.30888);
            ctx.bezierCurveTo(moonSize * 0.94944, moonSize * 1.30722, moonSize * 0.93055, moonSize * 1.36388, moonSize * 0.89444, moonSize * 1.34722);
            ctx.bezierCurveTo(moonSize * 0.875, moonSize * 1.33888, moonSize * 0.81555, moonSize * 1.315, moonSize * 0.79833, moonSize * 1.33611);
            ctx.bezierCurveTo(moonSize * 0.76666, moonSize * 1.375, moonSize * 0.89388, moonSize * 1.48111, moonSize * 0.78222, moonSize * 1.50222);
            ctx.bezierCurveTo(moonSize * 0.74833, moonSize * 1.50833, moonSize * 0.72833, moonSize * 1.47666, moonSize * 0.69444, moonSize * 1.47);
            ctx.bezierCurveTo(moonSize * 0.67, moonSize * 1.46555, moonSize * 0.61277, moonSize * 1.48333, moonSize * 0.59388, moonSize * 1.46611);
            ctx.bezierCurveTo(moonSize * 0.57777, moonSize * 1.45111, moonSize * 0.58555, moonSize * 1.40722, moonSize * 0.58833, moonSize * 1.36722);
            ctx.bezierCurveTo(moonSize * 0.59111, moonSize * 1.32277, moonSize * 0.58666, moonSize * 1.28277, moonSize * 0.53444, moonSize * 1.29333);
            ctx.bezierCurveTo(moonSize * 0.51388, moonSize * 1.32666, moonSize * 0.52333, moonSize * 1.38, moonSize * 0.505, moonSize * 1.40777);
            ctx.bezierCurveTo(moonSize * 0.48944, moonSize * 1.43111, moonSize * 0.41888, moonSize * 1.44611, moonSize * 0.39, moonSize * 1.44111);
            ctx.bezierCurveTo(moonSize * 0.37777, moonSize * 1.41888, moonSize * 0.37555, moonSize * 1.385, moonSize * 0.37277, moonSize * 1.35277);
            ctx.bezierCurveTo(moonSize * 0.36777, moonSize * 1.30222, moonSize * 0.36055, moonSize * 1.25555, moonSize * 0.30666, moonSize * 1.26499);
            ctx.bezierCurveTo(moonSize * 0.31, moonSize * 1.34777, moonSize * 0.25777, moonSize * 1.34055, moonSize * 0.18333, moonSize * 1.33111);
            ctx.bezierCurveTo(moonSize * 0.1, moonSize * 1.32111, moonSize * 0.06055, moonSize * 1.10222, moonSize * 0.06777, moonSize * 1.23722);
            ctx.bezierCurveTo(moonSize * 0.00222, moonSize * 1.00055, moonSize * 0.01555, moonSize * 0.95166, moonSize * 0.01666, moonSize * 0.85888);
            ctx.fillStyle = 'rgb(50, 50, 50)';
            ctx.fill();
            ctx.restore();

            // Details
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(moonSize * 0.19611, moonSize * 0.72388)
            ctx.bezierCurveTo(moonSize * 0.19888, moonSize * 0.70888, moonSize * 0.21055, moonSize * 0.70277, moonSize * 0.22555, moonSize * 0.70555);
            ctx.bezierCurveTo(moonSize * 0.24055, moonSize * 0.74055, moonSize * 0.21166, moonSize * 0.75166, moonSize * 0.19611, moonSize * 0.72388);
            ctx.fillStyle = 'rgb(255, 255, 255)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 0.6, moonSize * 0.85333)
            ctx.bezierCurveTo(moonSize * 0.6, moonSize * 0.83833, moonSize * 0.63944, moonSize * 0.835, moonSize * 0.63666, moonSize * 0.86388);
            ctx.bezierCurveTo(moonSize * 0.61888, moonSize * 0.86611, moonSize * 0.59833, moonSize * 0.87611, moonSize * 0.59611, moonSize * 0.85333);

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.07388, moonSize * 1.42722)
            ctx.bezierCurveTo(moonSize * 1.09222, moonSize * 1.41388, moonSize * 1.11277, moonSize * 1.37777, moonSize * 1.13666, moonSize * 1.38);
            ctx.bezierCurveTo(moonSize * 1.13277, moonSize * 1.40444, moonSize * 1.16111, moonSize * 1.47666, moonSize * 1.10055, moonSize * 1.45944);
            ctx.bezierCurveTo(moonSize * 1.10166, moonSize * 1.45333, moonSize * 1.09833, moonSize * 1.445, moonSize * 1.09944, moonSize * 1.43888);
            ctx.bezierCurveTo(moonSize * 1.08277, moonSize * 1.44277, moonSize * 1.08111, moonSize * 1.43555, moonSize * 1.07388, moonSize * 1.42722);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 0.24055, moonSize * 1.46833)
            ctx.bezierCurveTo(moonSize * 0.25666, moonSize * 1.49444, moonSize * 0.27722, moonSize * 1.51611, moonSize * 0.29277, moonSize * 1.54111);
            ctx.bezierCurveTo(moonSize * 0.30388, moonSize * 1.55833, moonSize * 0.30388, moonSize * 1.57, moonSize * 0.31944, moonSize * 1.585);
            ctx.bezierCurveTo(moonSize * 0.33166, moonSize * 1.59666, moonSize * 0.35222, moonSize * 1.60277, moonSize * 0.365, moonSize * 1.61222);
            ctx.bezierCurveTo(moonSize * 0.37111, moonSize * 1.58722, moonSize * 0.35277, moonSize * 1.58555, moonSize * 0.34, moonSize * 1.56888);
            ctx.bezierCurveTo(moonSize * 0.33, moonSize * 1.55722, moonSize * 0.32611, moonSize * 1.53722, moonSize * 0.31777, moonSize * 1.52833);
            ctx.bezierCurveTo(moonSize * 0.29666, moonSize * 1.50722, moonSize * 0.25166, moonSize * 1.49888, moonSize * 0.24055, moonSize * 1.46833);
            ctx.fillStyle = 'rgb(241, 241, 241)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 0.4, moonSize * 1.56444)
            ctx.bezierCurveTo(moonSize * 0.37333, moonSize * 1.61722, moonSize * 0.55166, moonSize * 1.68611, moonSize * 0.53277, moonSize * 1.62055);
            ctx.bezierCurveTo(moonSize * 0.50111, moonSize * 1.60777, moonSize * 0.46888, moonSize * 1.61944, moonSize * 0.43777, moonSize * 1.59666);
            ctx.bezierCurveTo(moonSize * 0.41388, moonSize * 1.57888, moonSize * 0.40388, moonSize * 1.53611, moonSize * 0.37111, moonSize * 1.53888);
            ctx.bezierCurveTo(moonSize * 0.37166, moonSize * 1.55333, moonSize * 0.38222, moonSize * 1.56777, moonSize * 0.39611, moonSize * 1.57555);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 0.4, moonSize * 1.65722)
            ctx.bezierCurveTo(moonSize * 0.43277, moonSize * 1.65833, moonSize * 0.48611, moonSize * 1.715, moonSize * 0.51555, moonSize * 1.73111);
            ctx.bezierCurveTo(moonSize * 0.55055, moonSize * 1.75055, moonSize * 0.605, moonSize * 1.78555, moonSize * 0.64777, moonSize * 1.78611);
            ctx.bezierCurveTo(moonSize * 0.64444, moonSize * 1.75333, moonSize * 0.53444, moonSize * 1.72166, moonSize * 0.50333, moonSize * 1.70777);
            ctx.bezierCurveTo(moonSize * 0.46055, moonSize * 1.68944, moonSize * 0.42166, moonSize * 1.62611, moonSize * 0.37111, moonSize * 1.62444);
            ctx.bezierCurveTo(moonSize * 0.37611, moonSize * 1.63833, moonSize * 0.39, moonSize * 1.65333, moonSize * 0.4, moonSize * 1.66777);
            ctx.bezierCurveTo(moonSize * 0.40611, moonSize * 1.66888, moonSize * 0.40555, moonSize * 1.66555, moonSize * 0.41111, moonSize * 1.66444);
            ctx.fillStyle = 'rgb(238, 238, 238)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 0.63722, moonSize * 0.11277)
            ctx.bezierCurveTo(moonSize * 0.675, moonSize * 0.10666, moonSize * 0.69944, moonSize * 0.13722, moonSize * 0.73666, moonSize * 0.13444);
            ctx.bezierCurveTo(moonSize * 0.74, moonSize * 0.11611, moonSize * 0.74388, moonSize * 0.09444, moonSize * 0.76222, moonSize * 0.08611);
            ctx.bezierCurveTo(moonSize * 0.76277, moonSize * 0.08166, moonSize * 0.76222, moonSize * 0.07666, moonSize * 0.76222, moonSize * 0.07222);
            ctx.bezierCurveTo(moonSize * 0.715, moonSize * 0.06999, moonSize * 0.64666, moonSize * 0.075, moonSize * 0.615, moonSize * 0.11277);
            ctx.bezierCurveTo(moonSize * 0.62222, moonSize * 0.11722, moonSize * 0.62833, moonSize * 0.11666, moonSize * 0.63722, moonSize * 0.11611);
            ctx.fillStyle = 'rgb(223, 223, 223)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 0.585, moonSize * 0.12388)
            ctx.bezierCurveTo(moonSize * 0.52222, moonSize * 0.12722, moonSize * 0.43555, moonSize * 0.21277, moonSize * 0.38555, moonSize * 0.25111);
            ctx.bezierCurveTo(moonSize * 0.315, moonSize * 0.30555, moonSize * 0.25555, moonSize * 0.34111, moonSize * 0.22277, moonSize * 0.42222);
            ctx.bezierCurveTo(moonSize * 0.26944, moonSize * 0.39777, moonSize * 0.28333, moonSize * 0.34055, moonSize * 0.325, moonSize * 0.30777);
            ctx.bezierCurveTo(moonSize * 0.36555, moonSize * 0.27611, moonSize * 0.40444, moonSize * 0.24833, moonSize * 0.44555, moonSize * 0.22166);
            ctx.bezierCurveTo(moonSize * 0.46222, moonSize * 0.21055, moonSize * 0.47611, moonSize * 0.19833, moonSize * 0.49277, moonSize * 0.18666);
            ctx.bezierCurveTo(moonSize * 0.51222, moonSize * 0.17277, moonSize * 0.52944, moonSize * 0.15111, moonSize * 0.54777, moonSize * 0.14166);
            ctx.bezierCurveTo(moonSize * 0.56444, moonSize * 0.13388, moonSize * 0.61055, moonSize * 0.15555, moonSize * 0.61388, moonSize * 0.15277);
            ctx.bezierCurveTo(moonSize * 0.635, moonSize * 0.13611, moonSize * 0.58666, moonSize * 0.11611, moonSize * 0.57777, moonSize * 0.12);
            ctx.fillStyle = 'rgb(225, 225, 225)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 0.71111, moonSize * 0.82111)
            ctx.bezierCurveTo(moonSize * 0.69722, moonSize * 0.80444, moonSize * 0.66444, moonSize * 0.79888, moonSize * 0.65944, moonSize * 0.82833);
            ctx.bezierCurveTo(moonSize * 0.65611, moonSize * 0.84666, moonSize * 0.67388, moonSize * 0.84388, moonSize * 0.67555, moonSize * 0.85333);
            ctx.bezierCurveTo(moonSize * 0.67666, moonSize * 0.85888, moonSize * 0.67277, moonSize * 0.88555, moonSize * 0.67444, moonSize * 0.88777);
            ctx.bezierCurveTo(moonSize * 0.70388, moonSize * 0.93722, moonSize * 0.73611, moonSize * 0.85111, moonSize * 0.70777, moonSize * 0.81722);
            ctx.fillStyle = 'rgb(248, 248, 248)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 0.99611, moonSize * 0.92722)
            ctx.bezierCurveTo(moonSize * 0.99055, moonSize * 0.94055, moonSize * 1.00055, moonSize * 0.94888, moonSize * 1.01777, moonSize * 0.94555);
            ctx.bezierCurveTo(moonSize * 1.02, moonSize * 0.92722, moonSize * 1.00555, moonSize * 0.92, moonSize * 0.99277, moonSize * 0.92722);
            ctx.fillStyle = 'rgb(241, 241, 241)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.03722, moonSize * 0.88666)
            ctx.bezierCurveTo(moonSize * 1.02388, moonSize * 0.89611, moonSize * 1.03444, moonSize * 0.905, moonSize * 1.05166, moonSize * 0.90444);
            ctx.bezierCurveTo(moonSize * 1.05277, moonSize * 0.89833, moonSize * 1.05277, moonSize * 0.88944, moonSize * 1.05111, moonSize * 0.88333);
            ctx.bezierCurveTo(moonSize * 1.03944, moonSize * 0.87611, moonSize * 1.03888, moonSize * 0.88055, moonSize * 1.03333, moonSize * 0.88666);
            ctx.fillStyle = 'rgb(228, 228, 228)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.085, moonSize * 0.89777)
            ctx.bezierCurveTo(moonSize * 1.07388, moonSize * 0.91666, moonSize * 1.09888, moonSize * 0.93333, moonSize * 1.10444, moonSize * 0.95277);
            ctx.bezierCurveTo(moonSize * 1.11055, moonSize * 0.95388, moonSize * 1.11611, moonSize * 0.95388, moonSize * 1.12166, moonSize * 0.95166);
            ctx.bezierCurveTo(moonSize * 1.12611, moonSize * 0.925, moonSize * 1.11, moonSize * 0.89944, moonSize * 1.08166, moonSize * 0.90166);
            ctx.fillStyle = 'rgb(243, 243, 243)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.36666, moonSize * 0.90888)
            ctx.bezierCurveTo(moonSize * 1.35111, moonSize * 0.97722, moonSize * 1.42666, moonSize * 1.03111, moonSize * 1.39944, moonSize * 0.93722);
            ctx.bezierCurveTo(moonSize * 1.39388, moonSize * 0.935, moonSize * 1.38944, moonSize * 0.93833, moonSize * 1.38444, moonSize * 0.93555);
            ctx.bezierCurveTo(moonSize * 1.38333, moonSize * 0.92222, moonSize * 1.37666, moonSize * 0.92277, moonSize * 1.36666, moonSize * 0.92);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.41666, moonSize * 0.98666)
            ctx.bezierCurveTo(moonSize * 1.41777, moonSize * 1.005, moonSize * 1.42333, moonSize * 1.01833, moonSize * 1.44333, moonSize * 1.01888);
            ctx.bezierCurveTo(moonSize * 1.44722, moonSize * 0.99722, moonSize * 1.43666, moonSize * 1.00277, moonSize * 1.42222, moonSize * 0.99777);
            ctx.fillStyle = 'rgb(241, 239, 239)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.45944, moonSize * 0.99388)
            ctx.bezierCurveTo(moonSize * 1.45888, moonSize * 0.99555, moonSize * 1.45388, moonSize * 0.99611, moonSize * 1.45499, moonSize * 1.00166);
            ctx.bezierCurveTo(moonSize * 1.46, moonSize * 1.00555, moonSize * 1.46722, moonSize * 1.01055, moonSize * 1.47333, moonSize * 1.01222);
            ctx.bezierCurveTo(moonSize * 1.47388, moonSize * 1.00777, moonSize * 1.47166, moonSize * 0.99944, moonSize * 1.47, moonSize * 0.99444);
            ctx.bezierCurveTo(moonSize * 1.46555, moonSize * 0.99388, moonSize * 1.46, moonSize * 0.995, moonSize * 1.45555, moonSize * 0.99388);
            ctx.fillStyle = 'rgb(241, 241, 241)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.46666, moonSize * 1.03111)
            ctx.bezierCurveTo(moonSize * 1.47222, moonSize * 1.03722, moonSize * 1.48222, moonSize * 1.04333, moonSize * 1.48833, moonSize * 1.04555);
            ctx.bezierCurveTo(moonSize * 1.48833, moonSize * 1.02944, moonSize * 1.48722, moonSize * 1.02611, moonSize * 1.47111, moonSize * 1.02888);
            ctx.bezierCurveTo(moonSize * 1.47, moonSize * 1.03222, moonSize * 1.47, moonSize * 1.035, moonSize * 1.47055, moonSize * 1.03833);
            ctx.fillStyle = 'rgb(243, 243, 243)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.51111, moonSize * 1.03111)
            ctx.bezierCurveTo(moonSize * 1.49666, moonSize * 1.04166, moonSize * 1.50944, moonSize * 1.04722, moonSize * 1.52555, moonSize * 1.04888);
            ctx.bezierCurveTo(moonSize * 1.52611, moonSize * 1.03444, moonSize * 1.51777, moonSize * 1.03055, moonSize * 1.50388, moonSize * 1.03111);
            ctx.fillStyle = 'rgb(255, 255, 255)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.73722, moonSize * 1.07944)
            ctx.bezierCurveTo(moonSize * 1.72888, moonSize * 1.09333, moonSize * 1.73611, moonSize * 1.10388, moonSize * 1.755, moonSize * 1.10111);
            ctx.bezierCurveTo(moonSize * 1.75555, moonSize * 1.08833, moonSize * 1.75, moonSize * 1.07611, moonSize * 1.74166, moonSize * 1.06833);
            ctx.bezierCurveTo(moonSize * 1.74166, moonSize * 1.07111, moonSize * 1.74055, moonSize * 1.07611, moonSize * 1.74, moonSize * 1.07888);
            ctx.bezierCurveTo(moonSize * 1.73833, moonSize * 1.07888, moonSize * 1.73055, moonSize * 1.07833, moonSize * 1.72944, moonSize * 1.07944);
            ctx.fillStyle = 'rgb(231, 231, 231)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.77388, moonSize * 1.05333)
            ctx.bezierCurveTo(moonSize * 1.77, moonSize * 1.04944, moonSize * 1.77166, moonSize * 1.04222, moonSize * 1.76, moonSize * 1.04666);
            ctx.bezierCurveTo(moonSize * 1.76333, moonSize * 1.06611, moonSize * 1.76833, moonSize * 1.08388, moonSize * 1.77111, moonSize * 1.10444);
            ctx.bezierCurveTo(moonSize * 1.79833, moonSize * 1.10388, moonSize * 1.77944, moonSize * 1.06555, moonSize * 1.77388, moonSize * 1.04944);
            ctx.fillStyle = 'rgb(218, 218, 218)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.79611, moonSize * 1.07944)
            ctx.bezierCurveTo(moonSize * 1.80611, moonSize * 1.09333, moonSize * 1.79833, moonSize * 1.11555, moonSize * 1.82166, moonSize * 1.11944);
            ctx.bezierCurveTo(moonSize * 1.82388, moonSize * 1.10444, moonSize * 1.81666, moonSize * 1.09333, moonSize * 1.80388, moonSize * 1.08666);
            ctx.fillStyle = 'rgb(243, 243, 243)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.72222, moonSize * 1.29388)
            ctx.bezierCurveTo(moonSize * 1.73333, moonSize * 1.31, moonSize * 1.73277, moonSize * 1.34055, moonSize * 1.70444, moonSize * 1.33777);
            ctx.bezierCurveTo(moonSize * 1.69944, moonSize * 1.31777, moonSize * 1.71611, moonSize * 1.30333, moonSize * 1.72222, moonSize * 1.28666);
            ctx.fillStyle = 'rgb(225, 223, 223)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.69277, moonSize * 1.31277)
            ctx.bezierCurveTo(moonSize * 1.69055, moonSize * 1.32444, moonSize * 1.68722, moonSize * 1.33388, moonSize * 1.68444, moonSize * 1.34555);
            ctx.bezierCurveTo(moonSize * 1.67833, moonSize * 1.34666, moonSize * 1.66944, moonSize * 1.34722, moonSize * 1.66333, moonSize * 1.345);
            ctx.bezierCurveTo(moonSize * 1.67222, moonSize * 1.33111, moonSize * 1.68166, moonSize * 1.31611, moonSize * 1.69611, moonSize * 1.31277);
            ctx.fillStyle = 'rgb(241, 241, 241)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.83722, moonSize * 0.88666)
            ctx.bezierCurveTo(moonSize * 1.84722, moonSize * 0.86944, moonSize * 1.86388, moonSize * 0.85166, moonSize * 1.87388, moonSize * 0.83444);
            ctx.bezierCurveTo(moonSize * 1.89555, moonSize * 0.865, moonSize * 1.87944, moonSize * 0.895, moonSize * 1.84055, moonSize * 0.89388);
            ctx.fillStyle = 'rgb(220, 220, 220)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.83722, moonSize * 0.94611)
            ctx.bezierCurveTo(moonSize * 1.83722, moonSize * 0.96, moonSize * 1.815, moonSize * 1.01611, moonSize * 1.84833, moonSize * 1.00833);
            ctx.bezierCurveTo(moonSize * 1.85944, moonSize * 1.00555, moonSize * 1.87222, moonSize * 0.95055, moonSize * 1.87, moonSize * 0.93888);
            ctx.bezierCurveTo(moonSize * 1.85777, moonSize * 0.93944, moonSize * 1.84666, moonSize * 0.94444, moonSize * 1.83722, moonSize * 0.95333);
            ctx.fillStyle = 'rgb(208, 208, 208)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.76277, moonSize * 0.65722)
            ctx.bezierCurveTo(moonSize * 1.72666, moonSize * 0.67166, moonSize * 1.66833, moonSize * 0.67166, moonSize * 1.63333, moonSize * 0.65333);
            ctx.bezierCurveTo(moonSize * 1.60666, moonSize * 0.64, moonSize * 1.62277, moonSize * 0.61611, moonSize * 1.60444, moonSize * 0.60055);
            ctx.bezierCurveTo(moonSize * 1.57944, moonSize * 0.57888, moonSize * 1.56555, moonSize * 0.60444, moonSize * 1.55888, moonSize * 0.62666);
            ctx.bezierCurveTo(moonSize * 1.52277, moonSize * 0.62888, moonSize * 1.50888, moonSize * 0.58277, moonSize * 1.48888, moonSize * 0.56055);
            ctx.bezierCurveTo(moonSize * 1.47, moonSize * 0.54055, moonSize * 1.41, moonSize * 0.52944, moonSize * 1.40277, moonSize * 0.50555);
            ctx.bezierCurveTo(moonSize * 1.38555, moonSize * 0.51, moonSize * 1.37222, moonSize * 0.52333, moonSize * 1.35166, moonSize * 0.52);
            ctx.bezierCurveTo(moonSize * 1.33166, moonSize * 0.51722, moonSize * 1.30666, moonSize * 0.49722, moonSize * 1.28277, moonSize * 0.49388);
            ctx.bezierCurveTo(moonSize * 1.295, moonSize * 0.50055, moonSize * 1.305, moonSize * 0.51055, moonSize * 1.31055, moonSize * 0.52277);
            ctx.bezierCurveTo(moonSize * 1.30666, moonSize * 0.52277, moonSize * 1.30166, moonSize * 0.52388, moonSize * 1.29722, moonSize * 0.52388);
            ctx.bezierCurveTo(moonSize * 1.33888, moonSize * 0.54333, moonSize * 1.38444, moonSize * 0.53611, moonSize * 1.42555, moonSize * 0.54611);
            ctx.bezierCurveTo(moonSize * 1.48277, moonSize * 0.55999, moonSize * 1.485, moonSize * 0.59722, moonSize * 1.525, moonSize * 0.63277);
            ctx.bezierCurveTo(moonSize * 1.54611, moonSize * 0.65166, moonSize * 1.56222, moonSize * 0.63777, moonSize * 1.58833, moonSize * 0.64666);
            ctx.bezierCurveTo(moonSize * 1.59555, moonSize * 0.64888, moonSize * 1.60722, moonSize * 0.66333, moonSize * 1.61833, moonSize * 0.66833);
            ctx.bezierCurveTo(moonSize * 1.63111, moonSize * 0.67333, moonSize * 1.64555, moonSize * 0.67333, moonSize * 1.65833, moonSize * 0.67611);
            ctx.bezierCurveTo(moonSize * 1.67055, moonSize * 0.67944, moonSize * 1.81722, moonSize * 0.70444, moonSize * 1.75944, moonSize * 0.66444);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.585, moonSize * 0.61611)
            ctx.bezierCurveTo(moonSize * 1.58166, moonSize * 0.61555, moonSize * 1.57833, moonSize * 0.61666, moonSize * 1.57444, moonSize * 0.61555);
            ctx.bezierCurveTo(moonSize * 1.58333, moonSize * 0.60888, moonSize * 1.59666, moonSize * 0.59722, moonSize * 1.59666, moonSize * 0.58333);
            ctx.bezierCurveTo(moonSize * 1.60944, moonSize * 0.58722, moonSize * 1.615, moonSize * 0.59444, moonSize * 1.62277, moonSize * 0.605);
            ctx.bezierCurveTo(moonSize * 1.60944, moonSize * 0.615, moonSize * 1.59777, moonSize * 0.62555, moonSize * 1.58166, moonSize * 0.62);
            ctx.fillStyle = 'rgb(246, 246, 246)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.32777, moonSize * 1.09222)
            ctx.bezierCurveTo(moonSize * 1.32722, moonSize * 1.11555, moonSize * 1.335, moonSize * 1.12555, moonSize * 1.36, moonSize * 1.11888);
            ctx.bezierCurveTo(moonSize * 1.36222, moonSize * 1.09944, moonSize * 1.36, moonSize * 1.09222, moonSize * 1.34444, moonSize * 1.08);
            ctx.bezierCurveTo(moonSize * 1.34, moonSize * 1.08611, moonSize * 1.33611, moonSize * 1.09444, moonSize * 1.33333, moonSize * 1.10333);
            ctx.fillStyle = 'rgb(233, 231, 231)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.32777, moonSize * 1.15888)
            ctx.bezierCurveTo(moonSize * 1.33555, moonSize * 1.15611, moonSize * 1.34166, moonSize * 1.15944, moonSize * 1.34888, moonSize * 1.15388);
            ctx.bezierCurveTo(moonSize * 1.35555, moonSize * 1.16555, moonSize * 1.35722, moonSize * 1.17777, moonSize * 1.35444, moonSize * 1.19111);
            ctx.bezierCurveTo(moonSize * 1.34666, moonSize * 1.19388, moonSize * 1.33666, moonSize * 1.19277, moonSize * 1.32888, moonSize * 1.19111);
            ctx.bezierCurveTo(moonSize * 1.32722, moonSize * 1.18444, moonSize * 1.32833, moonSize * 1.17722, moonSize * 1.32777, moonSize * 1.17);
            ctx.fillStyle = 'rgb(241, 241, 241)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.37222, moonSize * 1.13111)
            ctx.bezierCurveTo(moonSize * 1.37388, moonSize * 1.12666, moonSize * 1.37166, moonSize * 1.11999, moonSize * 1.37333, moonSize * 1.115);
            ctx.bezierCurveTo(moonSize * 1.38, moonSize * 1.11444, moonSize * 1.38666, moonSize * 1.11277, moonSize * 1.39333, moonSize * 1.115);
            ctx.bezierCurveTo(moonSize * 1.39666, moonSize * 1.12555, moonSize * 1.39666, moonSize * 1.14777, moonSize * 1.39333, moonSize * 1.15777);
            ctx.bezierCurveTo(moonSize * 1.36666, moonSize * 1.15833, moonSize * 1.36111, moonSize * 1.14555, moonSize * 1.37777, moonSize * 1.12555);
            ctx.fillStyle = 'rgb(233, 233, 233)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 0.22222, moonSize * 0.67555)
            ctx.bezierCurveTo(moonSize * 0.26833, moonSize * 0.69388, moonSize * 0.25555, moonSize * 0.77111, moonSize * 0.19555, moonSize * 0.75944);
            ctx.bezierCurveTo(moonSize * 0.19888, moonSize * 0.78888, moonSize * 0.24444, moonSize * 0.79111, moonSize * 0.26555, moonSize * 0.81555);
            ctx.bezierCurveTo(moonSize * 0.28722, moonSize * 0.84166, moonSize * 0.29611, moonSize * 0.87, moonSize * 0.31555, moonSize * 0.89777);
            ctx.bezierCurveTo(moonSize * 0.33111, moonSize * 0.92, moonSize * 0.365, moonSize * 0.95333, moonSize * 0.36666, moonSize * 0.98055);
            ctx.bezierCurveTo(moonSize * 0.36888, moonSize * 1.00388, moonSize * 0.32, moonSize * 1.065, moonSize * 0.38277, moonSize * 1.05277);
            ctx.bezierCurveTo(moonSize * 0.38555, moonSize * 1.035, moonSize * 0.39444, moonSize * 1.02111, moonSize * 0.40111, moonSize * 1.00444);
            ctx.bezierCurveTo(moonSize * 0.41555, moonSize * 1.00666, moonSize * 0.43444, moonSize * 1.0, moonSize * 0.44888, moonSize * 1.00222);
            ctx.bezierCurveTo(moonSize * 0.45055, moonSize * 0.99388, moonSize * 0.45111, moonSize * 0.985, moonSize * 0.44888, moonSize * 0.97666);
            ctx.bezierCurveTo(moonSize * 0.39499, moonSize * 0.96888, moonSize * 0.305, moonSize * 0.86388, moonSize * 0.28777, moonSize * 0.81555);
            ctx.bezierCurveTo(moonSize * 0.28055, moonSize * 0.79555, moonSize * 0.27388, moonSize * 0.77111, moonSize * 0.27777, moonSize * 0.74722);
            ctx.bezierCurveTo(moonSize * 0.28055, moonSize * 0.72833, moonSize * 0.30777, moonSize * 0.71777, moonSize * 0.29944, moonSize * 0.69333);
            ctx.bezierCurveTo(moonSize * 0.28944, moonSize * 0.665, moonSize * 0.20777, moonSize * 0.64555, moonSize * 0.18833, moonSize * 0.62166);
            ctx.bezierCurveTo(moonSize * 0.18666, moonSize * 0.63, moonSize * 0.18833, moonSize * 0.64444, moonSize * 0.19, moonSize * 0.65222);
            ctx.bezierCurveTo(moonSize * 0.20222, moonSize * 0.65722, moonSize * 0.215, moonSize * 0.66722, moonSize * 0.22777, moonSize * 0.67);
            ctx.fillStyle = 'rgb(108, 108, 108)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 0.69444, moonSize * 1.58111)
            ctx.bezierCurveTo(moonSize * 0.735, moonSize * 1.60388, moonSize * 0.76, moonSize * 1.65166, moonSize * 0.81, moonSize * 1.64666);
            ctx.bezierCurveTo(moonSize * 0.81166, moonSize * 1.60722, moonSize * 0.705, moonSize * 1.55333, moonSize * 0.66722, moonSize * 1.56);
            ctx.bezierCurveTo(moonSize * 0.67722, moonSize * 1.56722, moonSize * 0.67833, moonSize * 1.57166, moonSize * 0.69388, moonSize * 1.57666);
            ctx.bezierCurveTo(moonSize * 0.69388, moonSize * 1.58222, moonSize * 0.69555, moonSize * 1.58833, moonSize * 0.7, moonSize * 1.59222);
            ctx.fillStyle = 'rgb(118, 118, 118)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 0.76666, moonSize * 1.70333)
            ctx.bezierCurveTo(moonSize * 0.81277, moonSize * 1.77944, moonSize * 0.86666, moonSize * 1.82666, moonSize * 0.955, moonSize * 1.84111);
            ctx.bezierCurveTo(moonSize * 0.93888, moonSize * 1.79833, moonSize * 0.88777, moonSize * 1.79111, moonSize * 0.85166, moonSize * 1.76833);
            ctx.bezierCurveTo(moonSize * 0.82777, moonSize * 1.75333, moonSize * 0.78166, moonSize * 1.68555, moonSize * 0.76666, moonSize * 1.70888);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 0.74833, moonSize * 1.77944)
            ctx.bezierCurveTo(moonSize * 0.72055, moonSize * 1.77722, moonSize * 0.675, moonSize * 1.72277, moonSize * 0.66611, moonSize * 1.69722);
            ctx.bezierCurveTo(moonSize * 0.69888, moonSize * 1.68166, moonSize * 0.69611, moonSize * 1.71777, moonSize * 0.71, moonSize * 1.73222);
            ctx.bezierCurveTo(moonSize * 0.72777, moonSize * 1.75, moonSize * 0.75944, moonSize * 1.745, moonSize * 0.75888, moonSize * 1.77888);
            ctx.bezierCurveTo(moonSize * 0.75166, moonSize * 1.77833, moonSize * 0.74666, moonSize * 1.78277, moonSize * 0.74055, moonSize * 1.78277);
            ctx.fillStyle = 'rgb(126, 126, 126)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 0.91499, moonSize * 0.19055)
            ctx.bezierCurveTo(moonSize * 0.95277, moonSize * 0.16333, moonSize * 0.97666, moonSize * 0.15222, moonSize * 1.02222, moonSize * 0.13944);
            ctx.bezierCurveTo(moonSize * 1.04611, moonSize * 0.13277, moonSize * 1.10833, moonSize * 0.10833, moonSize * 1.11444, moonSize * 0.14888);
            ctx.bezierCurveTo(moonSize * 1.09388, moonSize * 0.16722, moonSize * 1.05722, moonSize * 0.19777, moonSize * 1.03333, moonSize * 0.20166);
            ctx.bezierCurveTo(moonSize * 1.01222, moonSize * 0.20444, moonSize * 0.99111, moonSize * 0.19277, moonSize * 0.97, moonSize * 0.19055);
            ctx.bezierCurveTo(moonSize * 0.95111, moonSize * 0.18888, moonSize * 0.935, moonSize * 0.19, moonSize * 0.91499, moonSize * 0.19055);
            ctx.fillStyle = 'rgb(136, 136, 136)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.07777, moonSize * 0.39777)
            ctx.bezierCurveTo(moonSize * 1.06222, moonSize * 0.39333, moonSize * 1.03555, moonSize * 0.36944, moonSize * 1.02222, moonSize * 0.36055);
            ctx.bezierCurveTo(moonSize * 1.00833, moonSize * 0.35166, moonSize * 0.98833, moonSize * 0.33555, moonSize * 0.97111, moonSize * 0.33);
            ctx.bezierCurveTo(moonSize * 0.99777, moonSize * 0.30833, moonSize * 1.05055, moonSize * 0.33944, moonSize * 1.08555, moonSize * 0.32722);
            ctx.bezierCurveTo(moonSize * 1.10555, moonSize * 0.32055, moonSize * 1.11888, moonSize * 0.31166, moonSize * 1.13999, moonSize * 0.30944);
            ctx.bezierCurveTo(moonSize * 1.14777, moonSize * 0.30888, moonSize * 1.15944, moonSize * 0.31833, moonSize * 1.17055, moonSize * 0.31666);
            ctx.bezierCurveTo(moonSize * 1.18111, moonSize * 0.31444, moonSize * 1.18277, moonSize * 0.29666, moonSize * 1.19611, moonSize * 0.29777);
            ctx.bezierCurveTo(moonSize * 1.21611, moonSize * 0.29888, moonSize * 1.22444, moonSize * 0.32222, moonSize * 1.24, moonSize * 0.33444);
            ctx.bezierCurveTo(moonSize * 1.25111, moonSize * 0.34333, moonSize * 1.24222, moonSize * 0.34333, moonSize * 1.25944, moonSize * 0.34944);
            ctx.bezierCurveTo(moonSize * 1.26777, moonSize * 0.35277, moonSize * 1.28555, moonSize * 0.34777, moonSize * 1.29277, moonSize * 0.35333);
            ctx.bezierCurveTo(moonSize * 1.32777, moonSize * 0.37944, moonSize * 1.27833, moonSize * 0.37333, moonSize * 1.27055, moonSize * 0.38277);
            ctx.bezierCurveTo(moonSize * 1.255, moonSize * 0.40111, moonSize * 1.27, moonSize * 0.40222, moonSize * 1.28111, moonSize * 0.42277);
            ctx.bezierCurveTo(moonSize * 1.25777, moonSize * 0.42666, moonSize * 1.24611, moonSize * 0.41777, moonSize * 1.22666, moonSize * 0.41166);
            ctx.bezierCurveTo(moonSize * 1.20555, moonSize * 0.405, moonSize * 1.19666, moonSize * 0.40888, moonSize * 1.17888, moonSize * 0.41);
            ctx.bezierCurveTo(moonSize * 1.13999, moonSize * 0.41166, moonSize * 1.11277, moonSize * 0.39444, moonSize * 1.07055, moonSize * 0.39388);
            ctx.fillStyle = 'rgb(141, 141, 141)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 0.14444, moonSize * 1.34611)
            ctx.bezierCurveTo(moonSize * 0.16833, moonSize * 1.34888, moonSize * 0.21888, moonSize * 1.35555, moonSize * 0.21444, moonSize * 1.39);
            ctx.bezierCurveTo(moonSize * 0.19277, moonSize * 1.38666, moonSize * 0.18777, moonSize * 1.40444, moonSize * 0.19166, moonSize * 1.42333);
            ctx.bezierCurveTo(moonSize * 0.17166, moonSize * 1.40277, moonSize * 0.15166, moonSize * 1.37333, moonSize * 0.14055, moonSize * 1.34611);
            ctx.fillStyle = 'rgb(123, 123, 123)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 0.45166, moonSize * 0.40888)
            ctx.bezierCurveTo(moonSize * 0.45, moonSize * 0.35166, moonSize * 0.53333, moonSize * 0.32, moonSize * 0.57388, moonSize * 0.31222);
            ctx.bezierCurveTo(moonSize * 0.62611, moonSize * 0.30166, moonSize * 0.67166, moonSize * 0.33666, moonSize * 0.71222, moonSize * 0.36333);
            ctx.bezierCurveTo(moonSize * 0.72555, moonSize * 0.37222, moonSize * 0.73333, moonSize * 0.38333, moonSize * 0.74833, moonSize * 0.38944);
            ctx.bezierCurveTo(moonSize * 0.75277, moonSize * 0.39111, moonSize * 0.78777, moonSize * 0.39777, moonSize * 0.78833, moonSize * 0.39833);
            ctx.bezierCurveTo(moonSize * 0.80777, moonSize * 0.42666, moonSize * 0.74333, moonSize * 0.42777, moonSize * 0.73055, moonSize * 0.43944);
            ctx.bezierCurveTo(moonSize * 0.68166, moonSize * 0.48333, moonSize * 0.82666, moonSize * 0.47222, moonSize * 0.82166, moonSize * 0.51555);
            ctx.bezierCurveTo(moonSize * 0.73222, moonSize * 0.51944, moonSize * 0.67055, moonSize * 0.47388, moonSize * 0.62666, moonSize * 0.40444);
            ctx.bezierCurveTo(moonSize * 0.60555, moonSize * 0.37, moonSize * 0.58944, moonSize * 0.32444, moonSize * 0.53777, moonSize * 0.34666);
            ctx.bezierCurveTo(moonSize * 0.51611, moonSize * 0.35611, moonSize * 0.46444, moonSize * 0.39333, moonSize * 0.45166, moonSize * 0.41277);
            ctx.fillStyle = 'rgb(131, 131, 131)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 0.19611, moonSize * 1.34611)
            ctx.bezierCurveTo(moonSize * 0.22444, moonSize * 1.365, moonSize * 0.26555, moonSize * 1.42444, moonSize * 0.29555, moonSize * 1.42666);
            ctx.bezierCurveTo(moonSize * 0.29722, moonSize * 1.41222, moonSize * 0.28833, moonSize * 1.39944, moonSize * 0.27722, moonSize * 1.39055);
            ctx.bezierCurveTo(moonSize * 0.28777, moonSize * 1.38055, moonSize * 0.29166, moonSize * 1.36444, moonSize * 0.28944, moonSize * 1.35);
            ctx.bezierCurveTo(moonSize * 0.32555, moonSize * 1.34777, moonSize * 0.32055, moonSize * 1.41111, moonSize * 0.34, moonSize * 1.43055);
            ctx.bezierCurveTo(moonSize * 0.33777, moonSize * 1.39777, moonSize * 0.33944, moonSize * 1.35111, moonSize * 0.30055, moonSize * 1.33888);
            ctx.bezierCurveTo(moonSize * 0.27888, moonSize * 1.33166, moonSize * 0.22833, moonSize * 1.34611, moonSize * 0.19277, moonSize * 1.34611);
            ctx.fillStyle = 'rgb(121, 120, 120)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.20722, moonSize * 0.13111)
            ctx.bezierCurveTo(moonSize * 1.25222, moonSize * 0.15166, moonSize * 1.31055, moonSize * 0.16666, moonSize * 1.35888, moonSize * 0.16388);
            ctx.bezierCurveTo(moonSize * 1.35611, moonSize * 0.16166, moonSize * 1.35111, moonSize * 0.15611, moonSize * 1.34833, moonSize * 0.15388);
            ctx.bezierCurveTo(moonSize * 1.38444, moonSize * 0.15166, moonSize * 1.40333, moonSize * 0.16888, moonSize * 1.43333, moonSize * 0.18666);
            ctx.bezierCurveTo(moonSize * 1.46, moonSize * 0.20222, moonSize * 1.50277, moonSize * 0.21388, moonSize * 1.52611, moonSize * 0.23111);
            ctx.bezierCurveTo(moonSize * 1.51388, moonSize * 0.245, moonSize * 1.45388, moonSize * 0.22833, moonSize * 1.43333, moonSize * 0.22111);
            ctx.bezierCurveTo(moonSize * 1.39222, moonSize * 0.20666, moonSize * 1.38555, moonSize * 0.18222, moonSize * 1.34055, moonSize * 0.18666);
            ctx.bezierCurveTo(moonSize * 1.27499, moonSize * 0.19222, moonSize * 1.20777, moonSize * 0.16333, moonSize * 1.15944, moonSize * 0.12055);
            ctx.bezierCurveTo(moonSize * 1.18111, moonSize * 0.12166, moonSize * 1.19055, moonSize * 0.14333, moonSize * 1.21499, moonSize * 0.13833);
            ctx.fillStyle = 'rgb(129, 129, 129)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.37055, moonSize * 1.07555)
            ctx.bezierCurveTo(moonSize * 1.48611, moonSize * 1.13333, moonSize * 1.35833, moonSize * 1.20833, moonSize * 1.345, moonSize * 1.28611);
            ctx.bezierCurveTo(moonSize * 1.37666, moonSize * 1.28777, moonSize * 1.40944, moonSize * 1.20611, moonSize * 1.42222, moonSize * 1.18277);
            ctx.bezierCurveTo(moonSize * 1.44111, moonSize * 1.14666, moonSize * 1.45111, moonSize * 1.10222, moonSize * 1.46888, moonSize * 1.06444);
            ctx.bezierCurveTo(moonSize * 1.42944, moonSize * 1.05166, moonSize * 1.39, moonSize * 1.08277, moonSize * 1.35555, moonSize * 1.06833);
            ctx.fillStyle = 'rgb(136, 136, 136)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.44833, moonSize * 1.04944)
            ctx.bezierCurveTo(moonSize * 1.42055, moonSize * 1.04666, moonSize * 1.39055, moonSize * 1.05333, moonSize * 1.36277, moonSize * 1.05722);
            ctx.bezierCurveTo(moonSize * 1.32166, moonSize * 1.06222, moonSize * 1.33222, moonSize * 1.07722, moonSize * 1.30277, moonSize * 1.09666);
            ctx.bezierCurveTo(moonSize * 1.28, moonSize * 1.11222, moonSize * 1.24444, moonSize * 1.10444, moonSize * 1.21888, moonSize * 1.11888);
            ctx.bezierCurveTo(moonSize * 1.18722, moonSize * 1.13611, moonSize * 1.16944, moonSize * 1.16444, moonSize * 1.13055, moonSize * 1.165);
            ctx.bezierCurveTo(moonSize * 1.12944, moonSize * 1.19055, moonSize * 1.115, moonSize * 1.20277, moonSize * 1.09333, moonSize * 1.20833);
            ctx.bezierCurveTo(moonSize * 1.08555, moonSize * 1.17833, moonSize * 1.12888, moonSize * 1.15555, moonSize * 1.10777, moonSize * 1.13444);
            ctx.bezierCurveTo(moonSize * 1.08999, moonSize * 1.11722, moonSize * 1.055, moonSize * 1.14111, moonSize * 1.05222, moonSize * 1.09833);
            ctx.bezierCurveTo(moonSize * 1.07444, moonSize * 1.09833, moonSize * 1.09555, moonSize * 1.09333, moonSize * 1.115, moonSize * 1.08611);
            ctx.bezierCurveTo(moonSize * 1.12722, moonSize * 1.09722, moonSize * 1.14166, moonSize * 1.095, moonSize * 1.155, moonSize * 1.085);
            ctx.bezierCurveTo(moonSize * 1.17166, moonSize * 1.04222, moonSize * 1.16166, moonSize * 1.04, moonSize * 1.15222, moonSize * 0.99833);
            ctx.bezierCurveTo(moonSize * 1.17388, moonSize * 1.00833, moonSize * 1.18666, moonSize * 1.06388, moonSize * 1.20833, moonSize * 1.06722);
            ctx.bezierCurveTo(moonSize * 1.235, moonSize * 1.07222, moonSize * 1.24166, moonSize * 1.01722, moonSize * 1.27388, moonSize * 1.01611);
            ctx.bezierCurveTo(moonSize * 1.28833, moonSize * 1.01611, moonSize * 1.3, moonSize * 1.03055, moonSize * 1.315, moonSize * 1.03111);
            ctx.bezierCurveTo(moonSize * 1.34, moonSize * 1.03166, moonSize * 1.34111, moonSize * 1.01055, moonSize * 1.35944, moonSize * 1.00888);
            ctx.bezierCurveTo(moonSize * 1.38777, moonSize * 1.00555, moonSize * 1.41222, moonSize * 1.04444, moonSize * 1.44055, moonSize * 1.04944);
            ctx.fillStyle = 'rgb(146, 146, 146)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.64833, moonSize * 0.42388)
            ctx.bezierCurveTo(moonSize * 1.63444, moonSize * 0.41555, moonSize * 1.62055, moonSize * 0.39444, moonSize * 1.61722, moonSize * 0.37611);
            ctx.bezierCurveTo(moonSize * 1.61055, moonSize * 0.37388, moonSize * 1.59611, moonSize * 0.37388, moonSize * 1.58944, moonSize * 0.37611);
            ctx.bezierCurveTo(moonSize * 1.58888, moonSize * 0.405, moonSize * 1.47222, moonSize * 0.39722, moonSize * 1.53666, moonSize * 0.43388);
            ctx.bezierCurveTo(moonSize * 1.51277, moonSize * 0.44555, moonSize * 1.49444, moonSize * 0.48333, moonSize * 1.47055, moonSize * 0.48388);
            ctx.bezierCurveTo(moonSize * 1.47555, moonSize * 0.49388, moonSize * 1.47444, moonSize * 0.49611, moonSize * 1.48444, moonSize * 0.50222);
            ctx.bezierCurveTo(moonSize * 1.485, moonSize * 0.51277, moonSize * 1.49111, moonSize * 0.52055, moonSize * 1.49333, moonSize * 0.53055);
            ctx.bezierCurveTo(moonSize * 1.50833, moonSize * 0.53277, moonSize * 1.53944, moonSize * 0.53388, moonSize * 1.55111, moonSize * 0.52277);
            ctx.bezierCurveTo(moonSize * 1.56722, moonSize * 0.50722, moonSize * 1.55333, moonSize * 0.48777, moonSize * 1.56, moonSize * 0.46888);
            ctx.bezierCurveTo(moonSize * 1.57222, moonSize * 0.43444, moonSize * 1.61388, moonSize * 0.42777, moonSize * 1.64444, moonSize * 0.42388);
            ctx.fillStyle = 'rgb(149, 149, 149)';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(moonSize * 1.915, moonSize * 1.07555)
            ctx.bezierCurveTo(moonSize * 1.90111, moonSize * 1.07833, moonSize * 1.89, moonSize * 1.07444, moonSize * 1.88166, moonSize * 1.06388);
            ctx.bezierCurveTo(moonSize * 1.85611, moonSize * 1.08333, moonSize * 1.86944, moonSize * 1.12055, moonSize * 1.845, moonSize * 1.13944);
            ctx.bezierCurveTo(moonSize * 1.83111, moonSize * 1.14999, moonSize * 1.79833, moonSize * 1.16555, moonSize * 1.77833, moonSize * 1.16888);
            ctx.bezierCurveTo(moonSize * 1.76333, moonSize * 1.21833, moonSize * 1.69444, moonSize * 1.16944, moonSize * 1.71166, moonSize * 1.24555);
            ctx.bezierCurveTo(moonSize * 1.74055, moonSize * 1.24722, moonSize * 1.76555, moonSize * 1.19722, moonSize * 1.8, moonSize * 1.20888);
            ctx.bezierCurveTo(moonSize * 1.83111, moonSize * 1.21888, moonSize * 1.81055, moonSize * 1.26611, moonSize * 1.84388, moonSize * 1.27499);
            ctx.bezierCurveTo(moonSize * 1.85055, moonSize * 1.26055, moonSize * 1.86555, moonSize * 1.255, moonSize * 1.88111, moonSize * 1.25388);
            ctx.bezierCurveTo(moonSize * 1.88777, moonSize * 1.27111, moonSize * 1.89166, moonSize * 1.315, moonSize * 1.88055, moonSize * 1.33);
            ctx.bezierCurveTo(moonSize * 1.86555, moonSize * 1.35111, moonSize * 1.83722, moonSize * 1.34611, moonSize * 1.81888, moonSize * 1.36166);
            ctx.bezierCurveTo(moonSize * 1.78166, moonSize * 1.39277, moonSize * 1.75666, moonSize * 1.44777, moonSize * 1.73777, moonSize * 1.49);
            ctx.bezierCurveTo(moonSize * 1.77444, moonSize * 1.45833, moonSize * 1.82111, moonSize * 1.46055, moonSize * 1.84888, moonSize * 1.42111);
            ctx.bezierCurveTo(moonSize * 1.86111, moonSize * 1.40388, moonSize * 1.87833, moonSize * 1.38555, moonSize * 1.885, moonSize * 1.36444);
            ctx.bezierCurveTo(moonSize * 1.89222, moonSize * 1.34222, moonSize * 1.88944, moonSize * 1.31944, moonSize * 1.89722, moonSize * 1.29833);
            ctx.bezierCurveTo(moonSize * 1.91444, moonSize * 1.25, moonSize * 1.93833, moonSize * 1.21444, moonSize * 1.94055, moonSize * 1.16444);
            ctx.bezierCurveTo(moonSize * 1.94166, moonSize * 1.14611, moonSize * 1.95, moonSize * 1.11444, moonSize * 1.94444, moonSize * 1.09777);
            ctx.bezierCurveTo(moonSize * 1.93722, moonSize * 1.075, moonSize * 1.90833, moonSize * 1.07666, moonSize * 1.91055, moonSize * 1.04611);
            ctx.bezierCurveTo(moonSize * 1.90333, moonSize * 1.055, moonSize * 1.90222, moonSize * 1.06666, moonSize * 1.90388, moonSize * 1.07944);
            ctx.fillStyle = 'rgb(90, 90, 90)';
            ctx.fill();
            ctx.restore();

            // Overlay
            ctx.save();
            ctx.globalAlpha = alpha * 0.70;
            ctx.beginPath();
            ctx.moveTo(moonSize * 1.97590, moonSize * 1.00166)
            ctx.bezierCurveTo(moonSize * 1.97790, moonSize * 1.55444, moonSize * 1.51555, moonSize * 2.00277, moonSize * 0.97666, moonSize * 2.00277);
            ctx.bezierCurveTo(moonSize * 0.43722, moonSize * 2.00277, moonSize * 0.0, moonSize * 1.55444, moonSize * 0.0, moonSize * 1.00166);
            ctx.bezierCurveTo(moonSize * 0.0, moonSize * 0.59055, moonSize * 0.25888, moonSize * 0.19388, moonSize * 0.64111, moonSize * 0.05888);
            ctx.bezierCurveTo(moonSize * 0.745, moonSize * 0.02277, moonSize * 0.86666, moonSize * 0.0, moonSize * 0.97666, moonSize * 0.0);
            ctx.bezierCurveTo(moonSize * 1.51555, moonSize * 0.0, moonSize * 1.97790, moonSize * 0.44833, moonSize * 1.97790, moonSize * 1.00166);
            ctx.closePath();
            gradient = ctx.createLinearGradient(moonSize * 0.27611, moonSize * 0.30111, moonSize * 1.67611, moonSize * 1.70111);
            gradient.addColorStop(0.00, cfg.tint);
            gradient.addColorStop(1.00, 'rgb(0, 0, 0)');
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.restore();
            ctx.translate(cfg.xPos * -1, cfg.yPos * -1);
        };
    };
};

Atmosphere.Cloud = function (context, x, y, ratio, tint) {
    'use strict';

    return new function () {

        this.draw = function () {
            this.settings = {
                context: context,
                xPos: x || 0,
                yPos: y || 0,
                sizeRatio: ratio || 1.0,
                tint: tint || '#999'
            };

            var cfg = this.settings;
            var ctx = cfg.context;

            var cloudSize = 120;

            ctx.scale(cfg.sizeRatio, cfg.sizeRatio);
            var transX = cfg.xPos + (cloudSize * -1.38889),
                transY = cfg.yPos + (cloudSize * -0.80556);
            ctx.translate(transX, transY);
            ctx.save();

            var alpha = ctx.globalAlpha;
            var gradient;

            // Cloud
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(cloudSize * 3.01333, cloudSize * 1.39166);
            ctx.bezierCurveTo(cloudSize * 2.94222, cloudSize * 1.30222, cloudSize * 2.82166, cloudSize * 1.28333, cloudSize * 2.82166, cloudSize * 1.28333);
            ctx.bezierCurveTo(cloudSize * 2.83444, cloudSize * 1.21722, cloudSize * 2.79388, cloudSize * 0.925, cloudSize * 2.52166, cloudSize * 0.85555);
            ctx.bezierCurveTo(cloudSize * 2.20333, cloudSize * 0.77444, cloudSize * 2.03277, cloudSize * 1.09166, cloudSize * 2.03277, cloudSize * 1.09166);
            ctx.bezierCurveTo(cloudSize * 2.03277, cloudSize * 1.09166, cloudSize * 1.91166, cloudSize * 0.97833, cloudSize * 1.77999, cloudSize * 1.07222);
            ctx.bezierCurveTo(cloudSize * 1.66333, cloudSize * 1.15555, cloudSize * 1.69388, cloudSize * 1.26944, cloudSize * 1.69388, cloudSize * 1.26944);
            ctx.bezierCurveTo(cloudSize * 1.69388, cloudSize * 1.26944, cloudSize * 1.41888, cloudSize * 1.34444, cloudSize * 1.41888, cloudSize * 1.59166);
            ctx.bezierCurveTo(cloudSize * 1.41888, cloudSize * 1.88888, cloudSize * 1.69388, cloudSize * 1.90277, cloudSize * 1.69388, cloudSize * 1.90277);
            ctx.lineTo(cloudSize * 2.80222, cloudSize * 1.90277);
            ctx.bezierCurveTo(cloudSize * 2.80222, cloudSize * 1.90277, cloudSize * 2.92777, cloudSize * 1.885, cloudSize * 3.01722, cloudSize * 1.78777);
            ctx.bezierCurveTo(cloudSize * 3.10777, cloudSize * 1.68888, cloudSize * 3.08833, cloudSize * 1.59166, cloudSize * 3.08833, cloudSize * 1.59166);
            ctx.bezierCurveTo(cloudSize * 3.08833, cloudSize * 1.59166, cloudSize * 3.10222, cloudSize * 1.50277, cloudSize * 3.01333, cloudSize * 1.39166);
            ctx.closePath();
            ctx.fillStyle = '#fff';
            ctx.fill();
            ctx.restore();

            // Base shadow
            ctx.save();
            ctx.globalAlpha = alpha * 0.20;
            ctx.beginPath();
            ctx.moveTo(cloudSize * 2.99222, cloudSize * 1.38833);
            ctx.bezierCurveTo(cloudSize * 2.92277, cloudSize * 1.30111, cloudSize * 2.805, cloudSize * 1.28222, cloudSize * 2.805, cloudSize * 1.28222);
            ctx.bezierCurveTo(cloudSize * 2.81722, cloudSize * 1.21777, cloudSize * 2.77777, cloudSize * 0.93222, cloudSize * 2.51166, cloudSize * 0.86388);
            ctx.bezierCurveTo(cloudSize * 2.19944, cloudSize * 0.78444, cloudSize * 2.03333, cloudSize * 1.095, cloudSize * 2.03333, cloudSize * 1.095);
            ctx.bezierCurveTo(cloudSize * 2.03333, cloudSize * 1.095, cloudSize * 1.91444, cloudSize * 0.98388, cloudSize * 1.78555, cloudSize * 1.07611);
            ctx.bezierCurveTo(cloudSize * 1.67166, cloudSize * 1.15722, cloudSize * 1.70166, cloudSize * 1.26888, cloudSize * 1.70166, cloudSize * 1.26888);
            ctx.bezierCurveTo(cloudSize * 1.70166, cloudSize * 1.26888, cloudSize * 1.43277, cloudSize * 1.34222, cloudSize * 1.43277, cloudSize * 1.58333);
            ctx.bezierCurveTo(cloudSize * 1.43277, cloudSize * 1.87388, cloudSize * 1.70166, cloudSize * 1.88777, cloudSize * 1.70166, cloudSize * 1.88777);
            ctx.lineTo(cloudSize * 2.78611, cloudSize * 1.88777);
            ctx.bezierCurveTo(cloudSize * 2.78611, cloudSize * 1.88777, cloudSize * 2.90888, cloudSize * 1.87, cloudSize * 2.99611, cloudSize * 1.775);
            ctx.bezierCurveTo(cloudSize * 3.085, cloudSize * 1.67833, cloudSize * 3.06555, cloudSize * 1.58333, cloudSize * 3.06555, cloudSize * 1.58333);
            ctx.bezierCurveTo(cloudSize * 3.06555, cloudSize * 1.58333, cloudSize * 3.07944, cloudSize * 1.49666, cloudSize * 2.99222, cloudSize * 1.38833);
            ctx.closePath();
            gradient = ctx.createLinearGradient(cloudSize * 2.25, cloudSize * 0.85111, cloudSize * 2.25, cloudSize * 1.88777);
            gradient.addColorStop(0.1, '#fff');
            gradient.addColorStop(1.00, cfg.tint);
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.restore();

            // Shadows (Minor arc)
            ctx.save();
            ctx.globalAlpha = alpha * 0.05;
            ctx.beginPath();
            ctx.moveTo(cloudSize * 1.88055, cloudSize * 1.045);
            ctx.bezierCurveTo(cloudSize * 1.84833, cloudSize * 1.045, cloudSize * 1.78166, cloudSize * 1.08333, cloudSize * 1.76277, cloudSize * 1.13722);
            ctx.bezierCurveTo(cloudSize * 1.75, cloudSize * 1.17388, cloudSize * 1.75833, cloudSize * 1.20777, cloudSize * 1.74888, cloudSize * 1.21944);
            ctx.bezierCurveTo(cloudSize * 1.73111, cloudSize * 1.24222, cloudSize * 1.70111, cloudSize * 1.28555, cloudSize * 1.69888, cloudSize * 1.26388);
            ctx.bezierCurveTo(cloudSize * 1.68722, cloudSize * 1.12333, cloudSize * 1.79444, cloudSize * 1.04444, cloudSize * 1.89277, cloudSize * 1.04444);
            ctx.bezierCurveTo(cloudSize * 1.99055, cloudSize * 1.04444, cloudSize * 1.945, cloudSize * 1.045, cloudSize * 1.88055, cloudSize * 1.045);
            ctx.closePath();
            gradient = ctx.createLinearGradient(cloudSize * 1.94944, cloudSize * 1.15722, cloudSize * 1.69833, cloudSize * 1.15722);
            gradient.addColorStop(0.00, '#fff');
            gradient.addColorStop(0.66, '#7f7f7f');
            gradient.addColorStop(1.00, cfg.tint);
            ctx.fillStyle = gradient;
            ctx.fill();

            // Shadows (Major arc)
            ctx.beginPath();
            ctx.globalAlpha = alpha * 0.15;
            ctx.moveTo(cloudSize * 2.36222, cloudSize * 0.86166);
            ctx.bezierCurveTo(cloudSize * 2.30499, cloudSize * 0.885, cloudSize * 2.23444, cloudSize * 0.91944, cloudSize * 2.20166, cloudSize * 0.96277);
            ctx.bezierCurveTo(cloudSize * 2.12222, cloudSize * 1.06888, cloudSize * 2.15888, cloudSize * 1.05166, cloudSize * 2.13222, cloudSize * 1.06444);
            ctx.bezierCurveTo(cloudSize * 2.05944, cloudSize * 1.09888, cloudSize * 2.01222, cloudSize * 1.12666, cloudSize * 2.03944, cloudSize * 1.08777);
            ctx.bezierCurveTo(cloudSize * 2.16555, cloudSize * 0.90722, cloudSize * 2.315, cloudSize * 0.825, cloudSize * 2.48333, cloudSize * 0.85222);
            ctx.bezierCurveTo(cloudSize * 2.49166, cloudSize * 0.85388, cloudSize * 2.42333, cloudSize * 0.83666, cloudSize * 2.36222, cloudSize * 0.86166);
            ctx.closePath();
            gradient = ctx.createLinearGradient(cloudSize * 2.03166, cloudSize * 0.97722, cloudSize * 2.48388, cloudSize * 0.97722);
            gradient.addColorStop(0.00, '#fff');
            gradient.addColorStop(0.66, '#7f7f7f');
            gradient.addColorStop(1.00, cfg.tint);
            ctx.fillStyle = gradient;
            ctx.fill();

            // Shadows (Lower-left arc)
            ctx.globalAlpha = alpha * 0.05;
            ctx.beginPath();
            ctx.moveTo(cloudSize * 1.48888, cloudSize * 1.515);
            ctx.bezierCurveTo(cloudSize * 1.52944, cloudSize * 1.615, cloudSize * 1.43333, cloudSize * 1.62666, cloudSize * 1.46833, cloudSize * 1.71833);
            ctx.bezierCurveTo(cloudSize * 1.50777, cloudSize * 1.82111, cloudSize * 1.65111, cloudSize * 1.89166, cloudSize * 1.64222, cloudSize * 1.88888);
            ctx.bezierCurveTo(cloudSize * 1.52055, cloudSize * 1.84944, cloudSize * 1.43222, cloudSize * 1.73333, cloudSize * 1.43222, cloudSize * 1.59555);
            ctx.bezierCurveTo(cloudSize * 1.43222, cloudSize * 1.45, cloudSize * 1.53111, cloudSize * 1.32777, cloudSize * 1.66444, cloudSize * 1.29666);
            ctx.bezierCurveTo(cloudSize * 1.67555, cloudSize * 1.29388, cloudSize * 1.43222, cloudSize * 1.37611, cloudSize * 1.48888, cloudSize * 1.515);
            ctx.closePath();
            gradient = ctx.createLinearGradient(cloudSize * 1.665, cloudSize * 1.59277, cloudSize * 1.43222, cloudSize * 1.59277);
            gradient.addColorStop(0.00, '#fff');
            gradient.addColorStop(0.66, '#7f7f7f');
            gradient.addColorStop(1.00, cfg.tint);
            ctx.fillStyle = gradient;
            ctx.fill();

            // Shadows (Lower-right arc)
            ctx.globalAlpha = alpha * 0.02;
            ctx.beginPath();
            ctx.moveTo(cloudSize * 2.79277, cloudSize * 1.46111);
            ctx.bezierCurveTo(cloudSize * 2.82, cloudSize * 1.525, cloudSize * 2.85388, cloudSize * 1.58555, cloudSize * 2.86777, cloudSize * 1.6);
            ctx.bezierCurveTo(cloudSize * 3.07555, cloudSize * 1.82055, cloudSize * 2.69777, cloudSize * 1.88777, cloudSize * 2.78055, cloudSize * 1.88777);
            ctx.bezierCurveTo(cloudSize * 2.94444, cloudSize * 1.88777, cloudSize * 3.07722, cloudSize * 1.755, cloudSize * 3.07722, cloudSize * 1.59111);
            ctx.bezierCurveTo(cloudSize * 3.07722, cloudSize * 1.42722, cloudSize * 2.94444, cloudSize * 1.29444, cloudSize * 2.78055, cloudSize * 1.29444);
            ctx.bezierCurveTo(cloudSize * 2.73555, cloudSize * 1.29444, cloudSize * 2.75833, cloudSize * 1.38, cloudSize * 2.79277, cloudSize * 1.46111);
            ctx.closePath();
            gradient = ctx.createLinearGradient(cloudSize * 2.75555, cloudSize * 1.59111, cloudSize * 3.07722, cloudSize * 1.59111);
            gradient.addColorStop(0.00, 'rgba(255, 255, 255, 0)');
            gradient.addColorStop(0.35, 'rgba(127, 127, 127, 25)');
            gradient.addColorStop(1.00, cfg.tint);
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.restore();
            ctx.translate(transX * -1, transY * -1);
        };
    };
};
