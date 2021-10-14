const characterMapping: { [x: number]: string } = {
  106: '*',
  110: '.',
  173: '-',
  189: '-',
  190: '.',
}

const characterShiftMapping: { [x: number]: string } = {
  56: '*',
  221: '*',
  190: '.',
}

const trackCharacters = (
  history: string[] = [],
  e: React.KeyboardEvent<{}>
) => {
  const { keyCode, shiftKey } = e

  if (history.length > 2) {
    history = history.slice(1)
  } else {
    history = history.slice()
  }

  let character = shiftKey
    ? characterShiftMapping[keyCode]
    : characterMapping[keyCode]
  if (!character) {
    character = String.fromCharCode(keyCode)
  }
  history.push(character)
  return history
}

export default trackCharacters
