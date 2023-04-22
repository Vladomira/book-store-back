import { Router } from "express";
const router = new Router();
import UserController from "../controllers/user";
import Books from "../controllers/book";

router.post("/signup", UserController.signUp);
router.post("/:userId/books", Books.create);

module.exports = router;
