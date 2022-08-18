import { connect } from '../database'


export const getCustomer = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("Select * from cliente where id = ?", [
        req.params.id
    ]);
    rows.length > 0 ? res.json(rows[0]) : res.json({ result: "No hay datos" })
}


export const saveCustomer = async (req, res) => {
    const connection = await connect();
    const [result] = await connection.query('Insert into cliente (nombre, identificacion,telefono,correo) values (?,?,?,?)', [
        req.body.title,
        req.body.description
    ])
    res.json({
        id: result.insertId,
        ...req.body
    })
}

export const deleteCustomer = async (req, res) => {
    const connection = await connect();
    const [result] = await connection.query("delete from cliente where id = ?", [
        req.params.id
    ]);
    result.affectedRows > 0 ? res.json({ status: 'registro eliminado' }) : res.json({ status: "No se encontro ID" })
}

export const updateCustomer = async (req, res) => {
    const connection = await connect();
    const [result] = await connection.query("update cliente set ? where id = ?", [
        req.body,
        req.params.id
    ])
    //res.sendStatus(204)
    result.affectedRows > 0 ? res.json({ status: 'Registro actualizado' }) : res.json({ status: "No se encontro ID" })
}