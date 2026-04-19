// 第三页脚本 - 000623.html
(function() {
    const blueMain = '#4a9ecf';
    const blueLight = '#8ac4e8';
    const splitLineStyle = { lineStyle: { color: 'rgba(107, 181, 224, 0.25)', type: 'dashed' } };

    // 各大区古桥修缮面积
    const barArea = echarts.init(document.getElementById('barAreaChart'));
    barArea.setOption({
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, backgroundColor: 'rgba(13,51,80,0.9)' },
        grid: { left: '10%', right: '5%', top: 30, bottom: 10, containLabel: true },
        xAxis: { type: 'category', data: ['华东区', '华南区', '西南区', '华北区', '华中区'], axisLabel: { color: '#ffffff', rotate: 12 }, axisLine: { lineStyle: { color: blueLight } } },
        yAxis: { type: 'value', name: '修缮面积 (㎡)', nameTextStyle: { color: '#ffffff' }, splitLine: splitLineStyle, axisLabel: { color: '#ffffff' } },
        series: [{ name: '修复面积', type: 'bar', data: [185000, 162000, 79000, 112000, 138000], itemStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#6bb5e0' }, { offset: 1, color: '#2a7aaa' }]), borderRadius: [6, 6, 0, 0] }, label: { show: true, position: 'top', color: '#ffffff', formatter: '{c} ' } }]
    });

    // 古桥病害类型占比
    const pieType = echarts.init(document.getElementById('pieTypeChart'));
    pieType.setOption({
        tooltip: { trigger: 'item', formatter: "{b} : {c} ({d}%)" },
        legend: {
            orient: 'vertical',
            itemWidth: 12,
            itemHeight: 12,
            right: 10,
            top: 'center',
            textStyle: { color: '#8ac4e8', fontSize: 15, fontWeight: 500 },
            data: ['石材风化', '结构裂缝', '基础沉降', '人为', '其他病害']
        },
        series: [{
            type: 'pie',
            radius: [20, 70],
            center: ["35%", "40%"],
            roseType: 'area',
            data: [
                { value: 42, name: '石材风化', itemStyle: { color: '#37a2da' }, label: { show: true, formatter: '石材风化:\n42', color: '#37a2da', fontSize: 14, fontWeight: 600, position: 'outside' }, labelLine: { lineStyle: { color: '#37a2da' } } },
                { value: 28, name: '结构裂缝', itemStyle: { color: '#32c5e9' }, label: { show: true, formatter: '结构裂缝:\n28', color: '#32c5e9', fontSize: 14, fontWeight: 600, position: 'outside' }, labelLine: { lineStyle: { color: '#32c5e9' } } },
                { value: 15, name: '基础沉降', itemStyle: { color: '#9fe6b8' }, label: { show: true, formatter: '基础沉降:\n15', color: '#9fe6b8', fontSize: 14, fontWeight: 600, position: 'outside' }, labelLine: { lineStyle: { color: '#9fe6b8' } } },
                { value: 10, name: '人为', itemStyle: { color: '#ffdb5c' }, label: { show: true, formatter: '人为:\n10', color: '#ffdb5c', fontSize: 14, fontWeight: 600, position: 'outside' }, labelLine: { lineStyle: { color: '#ffdb5c' } } },
                { value: 5, name: '其他病害', itemStyle: { color: '#ff9f7f' }, label: { show: true, formatter: '其他病害:\n5', color: '#ff9f7f', fontSize: 14, fontWeight: 600, position: 'outside' }, labelLine: { lineStyle: { color: '#ff9f7f' } } }
            ],
            label: { show: true, position: 'outside', fontSize: 14, fontWeight: 600 },
            labelLine: { length: 5, length2: 10 },
            itemStyle: { borderRadius: 5 }
        }]
    });

    // 全国古代桥梁地域分布
    const chinaMap = echarts.init(document.getElementById('chinaMapContainer'));
    const diseasePoints = [
        { name: '杭州拱宸桥', value: [120.15, 30.28, 76], level: 'high' }, { name: '贵州镇远桥', value: [108.41, 27.17, 72], level: 'high' },
        { name: '云南建水桥', value: [102.82, 23.64, 68], level: 'high' }, { name: '四川安澜桥', value: [103.67, 30.98, 70], level: 'high' },
        { name: '福建洛阳桥', value: [118.67, 24.98, 74], level: 'high' }, { name: '苏州宝带桥', value: [120.62, 31.32, 58], level: 'mid' },
        { name: '北京卢沟桥', value: [116.25, 39.91, 55], level: 'mid' }, { name: '潮州湘子桥', value: [116.67, 23.65, 52], level: 'mid' },
        { name: '绍兴八字桥', value: [120.58, 30.00, 50], level: 'mid' }, { name: '泉州洛阳桥', value: [118.67, 24.98, 54], level: 'mid' },
        { name: '太原晋祠桥', value: [112.54, 37.87, 48], level: 'mid' }, { name: '武汉晴川桥', value: [114.31, 30.59, 45], level: 'mid' },
        { name: '成都九眼桥', value: [104.06, 30.67, 47], level: 'mid' }, { name: '桂林花桥', value: [110.29, 25.27, 46], level: 'mid' },
        { name: '长沙拱极桥', value: [112.94, 28.23, 44], level: 'mid' }, { name: '西安灞桥', value: [108.95, 34.27, 25], level: 'low' },
        { name: '兰州中山桥', value: [103.82, 36.06, 22], level: 'low' }, { name: '哈尔滨松花江桥', value: [126.53, 45.80, 20], level: 'low' },
        { name: '乌鲁木齐桥', value: [87.62, 43.82, 18], level: 'low' }, { name: '三亚古桥', value: [109.51, 18.25, 15], level: 'low' }
    ];
    chinaMap.setOption({
        backgroundColor: 'transparent',
        tooltip: { trigger: 'item', formatter: (p) => p.data ? `${p.name}<br/>病害评分: ${p.value[2]}分` : p.name },
        geo: { map: 'china', roam: false, zoom: 1.2, itemStyle: { areaColor: '#2C4AB6', borderColor: '#4a9ecf', borderWidth: 0.8, shadowBlur: 10, shadowColor: '#4a9ecf' }, emphasis: { itemStyle: { areaColor: '#1e6fa0' } } },
        series: [{ type: 'effectScatter', coordinateSystem: 'geo', data: diseasePoints, symbolSize: (val) => val[2] / 3.2, rippleEffect: { brushType: 'stroke' }, itemStyle: { color: (params) => params.data.level === 'high' ? '#ff6b6b' : (params.data.level === 'mid' ? '#ffdd77' : '#66aaff') } }]
    });

    // 各片区隐患数量排行
    const barRank = echarts.init(document.getElementById('hiddenRankChart'));
    barRank.setOption({
        tooltip: { trigger: 'axis' },
        grid: { left: 70, right: 60, top: 10, bottom: 10 },
        xAxis: { type: 'value', axisLine: { show: false }, axisTick: { show: false }, axisLabel: { show: false }, splitLine: { show: false } },
        yAxis: { type: 'category', data: ['关陇区', '中原区', '岭南区', '巴蜀区', '江南区', '闽浙区'], axisLabel: { color: '#cce7f5', fontSize: 14, align: 'left', margin: 50 } },
        series: [{
            type: 'bar', barWidth: 16,
            data: [
                { value: 63, itemStyle: { color: new echarts.graphic.LinearGradient(0,0,1,0, [{offset:0,color:'#6478a8'},{offset:1,color:'#a8c0e8'}]), borderRadius: [0,8,8,0] } },
                { value: 75, itemStyle: { color: new echarts.graphic.LinearGradient(0,0,1,0, [{offset:0,color:'#74a8d8'},{offset:1,color:'#b8e0ff'}]), borderRadius: [0,8,8,0] } },
                { value: 98, itemStyle: { color: new echarts.graphic.LinearGradient(0,0,1,0, [{offset:0,color:'#74b8b0'},{offset:1,color:'#b8f0eb'}]), borderRadius: [0,8,8,0] } },
                { value: 112, itemStyle: { color: new echarts.graphic.LinearGradient(0,0,1,0, [{offset:0,color:'#b8a060'},{offset:1,color:'#f5e18a'}]), borderRadius: [0,8,8,0] } },
                { value: 126, itemStyle: { color: new echarts.graphic.LinearGradient(0,0,1,0, [{offset:0,color:'#d4a574'},{offset:1,color:'#ffd79a'}]), borderRadius: [0,8,8,0] } },
                { value: 145, itemStyle: { color: new echarts.graphic.LinearGradient(0,0,1,0, [{offset:0,color:'#e29c4d'},{offset:1,color:'#ffce7e'}]), borderRadius: [0,8,8,0] } }
            ],
            showBackground: true,
            backgroundStyle: { color: 'rgba(255,255,255,0.1)', borderRadius: [0,8,8,0] },
            label: { show: true, position: 'right', color: '#e0f0ff', fontSize: 14, fontWeight: 'bold' }
        }]
    });

    // 2025年保护投入 & 修复面积趋势
    const lineTrend = echarts.init(document.getElementById('trendChart'));
    lineTrend.setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: ['保护投入(亿元)', '修复面积(万㎡)'], textStyle: { color: '#ffffff' }, top: 0 },
        grid: { left: '12%', right: '8%', top: '22%', bottom: '10%' },
        xAxis: { type: 'category', data: ['1月', '3月', '5月', '7月', '9月', '11月'], axisLabel: { color: '#ffffff' }, axisLine: { lineStyle: { color: blueLight } } },
        yAxis: [
            { type: 'value', name: '投入(亿元)', nameTextStyle: { color: '#ffffff' }, axisLabel: { color: '#ffffff' }, splitLine: splitLineStyle },
            { type: 'value', name: '面积(万㎡)', nameTextStyle: { color: '#ffffff' }, axisLabel: { color: '#ffffff' }, splitLine: { show: false } }
        ],
        series: [
            { name: '保护投入(亿元)', type: 'line', smooth: true, data: [12.4, 18.2, 32.5, 48.0, 59.2, 66.6], lineStyle: { color: '#6bb5e0', width: 3 }, areaStyle: { opacity: 0.2, color: '#3a8fc2' }, symbol: 'circle' },
            { name: '修复面积(万㎡)', type: 'line', smooth: true, yAxisIndex: 1, data: [2.8, 4.5, 7.2, 9.6, 12.0, 15.3], lineStyle: { color: '#f5d78e', width: 3 }, symbol: 'diamond', symbolSize: 10 }
        ]
    });

    // 仪表盘
    const gaugeComplete = echarts.init(document.getElementById('gaugeComplete'));
    gaugeComplete.setOption({ series: [{ type: 'pie', radius: ['65%', '85%'], label: { show: true, position: 'center', fontSize: 14, fontWeight: 'bold', color: '#e0f0ff', formatter: '82.6%' }, data: [{ value: 82.6, itemStyle: { color: '#4a9ecf' } }, { value: 17.4, itemStyle: { color: '#1a4766' } }] }] });
    
    const gaugeFund = echarts.init(document.getElementById('gaugeFund'));
    gaugeFund.setOption({ series: [{ type: 'pie', radius: ['65%', '85%'], label: { show: true, position: 'center', fontSize: 14, fontWeight: 'bold', color: '#e0f0ff', formatter: '74.3%' }, data: [{ value: 74.3, itemStyle: { color: '#3a8fc2' } }, { value: 25.7, itemStyle: { color: '#1a4766' } }] }] });

    window.addEventListener('resize', () => {
        barArea.resize(); pieType.resize(); chinaMap.resize(); barRank.resize(); lineTrend.resize(); gaugeComplete.resize(); gaugeFund.resize();
    });
})();