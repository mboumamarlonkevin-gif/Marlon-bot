import connectToWhatsapp from '../Digi/crew.js'
import handleIncomingMessage from '../events/messageHandler.js'

(async() => {
  await connectToWhatsapp(handleIncomingMessage)
  .then(() => console.log('established !'))
})()