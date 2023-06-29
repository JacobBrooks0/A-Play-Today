const Show  = require('../models/showModel')

class ShowController{

    static async getAllShows(req,res) {
        try {
            const data = await Show.getAllShows()
            res.status(200).json(data)

        } catch(error) {
            console.log(error)
            res.status(500).json({error: `Internal Server Error - ${error}`})
        }
    }

    
    static async createShow(req,res) {
        const show = req.body
        try { 
            const newShow = await Show.createShow(show)
            res.status(201).json(newShow)

        } catch (error) {
            res.status(500).json({Error: `Error - ${error}`})
        }
    }

    static async getShowById(req,res){
        const { id } = req.params
        try{
            const show = await Show.getShowById(id)
            if(show){
                res.status(200).json(show)
            } else {
                res.status(404).json({Error:`Show not found!`})
            }
        } catch(error){
            res.status(500).json({Error: `Oops something went wrong - ${error}`})
        }
    }

    static async updateShow (req,res){
        const { id } = req.params
        const newShow = req.body
        try{
            const show = await Show.updateShow(id,newShow)
            if(show){
                res.status(200).json(show)
            } else {
                res.status(404).json({Error:`Show not found!`})
            }
        } catch(error){
            res.status(500).json({Error: `Oops something went wrong - ${error}`})
        }
    }

}
module.exports = ShowController
