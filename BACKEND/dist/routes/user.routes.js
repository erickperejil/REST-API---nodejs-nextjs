"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.default.Router();
router.post('/new', user_controller_1.createUser);
router.get('/', user_controller_1.getUsers);
router.put('/update/:id', user_controller_1.updateUser);
router.put('/delete/:id', user_controller_1.deleteUser);
router.put('/login', user_controller_1.loginUser);
exports.default = router;
