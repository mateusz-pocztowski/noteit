import styled from 'styled-components'

import Icon from 'components/shared/Icon'

type IconButtonProps = {
  as?: React.ElementType
  icon: string
  active?: boolean
  size?: number
  tooltip?: string
} & React.HTMLAttributes<HTMLButtonElement>

const Tooltip = styled.span`
  position: absolute;
  top: 50%;
  right: calc(100% + 10px);
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
  padding: 3px 5px;
  white-space: nowrap;
  z-index: 10;
  transition: all 0.2s ease 0s;
  font-weight: 600;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8) translate(10px, -50%);
  visibility: hidden;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 2px;
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(0, -50%);
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid ${({ theme }) => theme.colors.white};
  }
`

const Button = styled.button<{ active: boolean }>`
  position: relative;
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
    background: ${({ theme }) => theme.colors.cardBorder};
    ${Tooltip} {
      visibility: visible;
      opacity: 1;
      transform: translate(0, -50%);
    }
  }
`

const IconButton: React.FC<IconButtonProps> = ({
  as = 'button',
  icon,
  active,
  size,
  tooltip,
  ...props
}) => (
  <Button as={as} active={!!active} {...props}>
    {tooltip && <Tooltip>{tooltip}</Tooltip>}
    <Icon src={icon} size={size} />
  </Button>
)

export default IconButton
