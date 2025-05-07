import { HStack } from '@renderer/components/Layout'
import { TopView } from '@renderer/components/TopView'
// import NavigationService from '@renderer/services/NavigationService'
import { Assistant, Topic } from '@renderer/types'
import { Modal } from 'antd'
import { useState } from 'react'
import styled from 'styled-components'

import HomeTabs from '../Tabs'
interface Props {
  activeAssistant: Assistant
  activeTopic: Topic
  setActiveAssistant: (assistant: Assistant) => void
  setActiveTopic: (topic: Topic) => void
  activeName?: string
  setActiveName?: (activeName: string) => void
}

const SettingModalPopupContainer: React.FC<Props> = ({
  activeAssistant,
  activeTopic,
  setActiveAssistant,
  setActiveTopic,
  activeName
}) => {
  const [open, setOpen] = useState(true)

  // const { showAssistants, showTopics, topicPosition } = useSettings()

  // useEffect(() => {
  //   NavigationService.setNavigate(navigate)
  // }, [navigate])

  // useEffect(() => {
  //   const canMinimize = topicPosition == 'left' ? !showAssistants : !showAssistants && !showTopics
  //   window.api.window.setMinimumSize(canMinimize ? 520 : 1080, 600)

  //   return () => {
  //     window.api.window.resetMinimumSize()
  //   }
  // }, [showAssistants, showTopics, topicPosition])
  const onOk = () => {
    setOpen(false)
  }
  const afterClose = () => {
    // resolve(assistant)
  }
  const onCancel = () => {
    setOpen(false)
  }
  return (
    <StyledModal
      open={open}
      onOk={onOk}
      onClose={onCancel}
      onCancel={onCancel}
      afterClose={afterClose}
      footer={null}
      title={''}
      transitionName="ant-move-down"
      styles={{
        content: {
          padding: 0,
          overflow: 'hidden',
          background: 'var(--color-background)',
          border: `1px solid var(--color-frame-border)`
        },
        header: { padding: '10px 15px', borderBottom: '0.5px solid var(--color-border)', margin: 0 }
      }}
      width="270px"
      height="600px"
      centered>
      <HStack>
        <HomeTabs
          activeAssistant={activeAssistant}
          activeTopic={activeTopic}
          setActiveAssistant={setActiveAssistant}
          setActiveTopic={setActiveTopic}
          position="left"
          activeName={activeName}
        />
      </HStack>
    </StyledModal>
  )
}

const StyledModal = styled(Modal)`
  .ant-modal-title {
    font-size: 14px;
  }
  .ant-modal-close {
    top: 4px;
  }
  .ant-menu-item {
    height: 36px;
    color: var(--color-text-2);
    display: flex;
    align-items: center;
    border: 0.5px solid transparent;
    border-radius: 6px;
    .ant-menu-title-content {
      line-height: 36px;
    }
  }
  .ant-menu-item-active {
    background-color: var(--color-background-soft) !important;
    transition: none;
  }
  .ant-menu-item-selected {
    background-color: var(--color-background-soft);
    border: 0.5px solid var(--color-border);
    .ant-menu-title-content {
      color: var(--color-text-1);
      font-weight: 500;
    }
  }
`

export default class SettingModalsPopup {
  static show(props: Props) {
    return new Promise(() => {
      TopView.show(<SettingModalPopupContainer {...props} />, 'SettingModalsPopup')
    })
  }
  static close() {
    TopView.hide('SettingModalsPopup')
  }
}
