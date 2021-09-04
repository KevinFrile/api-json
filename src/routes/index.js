const {Router} = require('express');
const router = Router();

router.get('/paises',(req, res) => {

    res.json({"title":"hola"});

});

module.exports = router;