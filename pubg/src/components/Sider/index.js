import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';
import './index.css';
import Home from '../Home';
import Contact from '../Contact';
import About from '../AboutUs';

const { Content } = Layout;

function KDLSider() {
  return (
    <div>
      <Layout>
        <Content>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default KDLSider;
