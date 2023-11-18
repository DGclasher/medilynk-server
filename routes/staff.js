import express from "express";
import { verify_staff } from "../middleware/auth.js";
import {
  create_appointment,
  update_appointment,
  delete_appointment,
  read_appointment_all,
} from "../controllers/appointment.js";

const router = express.Router();

router.get("/appointment", verify_staff, read_appointment_all)
router.post("/appointment/create", verify_staff, create_appointment)
router.patch("/appointment/update", update_appointment)
router.delete("/appointment/delete/:id", verify_staff, delete_appointment)

export default router