import { CSSProperties } from 'styled-components'

type Color = CSSProperties['color']

export const defaultColors = [
  '#5d7ef4',
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#b388ff',
  '#3f51b5',
  '#2196f3',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#aeea00',
  '#7fc241',
]

const getRandomColor = (occupiedColors: Color[]): Color => {
  const uniqueColorsArray = defaultColors.filter(
    color => !occupiedColors.includes(color)
  )
  const randomIndex = Math.floor(Math.random() * uniqueColorsArray.length)

  return uniqueColorsArray[randomIndex] || uniqueColorsArray[0]
}

export default getRandomColor
