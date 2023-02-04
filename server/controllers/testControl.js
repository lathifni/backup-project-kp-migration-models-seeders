const {program, kegiatan} = require('../models')

const controllers ={}

controllers.readProgram = async (req, res) => {
    // res.render('index', {title: 'Halo ini adalah read program'})
    const data = await program.findAll({include: kegiatan}).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}

module.exports = {controllers}