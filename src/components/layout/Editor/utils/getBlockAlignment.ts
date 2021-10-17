import type { ContentBlock } from 'draft-js'
import type { AlignType } from 'types/editor'
import { ALIGN_TYPES } from '../config'

export const getBlockAlignment = (block: ContentBlock) => {
  let style: AlignType = 'left'
  block.findStyleRanges(
    e => {
      style = ALIGN_TYPES.find(type => e.hasStyle(type)) || 'left'
      return false
    },
    () => null
  )
  return style
}
