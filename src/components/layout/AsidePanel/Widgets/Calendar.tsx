import styled, { CSSProperties } from 'styled-components'

import Widget from 'components/layout/AsidePanel/Widgets/Widget'
import { Text } from 'components/shared/Typography'

const MockShape = styled.figure<{ height: CSSProperties['height'] }>`
  background: ${({ theme }) => theme.colors.hover};
  border-radius: 8px;
  margin: 10px 0;
  height: ${({ height }) => height};
  display: flex;
  align-items: center;
  justify-content: center;
`

type Props = {
  label?: string
}

const Calendar: React.FC<Props> = ({ label = 'Calendar' }) => {
  return (
    <Widget label={label}>
      <MockShape height="320px">
        <Text weight={600}>Calendar</Text>
      </MockShape>
    </Widget>
  )
}

export default Calendar
