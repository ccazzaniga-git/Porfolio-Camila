var express = require('express');
var router = express.Router();
var productosModel = require('./../../models/productosModel');

/* lista de productos */
router.get('/', async function (req, res, next) {
  var productos = await productosModel.getProductos();
  res.render('admin/productos', { //productos.hbs
    layout: 'admin/layout',
    usuario: req.session.nombre,
    productos
  });
});


module.exports = router;
