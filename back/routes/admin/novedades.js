var express = require('express');
var router = express.Router();

/* lista de novedades */
router.get('/', async function (req, res, next) {
  res.render('admin/novedades', { //novedades.hbs
    layout: 'admin/layout',
    usuario: req.session.nombre
  });
});


module.exports = router;
