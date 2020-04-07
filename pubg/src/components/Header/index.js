import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu } from 'antd';
import { MailOutlined, HomeOutlined, IdcardOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class Header extends React.Component {
  state = {
    current: 'home',
  };

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu
        theme="dark"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <HomeOutlined />
          Home
          <Link to="/" />
        </Menu.Item>
        <Menu.Item key="about">
          <IdcardOutlined />
          About Us
          <Link to="/about" />
        </Menu.Item>
        <Menu.Item key="contact">
          <MailOutlined />
          Contact Us
          <Link to="/contact" />
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
