import React from 'react'

import { Link } from 'react-router-dom';

import { List, Descriptions, Badge, Button, Skeleton, Statistic } from 'antd';

import reqwest from 'reqwest';

const count = 3;
var target = [];
var counter = 0;
var len = 0;
const fakeDataUrl = `http://192.168.1.113:5000/test`;

class list extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  };

  componentDidMount() {
    this.getData1();
  }

  getData1 = callback => { 
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'post',
      contentType: 'application/json',
      processData: false,
      data:JSON.stringify(
        { Function: 'GetCode',
          Time: (this.props.history.location.state.period).toString(),
          Return: (this.props.history.location.state.roi).toString()
        }),
      success: res => {
        target = res;
        len=eval(res).length;
        this.getData(res => {
          this.setState({
            initLoading: false,
            data: res,
            list: res,
          });
        });
      }
    });
  };

  getData = callback => { 
    if(counter === len) return;
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'post',
      contentType: 'application/json',
      processData: false,
      data:JSON.stringify({ Function: 'Index',code: (target[counter++]).toString()}),
      success: res => {
        var res1= '['+res+']'
        res1 = JSON.parse(res1)
        callback(res1);
      },
    });
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData(res => {
      const data = this.state.data.concat(res);
      console.log(data);
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'));
        },
      );
    });
  };

  onToResult = () => {
    
  }
  
  toPercent(point){
    var str=Number(point).toFixed(1);
    str+="%";
    return str;
  }

  checkStatus(props) {
    const isST = props.isST;
    const tradeStatus = props.tradeStatus;
    if(isST === 1) {
      return <Badge status="warning" text="Special Treatment" />
    }
    if(tradeStatus === 1) {
      return <Badge status="processing" text="Normal" />
    }
    return <Badge status="error" text="Suspension" />
  }

  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;

    return (
      <div className="container">
        <List
          className="demo-loadmore-list"
          loading={initLoading}
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={list}
          renderItem={item => (
            <List.Item>
              <Skeleton avatar title={false} loading={item.loading} active>
                <Descriptions bordered>
                  <Descriptions.Item label="open">{item.open}</Descriptions.Item>
                  <Descriptions.Item label="close">{item.close}</Descriptions.Item>
                  <Descriptions.Item label="highest">{item.high}</Descriptions.Item>
                  <Descriptions.Item label="lowest">{item.low}</Descriptions.Item>
                  <Descriptions.Item label="prediction">{item.preclose}</Descriptions.Item>
                  <Descriptions.Item label="volume">{item.volume}</Descriptions.Item>
                  <Descriptions.Item label="turnover rate">{this.toPercent(item.turn)}</Descriptions.Item>
                  <Descriptions.Item label="change rate">{this.toPercent(item.pctChg)}</Descriptions.Item>
                  <Descriptions.Item label="peTTM">{item.peTTM}</Descriptions.Item>
                  <Descriptions.Item label="Trading Status">
                    <Badge status="processing" text="Normal" />
                  </Descriptions.Item>
                </Descriptions>
                <div>
                <div
                  style={{
                    height: '50%',
                  }}
                ><Link to={'/result/'+item.CodeInt+'/'+item.name}><Button type="primary" shape="round" size="large">{item.name}</Button></Link></div>
                  <div
                  style={{
                    marginTop: 10,
                    height: '50%',
                  }}
                ><Statistic title="CODE" groupSeparator={''} value={item.code} /></div>
                </div>
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
      
    );
  }
}
export default list;