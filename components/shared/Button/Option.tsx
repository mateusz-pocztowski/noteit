import styled from 'styled-components'
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
  opacity: 0;
  &:hover,
  &.active {
    opacity: 1;
    background: ${({ theme }) => theme.colors.hover100};
  }
`

const OptionButton: React.FC = ({ ...props }) => (
  <OptionBtn {...props}>
    <Icon src={threeDotsIcon} size={22} />
  </OptionBtn>
)

export default OptionButton
