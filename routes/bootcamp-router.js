import { 
    createData, 
    readData, 
    updateData, 
    deleteData 
} from'../controllers/bootcamp-controller';
import express from 'express';
const router = express.Router();
//const router = express.Router();
 
//router.get('/reports', getData);
router.get('/reports', readData);
router.post('/addreport', createData);
router.patch('/reports/:id', updateData);
router.delete('/reports/:id', deleteData);

module.exports = router;