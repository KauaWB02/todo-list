const app = require('./app');
const { server } = require('./config/app');

app.listen(server.port, () => {
    console.clear();
    console.log(`Servidor online pacero! ${server.port}`);
})
