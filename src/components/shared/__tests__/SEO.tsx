import SEO from 'components/shared/SEO'
import { ReactElement } from 'react'
import { cleanup, render } from '__mocks__/utils'

afterEach(cleanup)

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: ReactElement }) => children,
  }
})

describe('SEO', () => {
  it('renders default meta title', () => {
    render(<SEO />, {
      container: document.head,
    })

    expect(document.title).toBe('noteIT!')
  })

  it('renders provided meta title', () => {
    render(<SEO title="Dashboard" />, {
      container: document.head,
    })

    expect(document.title).toBe('Dashboard | noteIT!')
  })
})
