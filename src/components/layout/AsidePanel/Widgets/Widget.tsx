import styled from 'styled-components'
import { motion } from 'framer-motion'

import { cardVariants } from 'theme/variants'

import { Text } from 'components/shared/Typography'

const Wrapper = styled(motion.div).attrs({
  initial: 'exit',
  animate: 'enter',
  exit: 'exit',
  variants: cardVariants,
})`
  & + & {
    margin-top: 25px;
  }
`

const Widget: React.FC<{ label?: string }> = ({ children, label }) => (
  <Wrapper>
    {label && (
      <Text size={20} weight={600} family="secondary" margin="1.25rem">
        {label}
      </Text>
    )}
    {children}
  </Wrapper>
)

export default Widget
