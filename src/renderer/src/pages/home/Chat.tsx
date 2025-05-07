import { PlusOutlined } from '@ant-design/icons'
import { useAssistant } from '@renderer/hooks/useAssistant'
import { useSettings } from '@renderer/hooks/useSettings'
import { useShowTopics } from '@renderer/hooks/useStore'
import SettingModalsPopup from '@renderer/pages/home/SettingModal/index'
import AssistantSettingsPopup from '@renderer/pages/settings/AssistantSettings'
import { Assistant, Topic } from '@renderer/types'
import { Flex } from 'antd'
import { FC } from 'react'
import styled from 'styled-components'

import Inputbar from './Inputbar/Inputbar'
import Messages from './Messages/Messages'
import Tabs from './Tabs'

interface Props {
  assistant: Assistant
  activeTopic: Topic
  setActiveTopic: (topic: Topic) => void
  setActiveAssistant: (assistant: Assistant) => void
}

const Chat: FC<Props> = (props) => {
  const { assistant } = useAssistant(props.assistant.id)
  const { topicPosition, messageStyle } = useSettings()
  const { showTopics } = useShowTopics()
  return (
    <Container id="chat" className={messageStyle}>
      <Main id="chat-main" vertical flex={1} justify="space-between">
        <TopButtons>
          <TopBtn
            onClick={() =>
              SettingModalsPopup.show({
                activeAssistant: assistant,
                activeTopic: props.activeTopic,
                setActiveAssistant: props.setActiveAssistant,
                setActiveTopic: props.setActiveTopic,
                activeName: 'assistants'
              })
            }>
            <Icon>
              <PlusOutlined />
            </Icon>
            切换智能体
          </TopBtn>
          <TopBtn
            onClick={() => {
              AssistantSettingsPopup.show({ assistant })
            }}>
            <Icon>
              <i className="iconfont icon-setting" />
            </Icon>
            助手设置
          </TopBtn>
          <TopBtn
            onClick={() =>
              SettingModalsPopup.show({
                activeAssistant: assistant,
                activeTopic: props.activeTopic,
                setActiveAssistant: props.setActiveAssistant,
                setActiveTopic: props.setActiveTopic,

                activeName: 'settings'
              })
            }>
            <Icon>
              <i className="iconfont icon-setting" />
            </Icon>
            参数调整
          </TopBtn>
        </TopButtons>

        <Messages
          key={props.activeTopic.id}
          assistant={assistant}
          topic={props.activeTopic}
          setActiveTopic={props.setActiveTopic}
        />
        <Inputbar assistant={assistant} setActiveTopic={props.setActiveTopic} />
      </Main>
      {topicPosition === 'right' && showTopics && (
        <Tabs
          activeAssistant={assistant}
          activeTopic={props.activeTopic}
          setActiveAssistant={props.setActiveAssistant}
          setActiveTopic={props.setActiveTopic}
          position="right"
        />
      )}
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  flex: 1;
  justify-content: space-between;
`
const TopButtons = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  right: 30px;
`
const TopBtn = styled.div`
  display: flex;
  line-height: 35px;
  margin-left: 12px;
  cursor: pointer;
  &.disabled {
    color: #a7a2a2;
  }
`

const Main = styled(Flex)`
  height: calc(100vh - var(--navbar-height));
  position: relative;
  padding-top: 32px;
`
const Icon = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  -webkit-app-region: none;
  border: 0.5px solid transparent;
  .iconfont,
  .anticon {
    color: var(--color-icon);
    font-size: 20px;
    text-decoration: none;
  }
  .anticon {
    font-size: 17px;
  }
`
export default Chat
