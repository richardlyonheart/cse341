const express = require('express');
const app = express();
const PORT = process.env.PORT || 8800;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/data', (req, res) => {
    res.json(data)
});

app.listen(PORT, () => {
    console.log('server running on port ${PORT}');
})