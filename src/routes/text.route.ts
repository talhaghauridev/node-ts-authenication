import { Router } from "express";
import { getALlData } from "../controllers/text.controller";


const router = Router();


router.route("/data").get(getALlData)


export default router