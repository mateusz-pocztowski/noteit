import styled from 'styled-components'
import { ReactSVG } from 'react-svg'
import { motion, Variants } from 'framer-motion'

import Button from 'components/shared/Button'

import { cardVariants } from 'theme/variants'

import emptySVG from 'assets/icons/empty-content.svg'

type Props = {
  variants?: Variants
  icon?: any
  text: string
  subtext?: string
  button: {
    text: string
    callback: () => void | Promise<void>
  }
}

const Wrapper = styled(motion.div)`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%) !important;
  text-align: center;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const Text = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin: -30px 0 0;
`

const SubText = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-weight: 500;
  font-size: 1.7rem;
  margin: 10px 0 20px;
  & + button {
    margin: 0 auto;
  }
`

const EmptyView: React.FC<Props> = ({
  variants = cardVariants,
  icon = emptySVG,
  text,
  subtext,
  button,
}) => (
  <Wrapper initial="exit" animate="enter" exit="exit" variants={variants}>
    <div>
      <ReactSVG src={icon} />
      <Text>{text}</Text>
      {subtext && <SubText>{subtext}</SubText>}
      <Button onMouseDown={button.callback}>{button.text}</Button>
    </div>
  </Wrapper>
)

export default EmptyView
