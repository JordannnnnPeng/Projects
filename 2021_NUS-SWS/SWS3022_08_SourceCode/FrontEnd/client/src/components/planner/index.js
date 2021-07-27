import React, { Fragment } from 'react';
import { Form, Input, Button } from 'antd';
import { ClockCircleOutlined, DollarCircleOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';


class Planner extends React.Component {
  render() {
    return (
      <Fragment>
        <section className='landing1'>
          <div className='dark-overlay'>
            <div className='landing-inner'>
              <h1 className='x-large' style={{color:'#fff'}}>Quick Start</h1>
              <p className='lead'>
                Enter Your target period and roi, we will recommond your the most fit stocks
              </p>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={(values) => this.props.history.push({
                  pathname: '/list',
                  state: {
                      period: values.period,
                      roi: values.roi
                  }})}
              >
                <Form.Item
                  name="period"
                  rules={[{ required: true, message: 'Please input target period!' }]}
                >
                  <Input prefix={<ClockCircleOutlined className="site-form-item-icon" />} placeholder="period" />
                </Form.Item>
                <Form.Item
                  name="roi"
                  rules={[{ required: true, message: 'Please input your target roi!' }]}
                >
                  <Input
                    prefix={<DollarCircleOutlined className="site-form-item-icon" />}
                    placeholder="roi"
                  />
                </Form.Item>
  
                <Form.Item>
                  
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Try!
                    </Button>
                  
                </Form.Item>
              </Form>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
  
};

Planner.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Planner);