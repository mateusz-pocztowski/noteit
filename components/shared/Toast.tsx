import styled from 'styled-components'
import Icon from 'components/shared/Icon'
import checkIcon from 'assets/icons/checkmark.svg'

import type { Colors } from 'types/theme'

export declare type ToastType = 'info' | 'success' | 'error'

interface Props {
  message: string
  type: ToastType
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px 0 0;
  font-family: ${({ theme }) => theme.fonts.secondary};
`

const IconWrapper = styled.div<{ color: keyof Colors }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  min-width: 30px;
  max-width: 30px;
  min-height: 30px;
  max-height: 30px;
  background: ${({ theme, color }) => theme.colors[color]};
  border-radius: 50%;
  margin-right: 10px;
  span {
    font-weight: 700;
    color: #fff;
  }
`

const Heading = styled.h3`
  font-weight: 600;
  font-size: 1.7rem;
  line-height: 1.1;
  text-transform: capitalize;
`

const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryText};
  line-height: 1.1;
  margin-top: 3px;
`

const getColor = (type: ToastType) => {
  switch (type) {
    case 'info':
      return 'blue'
    case 'success':
      return 'green'
    case 'error':
      return 'red'
    default:
      return 'green'
  }
}

const getIcon = (type: ToastType) => {
  switch (type) {
    case 'info':
      return 'i'
    case 'success':
      return checkIcon
    case 'error':
      return '!'
    default:
      return checkIcon
  }
}

const Toast: React.FC<Props> = ({ message, type }) => {
  return (
    <Wrapper>
      <IconWrapper color={getColor(type)}>
        {type === 'success' ? (
          <Icon src={getIcon(type)} excludeDarkMode />
        ) : (
          <span>{getIcon(type)}</span>
        )}
      </IconWrapper>
      <div>
        <Heading>{type === 'info' ? type : `${type}!`}</Heading>
        <Text>{message}</Text>
      </div>
    </Wrapper>
  )
}

export default Toast
