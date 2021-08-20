import styled from 'styled-components'

import Icon from 'components/shared/Icon'

const Button = styled.button<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${({ theme, active }) =>
    active ? theme.colors.cardBorder : 'transparent'};
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  width: 50px;
  height: 50px;
  &:hover {
    background: ${({ theme, active }) =>
      active ? theme.colors.cardBorder : theme.colors.element};
  }
`

const IconButton: React.FC<{
  icon: string
  active?: boolean
  size?: number
}> = ({ icon, active, size, ...props }) => (
  <Button active={!!active} {...props}>
    <Icon src={icon} size={size} />
  </Button>
)

export default IconButton
