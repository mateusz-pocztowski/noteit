import { appVariants, editorVariants } from 'theme/variants'

const getMotionVariants = (route: string) => {
  switch (route) {
    case '/notes/[noteID]':
      return editorVariants
    default:
      return appVariants
  }
}

export default getMotionVariants
