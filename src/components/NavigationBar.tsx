import React from 'react';
import {Layout, Anchor, Typography, Menu} from 'antd';
import '../styles/Navigation.css';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { userInitialization } from '../redux/reducers/userReducer';


const {Header} = Layout;
const { Title } = Typography;

export const NavigationBar : React.FC = () => {
  const userInfo = useSelector<userInitialization, userInitialization["user"]>((state) => state.user);
  return (
    <nav>
      <Layout>
        <Header className="nav-header">
          <Title style={{color: 'white', marginTop: '0.5em'}} level={3}>Master Power PROJECT</Title>
          <Menu className='nav-header-items' theme={'dark'}>
            <Menu.Item>
              <Link to="/">Main Page</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/settings">Settings Page</Link>
            </Menu.Item>
            <Menu.Item>
              <Typography style={{color: 'white'}}>{userInfo}</Typography>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </nav>
  )
}