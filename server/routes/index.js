const Router = require("express");
const router = new Router();
import userRouter from "./userRouter";
import bookRouter from "./bookRouter";

router.use("/user", userRouter);
router.use("/books", bookRouter);

module.exports = router;
