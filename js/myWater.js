var myChart = echarts.init(document.querySelector('.water'));
let compositeScore = 0.99;
var option = {
    graphic: [
        {
            type: "group",
            left: "center",
            top: "58%",
            children: [
                {
                    type: "text",
                    z: 100,
                    left: "10",
                    top: "middle",
                    style: {
                        fill: "#fff",
                        text: "综合评分",
                        font: "16px PingFangSC-Regular",
                    },
                },
            ],
        },
    ],
    series: [
        {
            type: "liquidFill",
            radius: "90%",
            center: ["50%", "50%"],
            data: [compositeScore],
            color: ["#86daec"],
            backgroundStyle: {
                color: {
                    type: "linearGradient",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 1,
                            color: "rgba(17,65,86,0.64)",
                        },
                        {
                            offset: 0.51,
                            color: "rgba(32,70,84,0)",
                        },
                        {
                            offset: 0,
                            color: "rgba(99,254,254,0.35)",
                        },
                    ],
                    globalCoord: false,
                },
            },
            label: {
                position: ["50%", "50%"],
                formatter: compositeScore * 100 + "%",
                fontSize: "30px",
                fontFamily: "DINAlternate-Bold",
                fontWeight: "bold",
                color: "#fff",
            },
            outline: {
                show: true,
                borderDistance: 5,
                itemStyle: {
                    borderColor: "#1B5151",
                    borderWidth: 1,
                },
            },
        },
    ],
};
myChart.setOption(option);
window.addEventListener('resize', function () {
    myChart.resize();
})
window.addEventListener('load', function () {
    myChart.resize();
})