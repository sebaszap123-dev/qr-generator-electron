const qrcode = require('qrcode');

const generateButton = document.getElementById('generate-button')
const qrCodeDiv = document.getElementById('qr-code')
const qrTextInput = document.getElementById('qr-text')

generateButton.addEventListener('click', () => {
  const qrText = qrTextInput.value
  if (qrText) {
    qrcode.toDataURL(qrText, (err, url) => {
      if (err) {
        console.error(err)
      } else {
        const qrImg = document.createElement('img')
        qrImg.src = url
        qrCodeDiv.innerHTML = ''
        qrCodeDiv.appendChild(qrImg)
      }
    })
  }
})
