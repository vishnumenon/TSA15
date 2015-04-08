// recs: JQuery, svg.js

function NaviMap(parent, nodeset, options) {
    "use strict";
    this.parent = parent;
    this.nodeset = nodeset;
    
    /* nodeset
     * -------
     * keys: node names (strings)
     * values:
     *     keys: n, s, e, w, ne, se, nw, sw, img
     *     values: node names (strings), image file name (string)
     *     
     */
    
    this.options = options;
    
    /* options
     * -------
     * color (css-compatible string): color of map lines
     * width (css-compatible string): width of map lines
     * startNode (string): name of starting node
     *
     */
    if (SVG.supported) {
        this.svg = SVG(this.parent.attr("id")).size('100%', '100%');
    } else {
        alert("this website requires SVG support to run properly -- please try a different browser!");
    }
    
    this.drawNode(this.options.startNode);
    return this;
}


NaviMap.prototype.drawNode = function(node) {
    this.svg.clear()
    var nm = this;
    var w =  this.parent.width();
    var h = this.parent.height();
    var cx = w / 2;
    var cy =  h / 2;
    $.each(this.nodeset[node], function(key, value) {
        var ex, ey;
        switch(key) {
            case "n":
                ex = cx;
                ey = 0;
                break;
            case "s":
                ex = cx;
                ey = h;
                break;
            case "e":
                ex = w;
                ey = cy;
                break;
            case "w":
                ex = 0;
                ey = cy;
                break;
            case "ne":
                ex = w;
                ey = 0;
                break;
            case "nw":
                ex = 0;
                ey = 0;
                break;
            case "se":
                ex = w;
                ey = h;
                break;
            case "sw":
                ex = 0;
                ey = h;
                break;
            default: 
                ex = cx;
                ey = cy;
                break;
        }
        nm.svg.line(cx, cy, ex, ey)
            .stroke({ width: 100 })
            .style(
            {
                cursor: 'pointer',
                stroke: nm.options.color,
                markerEnd: "url(#triangle)"
            })
            .click(function() {
                nm.parent.fadeOut(function() {
                    nm.drawNode(value);
                    nm.parent.fadeIn();
                });
            });
    });
    
    this.svg.image(this.nodeset[node].img).loaded(function(loader) {
        this.size(loader.width, loader.height);
        this.x(cx - loader.width / 2);
        this.y(cy - loader.height / 2);
    });
    
}