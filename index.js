

var nodes = 
    {
        "1": {
            ne: "2a",
            se: "2b",
            img: "imgs/ILTQq.png"
        },
        "2a": {
            w: "1",
            img: "imgs/Logo_rolling_stones.png"
        },
        "2b": {
            w: "1",
            ne: "3",
            img: "imgs/af.png"
        },
        "3": {
            w: "2b",
            img: "imgs/g.png"
        }
    };
    

var eWNaviMap = new NaviMap($("#eWasteNaviMap"), nodes, {color: "#edf703", width: "50px", startNode: "1", imgW: 200, imgH: 200});

