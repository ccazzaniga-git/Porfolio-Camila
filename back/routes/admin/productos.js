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


router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {  //agregar.hbs
    layout: 'admin/layout'
  });
});


router.post('/agregar', async (req, res, next) => {
  try {
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "" && req.body.precio != "") {
      await productosModel.insertProducto(req.body);
      res.redirect('/admin/productos');
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son obligatorios'
      });
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo el producto'
    });
  }
});

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await productosModel.deleteProductoById(id);
  res.redirect('/admin/productos');
});

router.get('/modificar/:id', async (req, res, next) => {
  let id = req.params.id;
  let producto = await productosModel.getProductoById(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    producto
  });
});

module.exports = router;
