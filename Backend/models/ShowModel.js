const db = require('../database/db')
require("dotenv").config()


class Show{
    static async getAllShows () {
        const query = 'SELECT * FROM show'
        const { rows } = await db.query(query)
        return rows
    }

    static async createShow(show){
        const {name, duration, genre} = show 
        const query = 'INSERT INTO show# (name, duration, genre) VALUES ($1, $2, $3) RETURNING *'
        const values =  [name, duration, genre]
        const {rows} = await db.query(query,values)
        return rows[0]

    }

    static async getShowById(id){
        const query = 'SELECT * FROM show WHERE show_id = $1'
        const { rows } = await db.query(query,[id])
        return rows [0]
    }

    static async updateShow(id, show){
        const { name, duration, genre} = show
        const query = 'UPDATE show SET name = $1, duration = $2, genre=$3,  WHERE show_id = $4 RETURNING *'
        const values =  [name, duration, genre, id]
        const {rows} = await db.query(query, values)
        return rows[0]
    }


}

module.exports = Show
