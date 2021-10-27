import { useMemo } from 'react'
import styled from 'styled-components'

import Icon from 'components/shared/Icon'

import type { Command } from 'types/editor'
import { KEY_BINDINGS } from '../../config'
import translateKeyCode from 'utils/translateKeyCode'

const ButtonTooltip = styled.span`
  position: absolute;
  bottom: calc(100% + 9px);
  background: ${({ theme }) => theme.colors.white};
  padding: 3px 6px;
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 600;
  box-shadow: ${({ theme }) => theme.colors.cardShadow100};
  white-space: nowrap;
  border-radius: 4px;
  z-index: 99;
  left: 50%;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-50%);
  transition: 0.05s;
  font-size: 11px;
  &:before {
    content: '';
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${({ theme }) => theme.colors.white};
    z-index: 1;
  }
`

const Button = styled.button<{ active?: boolean }>`
  position: relative;
  background: ${({ theme, active }) =>
    active ? theme.colors.active : 'transparent'};
  min-width: 32px;
  height: 32px;
  transition: 0.2s;
  margin: 0 1px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${({ theme, active }) =>
      active ? theme.colors.active : theme.colors.hover};
    & > ${ButtonTooltip} {
      opacity: 1;
      visibility: visible;
      transition-delay: 0.2s;
    }
  }
`

export const Spacer = styled.span`
  display: flex;
  align-items: center;
  margin: 0 5px;
  width: 2px;
  height: 32px;
  background: ${({ theme }) => theme.colors.hover};
`

type Props = {
  callback: any
  label: string
  icon: any
  iconSize?: number
  active?: boolean
  command?: Command
}

const ToolbarButton: React.FC<Props> = ({
  callback,
  label,
  icon,
  active,
  iconSize = 18,
  command,
}) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    callback()
  }

  const shortcut = useMemo(
    () =>
      (
        KEY_BINDINGS.find(binding => binding.command === command)?.bind.filter(
          code => ['string', 'number'].includes(typeof code)
        ) as (string | number)[] | undefined
      )
        ?.map(code => translateKeyCode(code))
        .join('+'),
    [KEY_BINDINGS, command]
  )

  return (
    <Button aria-label={label} active={active} onMouseDown={handleMouseDown}>
      <ButtonTooltip>
        {label} {shortcut && `(${shortcut})`}
      </ButtonTooltip>
      <Icon size={iconSize} src={icon} alt="" />
    </Button>
  )
}

export default ToolbarButton
