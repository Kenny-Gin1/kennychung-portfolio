export function toText(node) {
  console.log('REACHED TO TEXT')
  let tag = document.createElement('div')
  tag.innerHTML = node
  node = tag.innerText
  return node
}

export function shortenText(text, startingPoint, maxLength) {
  console.log('REACHED SHORTEN TEXT')
  return text.length > maxLength ? text.slice(startingPoint, maxLength) : text
}
