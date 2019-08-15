<!--
  描述：拖放地图组件，默认尺寸是 500 * 300
  接收属性参数：
    lat: 纬度
    lng: 经度
  自定义事件：
    drag: 拖放完成事件
  示例：
    <mapDrag @drag="dragMap" lat="22.574405" lng="114.095388"></mapDrag>
-->
<template>
    <div class="m-map">
        <div class="search" v-if="placeSearch">
            <input type="text" placeholder="请输入关键字" v-model="searchKey">
            <button type="button" @click="handleSearch">搜索</button>
            <div id="js-result" v-show="searchKey" class="result"></div>
        </div>
        <div id="js-container" class="map">正在加载数据 ...</div>
    </div>
</template>

<script>
    import remoteLoad from '@/utils/remoteLoad.js'
    import {MapKey, MapCityName} from '@/config/config'

    export default {
        props: ['lat', 'lng'],
        data() {
            return {
                searchKey: '',
                placeSearch: null,
                dragStatus: false,
                AMapUI: null,
                AMap: null
            }
        },
        watch: {
            searchKey() {
                if (this.searchKey === '') {
                    this.placeSearch.clear()
                }
            }
        },
        methods: {
            // 搜索
            handleSearch() {
                if (this.searchKey) {
                    this.placeSearch.search(this.searchKey)
                }
            },
            // 实例化地图
            initMap() {
                var SOC = 'CHN'
                var colors = {};
                var GDPSpeed = {
                    '520000':10,//贵州
                    '540000':10,//西藏
                    '530000':8.5,//云南
                    '500000':8.5,//重庆
                    '360000':8.5,//江西
                    '340000':8.0,//安徽
                    '510000':7.5,//四川
                    '350000':8.5,//福建
                    '430000':8.0,//湖南
                    '420000':7.5, //湖北
                    '410000':7.5,//河南
                    '330000':7.0,//浙江
                    '640000':7.5,//宁夏
                    '650000':7.0,//新疆
                    '440000':7.0,//广东
                    '370000':7.0,//山东
                    '450000':7.3,//广西
                    '630000':7.0,//青海
                    '320000':7.0,//江苏
                    '140000':6.5,//山西
                    '460000':7,// 海南
                    '310000':6.5,//上海
                    '110000':6.5, // 北京
                    '130000':6.5, // 河北
                    '230000':6, // 黑龙江
                    '220000':6,// 吉林
                    '210000':6.5, //辽宁
                    '150000':6.5,//内蒙古
                    '120000':5,// 天津
                    '620000':6,// 甘肃
                    '610000':8.5,// 甘肃
                    '710000':2.64, //台湾
                    '810000':3.0, //香港
                    '820000':4.7 //澳门
                };
                var getColorByDGP = function(adcode){
                    if(!colors[adcode]){
                        var gdp = GDPSpeed[adcode];
                        if(!gdp){
                            colors[adcode] = 'rgb(227,227,227)'
                        }else{
                            var rg = 225-Math.floor((gdp-5)/5*255);
                            colors[adcode] = 'rgb('+ rg +','+ rg +',255)';
                        }
                    }
                    return colors[adcode]
                };

                var disCountry = new AMap.DistrictLayer.Country({
                    zIndex:10,
                    SOC:'CHN',
                    depth:2,
                    styles:{
                        'nation-stroke':'#22ffff',
                        'coastline-stroke':[0.85, 0.63, 0.94, 1],
                        'province-stroke':'white',
                        'city-stroke': 'rgba(255,255,255,0.5)',//中国特有字段
                        'fill':function(props){//中国特有字段
                            return getColorByDGP(props.adcode_pro)
                        }
                    }
                });


                var map = new AMap.Map("js-container",{
                    zooms: [3, 10],
                    showIndoorMap:false,
                    zoom: 4,
                    isHotspot:false,
                    defaultCursor:'pointer',
                    touchZoomCenter:1,
                    pitch: 0,
                    layers:[
                        disCountry,
                        // new AMap.TileLayer.Satellite()
                    ],
                    viewMode:'3D',
                    resizeEnable: true
                });
                map.addControl(new AMap.Scale());
                map.addControl(new AMap.ToolBar({liteStyle:true}));
            }
        },
        async created() {
            // 已载入高德地图API，则直接初始化地图
            if (window.AMap && window.AMapUI) {
                this.initMap()
                // 未载入高德地图API，则先载入API再初始化
            } else {
                await remoteLoad(`http://webapi.amap.com/maps?v=1.4.15&key=${MapKey}&plugin=Map3D,AMap.DistrictLayer,AMap.Scale,AMap.ToolBar`);
                this.initMap()
            }
        }
    }
</script>

<style scoped>
    .m-map {
        min-width: 500px;
        height: 600px;
        position: relative;
    }

    .m-map .map {
        width: 100%;
        height: 100%;
    }

    .m-map .search {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 285px;
        z-index: 1;
    }

    .m-map .search input {
        width: 180px;
        border: 1px solid #ccc;
        line-height: 20px;
        padding: 5px;
        outline: none;
    }

    .m-map .search button {
        line-height: 26px;
        background: #fff;
        border: 1px solid #ccc;
        width: 50px;
        text-align: center;
    }

    .m-map .result {
        max-height: 300px;
        overflow: auto;
        margin-top: 10px;
    }
</style>
