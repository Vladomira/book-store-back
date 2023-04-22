import { Router } from "express";
const router = new Router();
import Books from "../controllers/book";

router.get("/", Books.list);
router.put("/:bookId", Books.modify);
router.delete("/:bookId", Books.delete);

module.exports = router;
