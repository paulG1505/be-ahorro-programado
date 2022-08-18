import { connect } from '../database'

export const getParametric = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('Select * from product_fin')
    res.json(rows)
}

export const updateTask = async (req, res) => {
    const connection = await connect();
    const [result] = await connection.query("update product_fin set ? where id = ?", [
        req.body,
        req.params.id
    ])
    //res.sendStatus(204)
    result.affectedRows > 0 ? res.json({ status: 'Registro actualizado' }) : res.json({ status: "No se encontro ID" })
}