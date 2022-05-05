const routerDashboard = require('express').Router();

routerDashboard.get('/', (req, res) => {
  console.log(req.body);
  res.json({
    error: null,
    data: {
      title: 'Esta es una ruta protegida',
      user: req.username,
    },
  });
});

module.exports = routerDashboard;