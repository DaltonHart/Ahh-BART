function index(req, res) {
    res.json({
      message: 'Welcome to AHH-BART!',
      documentation_url: 'https://github.com/FannyV31/Ahh-BART/',
      base_url: 'localhost:3000',
      endpoints: [
        {
          method: 'GET', path: '/api', description: 'Describes available endpoints'
        }
      ]
    });
  }
  
  // exports above funciton index 
  module.exports = { index: index }
  