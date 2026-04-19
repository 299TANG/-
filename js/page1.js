// 第一页脚本 - 00075.html
(function() {
    const blueGrad = ['#4a9ecf', '#6bb5e0', '#8ac4e8', '#3a8fc2'];
    const blueLight = '#8ac4e8';
    const blueMain = '#4a9ecf';
    const splitLineStyle = {
        lineStyle: {
            color: 'rgba(107, 181, 224, 0.2)',
            type: 'dashed'
        }
    };

    // 历代桥梁数量趋势
    const chart1 = echarts.init(document.getElementById('chart1'));
    chart1.setOption({
        backgroundColor: 'transparent',
        tooltip: { trigger: 'axis' },
        grid: { left: '10%', right: '5%', bottom: '10%', top: '10%' },
        xAxis: {
            type: 'category',
            data: ['先秦', '秦汉', '魏晋', '隋唐', '两宋', '元', '明', '清'],
            axisLine: { lineStyle: { color: blueLight } },
            axisLabel: { color: '#ccc' },
            splitLine: splitLineStyle
        },
        yAxis: {
            type: 'value',
            max: 4000,
            axisLine: { lineStyle: { color: blueLight } },
            axisLabel: { color: '#ccc' },
            splitLine: splitLineStyle
        },
        series: [{
            name: '桥梁数量',
            type: 'line',
            smooth: true,
            data: [120, 350, 480, 1200, 3800, 2100, 2900, 1913],
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(74, 158, 207, 0.5)' },
                    { offset: 1, color: 'rgba(74, 158, 207, 0.05)' }
                ])
            },
            itemStyle: { color: blueMain },
            lineStyle: { width: 2, color: blueMain }
        }]
    });

    // 古桥文创产品销量统计 & 占比趋势
    const chart2 = echarts.init(document.getElementById('chart2'));
    chart2.setOption({
        backgroundColor: 'transparent',
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        legend: {
            data: ['年销量 (万件)', '占文创总量百分比(%)'],
            textStyle: { color: '#ccc', fontSize: 14 },
            top: 0,
            left: 'center',
            itemWidth: 30,
            itemHeight: 15
        },
        grid: { left: '5%', right: '5%', top: '30%', bottom: '15%', containLabel: true },
        xAxis: {
            type: 'category',
            data: ['古桥拼装模型', '桥韵书签', '石拱桥香薰', '非遗营造手册', '桥影丝巾', '廊桥积木'],
            axisLabel: {
                rotate: 15,
                color: '#ccc',
                fontSize: 14,
                interval: 0
            },
            axisLine: { lineStyle: { color: blueLight } },
            splitLine: splitLineStyle
        },
        yAxis: [
            {
                type: 'value',
                name: '销量 (万件)',
                nameTextStyle: { color: '#ccc', fontSize: 14, padding: [0, 0, 15, 0] },
                min: 0,
                max: 45,
                axisLabel: { color: '#ccc', fontSize: 14 },
                splitLine: splitLineStyle
            },
            {
                type: 'value',
                name: '占比 (%)',
                nameTextStyle: { color: '#ccc', fontSize: 14 },
                min: 0,
                max: 35,
                axisLabel: { color: '#ccc', fontSize: 14 },
                splitLine: splitLineStyle
            }
        ],
        series: [
            {
                name: '年销量 (万件)',
                type: 'bar',
                data: [37, 21, 17, 11, 14, 27],
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#6bb5e0' },
                        { offset: 1, color: '#1e6fa0' }
                    ]),
                    borderRadius: [8, 8, 0, 0]
                },
                barWidth: '50%'
            },
            {
                name: '占文创总量百分比(%)',
                type: 'line',
                smooth: false,
                data: [28.5, 16.8, 13.9, 9.2, 11.8, 19.8],
                yAxisIndex: 1,
                lineStyle: { width: 3, color: '#f5d78e' },
                symbol: 'circle',
                symbolSize: 14,
                itemStyle: { color: '#f5d78e' },
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{c}%',
                    fontSize: 14,
                    color: '#f5d78e',
                    fontWeight: 'bold',
                    offset: [0, -8]
                }
            }
        ]
    });

    // 文化传承核心指标
    const chart3 = echarts.init(document.getElementById('chart3'));
    chart3.setOption({
        backgroundColor: 'transparent',
        tooltip: { trigger: 'item' },
        radar: {
            indicator: [
                { name: '游客到访率', max: 100 },
                { name: '技艺传承率', max: 100 },
                { name: '文化知名度', max: 100 },
                { name: '保护完好度', max: 100 },
                { name: '传承完整度', max: 100 }
            ],
            radius: '70%',
            center: ['50%', '50%'],
            axisLine: { lineStyle: { color: 'rgba(107, 181, 224, 0.4)' } },
            splitLine: { lineStyle: { color: 'rgba(107, 181, 224, 0.2)' } },
            splitArea: {
                areaStyle: {
                    color: [
                        'rgba(107, 181, 224, 0.05)',
                        'rgba(107, 181, 224, 0.1)'
                    ]
                }
            },
            name: { textStyle: { color: '#ccc', fontSize: 16 } }
        },
        series: [{
            name: '文化传承核心指标',
            type: 'radar',
            areaStyle: { color: 'rgba(74, 158, 207, 0.4)' },
            lineStyle: { width: 2, color: '#4a9ecf' },
            symbol: 'circle',
            symbolSize: 6,
            itemStyle: { color: '#4a9ecf' },
            data: [[78, 63, 90, 72, 85]]
        }]
    });

    // 知名古桥热度TOP8
    const chart4 = echarts.init(document.getElementById('chart4'));
    chart4.setOption({
        backgroundColor: 'transparent',
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        grid: { left: '30%', right: '10%', bottom: '10%', top: '10%' },
        xAxis: {
            type: 'value',
            max: 100,
            axisLine: { lineStyle: { color: blueLight } },
            axisLabel: { color: '#ccc' },
            splitLine: splitLineStyle
        },
        yAxis: {
            type: 'category',
            data: ['双龙桥', '程阳风雨桥', '五亭桥', '安平桥', '洛阳桥', '广济桥', '卢沟桥', '赵州桥'],
            axisLine: { lineStyle: { color: blueLight } },
            axisLabel: { color: '#ccc' },
            splitLine: splitLineStyle
        },
        series: [{
            type: 'bar',
            data: [72, 75, 78, 82, 85, 88, 92, 97],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                    { offset: 0, color: blueMain },
                    { offset: 1, color: blueLight }
                ])
            },
            label: {
                show: true,
                position: 'right',
                formatter: '{c}分',
                color: blueLight
            }
        }]
    });

    // 建造技艺传承现状
    const chart5 = echarts.init(document.getElementById('chart5'));
    chart5.setOption({
        backgroundColor: 'transparent',
        tooltip: { trigger: 'axis' },
        legend: {
            data: ['技艺传承人数', '传承院校数量'],
            textStyle: { color: '#ccc' },
            top: 0
        },
        grid: { left: '10%', right: '5%', bottom: '10%', top: '20%' },
        xAxis: {
            type: 'category',
            data: ['2018', '2019', '2020', '2021', '2022', '2023'],
            axisLine: { lineStyle: { color: blueLight } },
            axisLabel: { color: '#ccc' },
            splitLine: splitLineStyle
        },
        yAxis: {
            type: 'value',
            max: 250,
            axisLine: { lineStyle: { color: blueLight } },
            axisLabel: { color: '#ccc' },
            splitLine: splitLineStyle
        },
        series: [
            {
                name: '技艺传承人数',
                type: 'line',
                smooth: true,
                data: [120, 135, 150, 170, 195, 220],
                itemStyle: { color: blueMain },
                lineStyle: { width: 2, color: blueMain }
            },
            {
                name: '传承院校数量',
                type: 'line',
                smooth: true,
                data: [8, 9, 11, 13, 15, 18],
                itemStyle: { color: '#fff' },
                lineStyle: { width: 2, color: '#fff' }
            }
        ]
    });

    // 各省代表古桥
    const provinceBridges = {
        '河北': '赵州桥（隋）、永通桥（唐）、弘济桥（明）',
        '北京': '卢沟桥（金）、万宁桥（元）、银锭桥（明）',
        '福建': '洛阳桥（北宋）、安平桥（南宋）、江东桥（南宋）',
        '广东': '广济桥（南宋）、潮州太平桥（宋）、永济桥（明）',
        '江苏': '宝带桥（唐）、枫桥（明）、五亭桥（清）',
        '浙江': '八字桥（南宋）、通津桥（宋）、百官桥（明）',
        '山西': '鱼沼飞梁（北宋）、普济桥（金）、景德桥（金）',
        '安徽': '彩虹桥（宋）、屯溪老桥（明）、歙县太平桥（明）',
        '四川': '安澜索桥（宋）、泸定桥（清）、南桥（清）',
        '云南': '双龙桥（清）、建水天缘桥（清）、通京桥（清）',
        '广西': '程阳风雨桥（清）、永宁桥（明）、花桥（宋）',
        '湖南': '遇仙桥（明）、龙津桥（明）、沱江跳岩（清）',
        '湖北': '胭脂桥（宋）、万寿桥（元）、三眼桥（明）',
        '河南': '小商桥（隋）、灞陵桥（明）、惠济桥（宋）',
        '山东': '广饶石桥（隋）、十笏园桥（明）、大明湖桥（清）',
        '江西': '彩虹桥（宋）、清华镇桥（宋）、婺源老桥（明）',
        '陕西': '三原龙桥（明）、咸阳古渡桥（唐）、蓝田辋川桥（清）',
        '重庆': '施济桥（宋）、濯水风雨桥（清）、丰都老桥（明）',
        '贵州': '地坪风雨桥（清）、黎平风雨桥（清）、镇远祝圣桥（明）',
        '甘肃': '握桥（明）、兰州雷坛河桥（明）、天水仙人桥（清）',
        '天津': '西沽浮桥（清）、大红桥（清）、杨柳青石桥（清）',
        '上海': '普济桥（宋）、万安桥（宋）、大境桥（明）',
        '辽宁': '广宁崇兴寺桥（清）、东京陵桥（清）、广宁桥（明）',
        '吉林': '坎下桥（清）、清水桥（清）、蓝旗桥（清）',
        '黑龙江': '哈尔滨文庙泮桥（清）、依兰慈云寺石桥（清）、宁安大桥（清）',
        '内蒙古': '大召前街石桥（清）、席力图召桥（清）、多伦诺尔桥（清）',
        '海南': '见龙桥（清）、儋州故城桥（宋）、定安仙沟塔桥（清）',
        '西藏': '曲水铁索桥（明·现重修）、拉萨宇拓桥（清）、日喀则金桥（清）',
        '青海': '西宁北禅寺石桥（明）、湟中拱桥（清）、贵德古桥（清）',
        '宁夏': '通济桥（清）、中卫高庙石桥（清）、平罗田州塔桥（清）',
        '新疆': '喀什吐曼桥（清）、和田古渡桥（清）、喀什艾提尕尔寺桥（清）'
    };

    const mapChart = echarts.init(document.getElementById('mapChart'));
    mapChart.setOption({
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                const bridge = provinceBridges[params.name] || '暂无';
                return params.name + '<br/>古桥数量：' + params.value + '<br/>代表古桥：' + bridge;
            },
            backgroundColor: 'rgba(13,51,80,0.9)',
            textStyle: { color: '#fff', fontSize: 14 }
        },
        visualMap: {
            min: 0,
            max: 2000,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],
            calculable: true,
            inRange: {
                color: ['#313695', '#74add1', '#abd9e9', '#fdae61', '#d4af37']
            },
            textStyle: { color: '#fff' }
        },
        series: [{
            name: '古桥数量',
            type: 'map',
            map: 'china',
            roam: true,
            zoom: 1.2,
            label: {
                show: true,
                color: '#fff',
                fontSize: 10
            },
            emphasis: {
                label: { color: '#d4af37' },
                itemStyle: { areaColor: '#d4af37' }
            },
            itemStyle: {
                borderColor: '#1a4d6b',
                borderWidth: 0.5,
                areaColor: '#0d3350'
            },
            data: [
                { name: '北京', value: 120 }, { name: '天津', value: 85 },
                { name: '河北', value: 890 }, { name: '山西', value: 760 },
                { name: '内蒙古', value: 95 }, { name: '辽宁', value: 150 },
                { name: '吉林', value: 80 }, { name: '黑龙江', value: 60 },
                { name: '上海', value: 110 }, { name: '江苏', value: 980 },
                { name: '浙江', value: 1200 }, { name: '安徽', value: 650 },
                { name: '福建', value: 1800 }, { name: '江西', value: 520 },
                { name: '山东', value: 720 }, { name: '河南', value: 680 },
                { name: '湖北', value: 420 }, { name: '湖南', value: 380 },
                { name: '广东', value: 850 }, { name: '广西', value: 320 },
                { name: '海南', value: 90 }, { name: '重庆', value: 280 },
                { name: '四川', value: 450 }, { name: '贵州', value: 310 },
                { name: '云南', value: 290 }, { name: '西藏', value: 40 },
                { name: '陕西', value: 580 }, { name: '甘肃', value: 320 },
                { name: '青海', value: 70 }, { name: '宁夏', value: 60 },
                { name: '新疆', value: 50 }
            ]
        }]
    });

    // 古桥类型占比饼图
    const pieChart = echarts.init(document.getElementById('pieChart'));
    pieChart.setOption({
        backgroundColor: 'transparent',
        tooltip: { trigger: 'item', formatter: '{b}: {d}%' },
        legend: {
            orient: 'vertical',
            right: '5%',
            top: 'center',
            textStyle: { color: '#ccc' }
        },
        series: [{
            name: '古桥类型占比',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#0d3350',
                borderWidth: 2
            },
            label: { show: false, position: 'center' },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: blueMain
                }
            },
            labelLine: { show: false },
            data: [
                { value: 56.2, name: '梁桥', itemStyle: { color: '#1e6fa0' } },
                { value: 37.8, name: '拱桥', itemStyle: { color: '#3a8fc2' } },
                { value: 3.3, name: '索桥', itemStyle: { color: '#6bb5e0' } },
                { value: 2.7, name: '浮桥', itemStyle: { color: '#a8d4f0' } }
            ]
        }]
    });

    window.addEventListener('resize', () => {
        chart1.resize();
        chart2.resize();
        chart3.resize();
        chart4.resize();
        chart5.resize();
        mapChart.resize();
        pieChart.resize();
    });
})();