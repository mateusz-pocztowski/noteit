import styled, { CSSProperties } from 'styled-components'

import { ReactSVG } from 'react-svg'

import Button from 'components/shared/Button'
import { Row, Col } from 'components/shared/Grid'

import plusSVG from 'assets/icons/plus.svg'

type Category = {
  text: string
  callback: () => void
  active: boolean
  color?: CSSProperties['color']
}

type Props = {
  createButton: {
    callback: () => void
    text: string
  }
  categories: Category[]
}

const Wrapper = styled.nav`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  margin-bottom: 30px;
`

const Categories = styled(Row)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px 15px 5px 0;
  min-width: 40%;
`

const Options = styled(Row)`
  display: flex;
  justify-content: flex-end;
  padding: 15px 0 5px 0;
`

const FiltersTopbar: React.FC<Props> = ({ createButton, categories }) => {
  return (
    <Wrapper>
      <Categories>
        {categories.map(({ text, callback, active, color }) => (
          <Col key={text}>
            <Button color={color} onClick={callback} muffled active={active}>
              {text}
            </Button>
          </Col>
        ))}
      </Categories>
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
