import { ControlPanelContainer } from '@/components'
import { Layout } from 'antd'
import React from 'react'
import FlowContainer from './FlowContainer'
import WsController from './WsController'

const { Sider, Content } = Layout

const App: React.FC = () => {
  return (
    <Layout style={{ width: '100vw', height: '100vh' }}>
      <Content>
        <FlowContainer />
      </Content>
      <WsController />
      <Sider>
        <ControlPanelContainer />
      </Sider>
    </Layout>
  )
}

export default App
