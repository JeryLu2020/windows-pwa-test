var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
    res.send('all');
});

router.post('/add',(req, res) => {
    res.send('add');
});

router.post('/edit',(req, res) => {
    res.send('edit');
});

router.post('/delete',(req, res) => {
    res.send('delete');
});

module.exports = router;
