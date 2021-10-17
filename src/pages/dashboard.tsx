import styled from 'styled-components'

import SEO from 'components/shared/SEO'
import Portal from 'components/shared/Portal'
import Calendar from 'components/layout/AsidePanel/Widgets/Calendar'

const Wrapper = styled.div``

const DashboardPage = () => {
  return (
    <Wrapper>
      <SEO title="Dashboard" />
      <Portal selector="#aside-panel-content">
        <Calendar />
      </Portal>
    </Wrapper>
  )
}

export default DashboardPage
