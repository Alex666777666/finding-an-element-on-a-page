export const getTitleElement = title => {
  const titleElem = document.querySelector('.title')
  console.dir(titleElem)
  return titleElem
}

getTitleElement()

export const getInputElement = text => {
  const inputElem = document.querySelector('input[type=text]')
  console.dir(inputElem)
  return inputElem
}

getInputElement()
