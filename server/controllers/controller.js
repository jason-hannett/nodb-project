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
     let wizardObj = wizardsArray.find(wizard => +id === wizard.id)
     wizardObj = {
         id: wizardObj.id,
         name: req.body.name || wizardObj.name,
         image: req.body.image || wizardObj.image
     }
     console.log(wizardObj)
     let index = wizardsArray.findIndex(wizard => wizard.id === wizardObj.id);
     wizardsArray.splice(index, 1, wizardObj)
     res.status(200).send(wizardsArray)
   },

   removeWizard: (req, res) => {
      let {id} = req.params
      const index = wizardsArray.findIndex(wizard => wizard.id === +id)
      wizardsArray.splice(index, 1)
      res.status(200).send(wizardsArray)
   }


}