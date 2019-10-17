module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db')

        db.create_product().then( () => res.sendStatus(200)).catch(err => {
            res.status(500).send({errorMessage: 'bombed!'});
                console.log(err)
        })
        
    },
    getOne: (req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.read_product(id).then(() => res.sendStatus(200)).catch(err => {
            res.status(500).send({errorMessage:'bang!'});
            console.log(err)
        })
    },
    getAll: (req, res, next) => {
        const db = req.app.get('db')
        db.read_products().then(() => res.sendStatus(200)).catch(err => {
            res.status(500).send({errorMessage:'bang!'});
            console.log(err)
        })
    },
    update: (req, res, next) => {
        
        const {params, query} = req;
        const db = req.app.get('db')
        db.update_product([params.id, query.dec]).then(() => res.sendStatus(200)).catch(err => {
            res.status(500).send({errorMessage:'bang!'});
            console.log(err)
        })
    },
    deleteProduct: (req, res, next) => {
        const {id} = req.params
        const db = req.app.get('db')
        db.delete_product(id).then(() => res.sendStatus(200)).catch(err => {
            res.status(500).send({errorMessage:'bang!'});
            console.log(err)
        })
    }

}