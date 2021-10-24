import styled from 'styled-components'
import { toast as sendToastMessage, cssTransition } from 'react-toastify'

import Icon from 'components/shared/Icon'

import checkIcon from 'assets/icons/checkmark.svg'

import type { Colors } from 'types/theme'

export declare type ToastType = 'info' | 'success' | 'error'

interface Props {
  heading?: string
  message?: string
  type: ToastType
}

export const toastTransition = cssTransition({
  enter: 'slide-in-fwd',
  exit: 'slide-out-bck',
})

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px 0 0;
  font-family: ${({ theme }) => theme.fonts.secondary};
`

const IconWrapper = styled.div<{ color: keyof Colors }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  max-width: 24px;
  min-height: 24px;
  max-height: 24px;
  background: ${({ theme, color }) => theme.colors[color]};
  border-radius: 50%;
  margin-right: 15px;
  span {
    font-weight: 700;
    color: #fff;
  }
  &:before {
    content: '';
    position: absolute;
    top: -30px;
    left: -30px;
    width: 100px;
    height: 100px;
    background: ${({ theme, color }) => theme.colors[color]};
    border-radius: 250px;
    filter: blur(40px);
    opacity: 0.2;
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

const Toast: React.FC<Props> = ({ message, type, heading }) => {
  let toastMessage =
    message ?? (type === 'error' && !message ? 'Something went wrong!' : '')

  return (
    <Wrapper>
      <IconWrapper color={getColor(type)}>
        {type === 'success' ? (
          <Icon size={12} src={getIcon(type)} excludeDarkMode />
        ) : (
          <span>{getIcon(type)}</span>
        )}
      </IconWrapper>
      <div>
        <Heading>{heading ?? type}</Heading>
        {toastMessage && <Text>{toastMessage}</Text>}
      </div>
    </Wrapper>
  )
}

const toast = ({ message, type, heading }: Props) => {
  sendToastMessage(<Toast message={message} type={type} heading={heading} />, {
    toastId: `update-${type}`,
    className: `toast-${type}`,
  })
}

export default toast
