var Atmosphere = {};

Atmosphere.Sun = function (context, x, y, ratio) {
    "use strict";

    return new function () {
        this.settings = { context: context, xPos: x || 0, yPos: y || 0, radius: 40, sizeRatio: ratio || 1.0, fillStyle: '#ffd700' };

        var cfg = this.settings;
        cfg.xPos = x;
        cfg.yPos = y;

        var ctx = cfg.context,
            sunRadius = cfg.radius * cfg.sizeRatio;

        this.draw = function () {
            ctx.save();

            // Initialise drawing settings
            ctx.fillStyle = cfg.fillStyle;
            ctx.shadowColor = cfg.fillStyle;
            ctx.shadowBlur = 28;

            // Draw main arc
            ctx.beginPath();
            ctx.moveTo(cfg.xPos, cfg.yPos);
            ctx.arc(cfg.xPos, cfg.yPos, sunRadius, Math.PI, Math.PI - 0.0001);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#ffffff';
            ctx.fillStyle = '#ffffe0';
            ctx.arc(cfg.xPos, cfg.yPos, sunRadius - 2, Math.PI, Math.PI-0.0001);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            var gradient = ctx.createLinearGradient(0, 0, 0, sunRadius * 4);
            gradient.addColorStop(0, '#ffa500');
            gradient.addColorStop(1, '#ffff00');
            ctx.fillStyle = gradient; 
            ctx.arc(cfg.xPos, cfg.yPos, sunRadius - 3, Math.PI, Math.PI - 0.0001);
            ctx.fill();
            ctx.closePath();	
            
            ctx.restore();
        };
    };
};

Atmosphere.Moon = function (context, x, y, ratio) {
    "use strict";

    return new function () {
        this.settings = { context: context, xPos: x || 0, yPos: y || 0, radius: 40, sizeRatio: ratio || 1.0, fillStyle: '#fff' };

        var cfg = this.settings;
        cfg.xPos = x;
        cfg.yPos = y;

        var ctx = cfg.context,
            moonRadius = cfg.radius * cfg.sizeRatio;

        this.draw = function () {
            ctx.save();

            // Initialise drawing settings
            ctx.fillStyle = cfg.fillStyle;
            ctx.shadowColor = cfg.fillStyle;
            ctx.shadowBlur = 28;

            // Draw main arc
            ctx.beginPath();
            ctx.moveTo(cfg.xPos, cfg.yPos);
            ctx.arc(cfg.xPos, cfg.yPos, moonRadius, Math.PI, Math.PI - 0.0001);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#ffffff';
            ctx.fillStyle = '#c0c0c0';
            ctx.arc(cfg.xPos, cfg.yPos, moonRadius - 2, Math.PI, Math.PI-0.0001);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            var gradient = ctx.createLinearGradient(0, 0, 0, moonRadius * 4);
            gradient.addColorStop(0, '#f0f0f0');
            gradient.addColorStop(1, '#b0b0b0');
            ctx.fillStyle = gradient; 
            ctx.arc(cfg.xPos, cfg.yPos, moonRadius - 3, Math.PI, Math.PI - 0.0001);
            ctx.fill();
            ctx.closePath();	

            ctx.restore();
        };
    };
};

Atmosphere.Cloud = function (context, x, y, ratio) {
    "use strict";

    return new function () {
        this.settings = { context: context, xPos: x || 0, yPos: y || 0, radius: 40, sizeRatio: ratio || 1.0, lineWidth: 5, fillStyle: '#fff' };

        var cfg = this.settings;
        cfg.xPos = x;
        cfg.yPos = y;

        var ctx = cfg.context,
            topRadius = cfg.radius * cfg.sizeRatio,
            midRadius = topRadius * 0.5529,
            bottomRadius = topRadius * 0.8;

        this.draw = function () {
            ctx.save();

            // Initialise drawing settings
            ctx.lineWidth = cfg.lineWidth;
            ctx.fillStyle = cfg.fillStyle;
            ctx.shadowBlur = 0;

            ctx.beginPath();
            
            // Draw main arc
            ctx.moveTo(cfg.xPos, cfg.yPos);
            ctx.arc(cfg.xPos, cfg.yPos, topRadius, Math.PI, 0);
            
            // Draw minor arc
            var xMid = cfg.xPos - (topRadius + (topRadius * 0.2588)),
                yMid = cfg.yPos;
            ctx.moveTo(xMid, yMid);
            ctx.arc(xMid, yMid, midRadius, Math.PI, 0);
            
            // Draw bottom-left arc     
            var xBotLeft = xMid - (midRadius / 2),
                yBotLeft = yMid + bottomRadius * 0.94;
            ctx.moveTo(xBotLeft, yBotLeft);
            ctx.arc(xBotLeft, yBotLeft, bottomRadius, Math.PI * 0.5, Math.PI * 1.5);
            
            // Draw bottom-right arc
            var xBotRight = cfg.xPos + topRadius - (midRadius / 2),
                yBotRight = yBotLeft;
            ctx.moveTo(xBotRight, yBotRight);
            ctx.arc(xBotRight, yBotRight, bottomRadius, Math.PI * 1.5, Math.PI * 0.5);
            
            // Fill the rest of the cloud
            ctx.moveTo(xBotLeft, yBotLeft + bottomRadius);
            ctx.rect(xBotLeft, yBotLeft - bottomRadius, (topRadius * 2) + (topRadius * 0.2588), 2 * bottomRadius);
            
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        };
    };
};
