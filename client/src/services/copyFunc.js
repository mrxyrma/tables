// export default function copyFunc(text) {
//   navigator.clipboard.writeText(text)
// }

export default function copyFunc(element) {
  const range = document.createRange()
  range.selectNode(element)
  window.getSelection().removeAllRanges()
  window.getSelection().addRange(range)
  document.execCommand('copy')
  window.getSelection().removeAllRanges()
}
