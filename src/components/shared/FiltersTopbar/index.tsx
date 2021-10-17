import styled from 'styled-components'

import { ReactSVG } from 'react-svg'

import Button from 'components/shared/Button'
import { Row, Col } from 'components/shared/Grid'

import plusSVG from 'assets/icons/plus.svg'

type Props = {
  createButton: {
    callback: () => void
    text: string
  }
}

const Wrapper = styled.nav`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  margin-bottom: 30px;
`

const Options = styled(Row)`
  display: flex;
  justify-content: flex-end;
  padding: 15px 0 5px 0;
`

const FiltersTopbar: React.FC<Props> = ({ createButton }) => {
  return (
    <Wrapper>
      <div />
      <Options>
        <Col>
          <Button width="240px" onClick={createButton.callback}>
            <ReactSVG src={plusSVG} />
            <span>{createButton.text}</span>
          </Button>
        </Col>
      </Options>
    </Wrapper>
  )
}

export default FiltersTopbar
