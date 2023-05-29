import Editor from 'components/layout/Editor'
import {
  cleanup,
  render,
  getByText,
  fireEvent,
  createEvent,
} from '__mocks__/utils'
import { noop } from 'lodash'

afterEach(cleanup)

const mockCategories = [
  {
    id: '1',
    color: '#000000',
    label: 'Test category 1',
    primary: true,
  },
  {
    id: '2',
    color: '#000000',
    label: 'Test category 2',
    primary: false,
  },
]

it('renders editor', () => {
  const { container } = render(
    <Editor
      onCategoryChange={noop}
      categories={mockCategories}
      activeCategory={mockCategories[0]}
      onSave={noop}
    />
  )

  expect(container).not.toBe(null)
})

it('renders editor title', () => {
  const { container } = render(
    <Editor
      title="Title"
      onCategoryChange={noop}
      categories={mockCategories}
      activeCategory={mockCategories[0]}
      onSave={noop}
    />
  )

  const input = container.querySelector('[data-testid="title-input"]')

  expect(input).toHaveValue('Title')
})

it('renders editor toolbar', () => {
  const { container } = render(
    <Editor
      onCategoryChange={noop}
      categories={mockCategories}
      activeCategory={mockCategories[0]}
      onSave={noop}
    />
  )

  const toolbar = container.querySelector('[data-testid="toolbar"]')

  expect(toolbar).not.toBe(null)
})

it('renders provided text input', () => {
  const { container } = render(
    <Editor
      initialState={{
        blocks: [
          {
            key: '1',
            text: 'text',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
          },
        ],
        entityMap: {},
      }}
      onCategoryChange={noop}
      categories={mockCategories}
      activeCategory={mockCategories[0]}
      onSave={noop}
    />
  )

  expect(getByText(container, 'text')).toHaveTextContent('text')
})

it('renders provided categories', () => {
  const { container } = render(
    <Editor
      onCategoryChange={noop}
      categories={mockCategories}
      activeCategory={mockCategories[0]}
      onSave={noop}
    />
  )

  const text = mockCategories[1].label

  expect(getByText(container, text)).toHaveTextContent(text)
})

it('renders pasted text', () => {
  const { container } = render(
    <Editor
      onCategoryChange={noop}
      categories={mockCategories}
      activeCategory={mockCategories[0]}
      onSave={noop}
    />
  )

  const textarea = container.querySelector<HTMLElement>(
    '.public-DraftEditor-content'
  )!

  const event = createEvent.paste(textarea, {
    clipboardData: {
      types: ['text/plain'],
      getData: () => 'hello',
    },
  })

  fireEvent(textarea, event)

  expect(getByText(textarea, 'hello')).toHaveTextContent('hello')
})
