import { Line } from './BaseCharts'
import axios from 'axios';
let qs = require('qs');
export default {
    extends: Line,
    data () {
        return {
            labels:[],
            datasets:[],
        }
    },
    props: ['url'],
    mounted () {
        const that = this;
        let url = this.url;
        let param = {};
        let postdata = qs.stringify(param);
        axios.post(url, postdata).then(function(data){
            let json = data.data;
            if(json.code == 0){
                console.log(json.rs[0]);
                that.renderChart({
                    labels: json.rs[0].labels,
                    datasets:json.rs[0].firstDate
                }, {responsive: true, maintainAspectRatio: false})
            }else{
            }
        },function(response){
            console.info(response);
        });
    }
}