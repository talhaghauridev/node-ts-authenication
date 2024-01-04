import { Router } from "express";
import { getAllData } from "../controllers/text.controller";


const router = Router();


router.route("/data").get(getAllData)


export default router