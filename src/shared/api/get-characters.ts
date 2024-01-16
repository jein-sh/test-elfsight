import { BASE_URL, defaultErrorMessage, genderArr, statusArr } from './consts'


export const getCharacters = async (
  filterString?: string,
  options?: RequestInit,
  baseUrl = BASE_URL,
) => {

  let url = `${baseUrl}`;
  let requestString = ''

  if (filterString) {
    const words = filterString.toLowerCase().split(' ').filter(s => s !== '')

    console.log(words)

    const genderWord = words.find(word => genderArr.includes(word))
    console.log(genderWord)

    if (genderWord) {
      const genderIndex = words.indexOf(genderWord);
      words.splice(genderIndex, 1)

      requestString += `gender=${genderWord}&`
    }

    console.log(words)

    const statusWord = words.find(word => statusArr.includes(word))

    if (statusWord) {
      const statusIndex = words.indexOf(statusWord);
      words.splice(statusIndex, 1)
      requestString += `status=${statusWord}&`
    }

    let nameString = ''
    
    words.map(word => {
      return nameString += word + ' '
    })

    if (nameString.length) {
      requestString += `name=${nameString}&`
    }

    url = `${baseUrl}/?${requestString.slice(0,-1)}`
  } else {
    url = baseUrl;
  }
  
  const response = await fetch(url, options)

  const body = await response.json()

  if (!response.ok) {
    throw new Error(body.error ?? defaultErrorMessage)
  }

  return body
}
