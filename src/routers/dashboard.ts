const routerDashboard = require('express').Router()

routerDashboard.get('/', (req, res) => {
  res.json({
    error: null,
    data: { 
      title: 'Esta es una ruta protegida',
      user: req.user
    }
  })
})

module.exports = routerDashboard