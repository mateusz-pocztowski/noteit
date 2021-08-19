import { Row, Col } from 'components/shared/Grid'
import { Heading, Text } from 'components/shared/Typography'
import { Wrapper, InnerWrapper } from 'components/layout/Homepage/shared'

type Props = {
  title: string
  text: string
}

const Verify: React.FC<Props> = ({ title, text }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Row>
          <Col xs={24}>
            <Heading>{title}</Heading>
            <Text align="center">{text}</Text>
          </Col>
        </Row>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Verify
