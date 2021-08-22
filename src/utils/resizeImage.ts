const resizeImage = (base64Str: string, maxWidth = 400, maxHeight = 350) => {
  return new Promise<string>(resolve => {
    let img = new Image()
    img.src = base64Str
    img.onload = () => {
      let canvas = document.createElement('canvas')
      const MAX_WIDTH = maxWidth
      const MAX_HEIGHT = maxHeight
      let width = img.width
      let height = img.height

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width
          width = MAX_WIDTH
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height
          height = MAX_HEIGHT
        }
      }
      canvas.width = width
      canvas.height = height
      let ctx = canvas.getContext('2d')
      if (!ctx) return base64Str
      ctx.drawImage(img, 0, 0, width, height)
      resolve(canvas.toDataURL())
    }
  })
}

export const resizeImageFixed = (
  base64Str: string,
  width = 150,
  height = 150
) => {
  return new Promise<string>(resolve => {
    let img = new Image()
    img.src = base64Str
    img.onload = () => {
      let canvas = document.createElement('canvas')

      canvas.width = width
      canvas.height = height
      let ctx = canvas.getContext('2d')
      if (!ctx) return base64Str
      ctx.drawImage(img, 0, 0, width, height)
      resolve(canvas.toDataURL())
    }
  })
}

export default resizeImage
