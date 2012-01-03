var Atmosphere = {};

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

        // Initialise drawing settings
        ctx.lineWidth = cfg.lineWidth;
        ctx.fillStyle = cfg.fillStyle;

        this.draw = function () {
            ctx.save();
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
