import variables from '@/style/variables.module.less'
const colorList = Object.entries(variables).map(([key, color]) => {
  return { key, color }
})

const updateColorWeak = (isColorWeak) => {
  const app = document.getElementById('html')
  isColorWeak ? app!.classList.add('colorWeak') : app!.classList.remove('colorWeak')
}

const updateGrayMode = (isGrayMode) => {
  const app = document.getElementById('html')
  isGrayMode ? app!.classList.add('grayMode') : app!.classList.remove('grayMode')
}

export { colorList, updateColorWeak, updateGrayMode }
