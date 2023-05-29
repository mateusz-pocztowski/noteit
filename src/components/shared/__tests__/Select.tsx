import Select from 'components/shared/Select'
import { cleanup, render, getByText } from '__mocks__/utils'

afterEach(cleanup)

const mockOptions = [
  {
    id: '1',
    label: 'Test option 1',
  },
  {
    id: '2',
    label: 'Test option 2',
  },
]

describe('Select', () => {
  it('renders custom placeholder', () => {
    const { container } = render(
      <Select placeholder="Test placeholder" options={mockOptions} />
    )

    const activeOptionEl = container.querySelector(
      '[data-testid="active-option"]'
    )

    expect(activeOptionEl).toHaveTextContent('Test placeholder')
  })

  it('renders active option', () => {
    const { container } = render(
      <Select options={mockOptions} value={mockOptions[0].id} />
    )

    const activeOptionEl = container.querySelector(
      '[data-testid="active-option"]'
    )

    expect(activeOptionEl).toHaveTextContent(mockOptions[0].label)
  })

  it('renders provided options', () => {
    const { container } = render(<Select options={mockOptions} />)

    const text = mockOptions[0].label

    expect(getByText(container, text)).toHaveTextContent(text)
  })
})
