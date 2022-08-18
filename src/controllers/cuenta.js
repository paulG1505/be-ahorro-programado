import { connect } from '../database'


export const getAccountById = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("Select * from cuenta_banco where id = ?", [
        req.params.id
    ]);
    rows.length > 0 ? res.json(rows[0]) : res.json({ result: "No hay datos" })
}


export const saveAccount = async (req, res) => {
    const connection = await connect();
    const [result] = await connection.query('Insert into cuenta_banco (num_cuenta, disponible ,fecha_apertura,id_cliente,estado ) values (?,?,?,?,?)', [
        req.body.title,
        req.body.description
    ])
    res.json({
        id: result.insertId,
        ...req.body
    })
}


export const updateAccount = async (req, res) => {
    const connection = await connect();
    const [result] = await connection.query("update cuenta_banco set ? where id = ?", [
        req.body,
        req.params.id
    ])
    //res.sendStatus(204)
    result.affectedRows > 0 ? res.json({ status: 'Registro actualizado' }) : res.json({ status: "No se encontro ID" })
}