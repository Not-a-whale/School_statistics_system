import {getDashboardStats} from "../controllers/dashboardController.js";
import router from "./generalRoutes.js";
import {getDepartmentsCount} from "../controllers/departmentsContoller.js";

router.get("/departmentsCount", getDepartmentsCount);

export default router;
