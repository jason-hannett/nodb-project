const wizardsArray = []
let id = 0

module.exports = {
   getWizards: (req, res) => {
      res.status(200).send(wizardsArray)
   },

   addWizard: (req, res) => {
      console.log(req.body)
      req.body.id = id
      id++
      wizardsArray.push(req.body)
      res.status(200).send(wizardsArray)
   },

   updateWizard: (req, res) => {
     let {id} = req.params
     const {name} = req.body
     let index = wizardsArray.findIndex(wizard => wizard.id === +id)
     wizardsArray[index].name = name
     res.status(200).send(wizardsArray)
   },

   removeWizard: (req, res) => {
      let {id} = req.params
      const index = wizardsArray.findIndex(wizard => wizard.id === +id)
      wizardsArray.splice(index, 1)
      res.status(200).send(wizardsArray)
   }


}