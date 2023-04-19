import { Breadcrumb, Layout } from 'antd';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MainMenu from "@/components/MainMenu";

const { Header, Content, Footer, Sider } = Layout;


const App: React.FC = () => {
   const [collapsed, setCollapsed] = useState(false);

   return (
     <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
           <div className="logo" />
           <MainMenu/>
        </Sider>
        <Layout className="site-layout">
           <Header className="site-layout-background" style={{ padding: '16px' }} >
              <Breadcrumb style={{ margin: '16px 0' }}>
                 <Breadcrumb.Item>User</Breadcrumb.Item>
                 <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
           </Header>
           <Content style={{ margin: '0 16px' }} className="site-layout-background">
              <Outlet></Outlet>
           </Content>
           <Footer style={{ textAlign: 'center', padding: 0, lineHeight:'48px' }}>Ant Design ©{ new Date().getFullYear()} Created by Ant UED</Footer>
        </Layout>
     </Layout>
   );
};

export default App;
