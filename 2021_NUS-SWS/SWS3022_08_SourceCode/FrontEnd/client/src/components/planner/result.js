import React from 'react';
import ReactECharts from 'echarts-for-react';
import reqwest from 'reqwest'; 
const fakeDataUrl = `http://192.168.1.113:5000/test`;
var preArr=[];
var data0=[];
class Result extends React.Component {

  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  };

  componentDidMount() {
    console.log(this.props.match.params)
    this.getData(res => {
      this.setState({
        initLoading: false,
        data: res,
        list: res,
      });
    });
  }

  getData = callback => { 
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'post',
      contentType: 'application/json',
      processData: false,
      data:JSON.stringify({ Function: 'Price',code: this.props.match.params.id}),
      success: res => {
        res = JSON.parse(res)
        data0 =  this.splitData.bind(this)(this.json_array.bind(this)(res));
        callback(res);
      },
    });
  };
  
  json_array(data) {
    var len=eval(data).length;
    var arr=[];
    for(var i=0;i<len;i++){
      arr[i] =[]; 
      arr[i][0]=data[i].Date;
      arr[i][1]=data[i].open;
      arr[i][2]=data[i].RealPrice;
      arr[i][3]=data[i].low;
      arr[i][4]=data[i].high;
      arr[i][5]=data[i].volume;
      preArr[i]=data[i].PredictPrice;
  }
    return arr;  
  }
  splitData(rawData) {
    var categoryData = [];
    var values = [];
    for (var i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push(rawData[i])
    }
    return {
        categoryData: categoryData, 
        values: values 
    };
  }

  calculateMA(dayCount) {
    var result = [];
    for (var i = 0, len = data0.values.length; i < len; i++) {
        if (i < dayCount) {
            result.push('-');
            continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
            sum += data0.values[i - j][1];
        }
        result.push(sum / dayCount);
    }
    return result;
  }
  
  render()
  {
    // 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
  
  

  
  const options = {
    title: {    //标题
        text: this.props.match.params.name,
        left: 0
    },
    tooltip: {  
        trigger: 'axis',    
        axisPointer: {  
            type: 'cross'   
        }
    },
    legend: {   
        data: ['日K', 'MA5', 'MA10', 'MA20','prediction']
    },
    grid: {     
        show:true,
        left: '10%',    
        right: '10%',
        bottom: '15%',
    },
    xAxis: {
        type: 'category',   
        data: data0.categoryData,
        boundaryGap : false,    
        axisLine: {onZero: false},
        splitLine: {show: false},   
        min: 'dataMin', 
        max: 'dataMax'  
    },
    yAxis: {
        scale: true,    
        splitArea: {
            show: true  
        }
    },
    dataZoom: [     
        {
            filterMode:'filter',      
            type: 'inside', 
            start: 50,      
            end: 100        
        },
        {
            show: true,
            type: 'slider', 
            y: '90%',
            start: 50,
            end: 100
        }
    ],
    series: [   
        {
            name: '日K',
            type: 'candlestick',    
            data: data0.values,     

            markPoint: {    
                label: {    
                },
                data: [     
                    {
                        name: 'XX标点',
                        coord: ['2013/5/31', 2300], 
                        value: 2300,
                    },
                    {
                        name: 'highest value',
                        type: 'max',    
                        valueDim: 'highest'
                    },
                    {
                        name: 'lowest value',
                        type: 'min',
                        valueDim: 'lowest'
                    },
                    {
                        name: 'average value on close',
                        type: 'average',
                        valueDim: 'close'
                    }
                ],
                tooltip: {      
                    formatter: function (param) {
                        return param.name + '<br>' + (param.data.coord || '');
                    }
                }
            },
            markLine: {
                symbol: ['none', 'none'],
                data: [
                    [
                        {
                            name: 'from lowest to highest',
                            type: 'min',
                            valueDim: 'lowest',
                            symbol: 'circle',
                            symbolSize: 10,
                            label: {
                            }
                        },
                        {
                            type: 'max',
                            valueDim: 'highest',
                            symbol: 'circle',
                            symbolSize: 10,
                            label: {
                            }
                        }
                    ],

                    {
                        name: 'min line on close',
                        type: 'min',
                        valueDim: 'close'
                    },
                    {
                        name: 'max line on close',
                        type: 'max',
                        valueDim: 'close'
                    }
                ]
            }
        },
        {
          name: 'prediction',
          type: 'line',
          data: preArr,
          smooth: true,
          symbol: 'emptyCircle',
          symbolSize:3,
          lineStyle: {
              color: '#fc8452',
              width: 4
          },
          itemStyle: {
              borderWidth: 3,
              borderColor: '#EE6666',
              color: '#73c0de'
          },
          showAllSymbol: true ,
          emphasis: {
            scale: false,
            focus: 'series'
          }
        },
        {
            name: 'MA5',
            type: 'line',
            data: this.calculateMA(5),
            smooth: true,
        },
        {
            name: 'MA10',
            type: 'line',
            data: this.calculateMA(10),
            smooth: true,
        },
        {
            name: 'MA20',
            type: 'line',
            data: this.calculateMA(20),
            smooth: true,
        },
    ]
  };
    return <ReactECharts option={options} style={
    {
      left: '40%',
      top: 300,
      width: 1100,
      margin: '0 auto',
      transform: 'translateX(-50%) translateY(-50%)',
    }}/>;
  }
};
export default Result;