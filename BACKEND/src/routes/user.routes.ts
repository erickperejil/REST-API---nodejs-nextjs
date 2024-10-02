import  express from 'express';
import {createUser, deleteUser, getUsers, loginUser, updateUser} from '../controllers/user.controller';


const router = express.Router();


router.post('/new', createUser);
router.get('/', getUsers);
router.put('/update/:id', updateUser);
router.put('/delete/:id', deleteUser);
router.put('/login', loginUser);


export default router;