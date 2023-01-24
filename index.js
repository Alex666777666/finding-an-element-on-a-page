export const getTitleElement = title => {
  const titleElem = document.querySelector('title')
  console.dir(titleElem)
}

getTitleElement()

export const getInputElement = text => {
  const inputElem = document.querySelector('input[type=text]')
  console.dir(inputElem)
}

getInputElement()
