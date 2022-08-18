import { Layout } from 'antd';
import React from 'react';
import Footers from '../common/Footers';
import Headers from '../common/Headers';

const { Content } = Layout;

function MainLayout({ children }) {
  return (
    <Layout>
      <Headers />
      <Content className='min-h-[75vh]'>{ children }</Content>
      <Footers />
    </Layout>
  );
}

export default MainLayout;
