const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const wizardsCtrl = require('./controllers/controller.js')

app.use(cors())
app.use(express.json())

console.log(wizardsCtrl.getWizards)
app.get('/api/wizards', wizardsCtrl.getWizards)
app.post('/api/wizards', wizardsCtrl.addWizard)
app.put('/api/wizards/:id', wizardsCtrl.updateWizard)
app.delete('/api/wizards/:id', wizardsCtrl.removeWizard)

app.listen(port, () => console.log(`server is running on ${port}`))