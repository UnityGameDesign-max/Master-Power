import React from 'react';
import {Layout, Avatar} from 'antd';
import {Typography, Menu} from 'antd';

const {Header} = Layout;
const { Title } = Typography;

export const NavigationBar : React.FC = () => {
  return (
    <nav>
      <Layout>
        <Header>
          <Title style={{color: 'white'}} level={3}>Master Power PROJECT</Title>
          <Menu defaultSelectedKeys={['Dashboard']} mode="inline">
            <Menu.Item key='Dashboard'>
              Main
            </Menu.Item>
            <Menu.Item key='Dashboard'>
              Setting
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </nav>
  )
}