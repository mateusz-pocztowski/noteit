import styled, { css } from 'styled-components'
import Icon from 'components/shared/Icon'
import threeDotsIcon from 'assets/icons/three-dots.svg'

const OptionBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px 0;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: ${({ theme }) => theme.colors.hover100};
  }
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition-delay: 0.2s;
    `}
`

type Props = {
  [x: string]: any
}

const OptionButton: React.FC<Props> = ({ ...props }) => (
  <OptionBtn {...props}>
    <Icon src={threeDotsIcon} size={22} />
  </OptionBtn>
)

export default OptionButton
