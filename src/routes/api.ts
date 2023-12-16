import { Router } from "express";
import { endpoint } from "../functions/endpoint";
import ApiHealthController from "../controllers/ApiHealthController";

const router = Router();

/**
 * GET /api/health
 * @tag Api
 * @response 200
 * @responseContent 200.text/css
 * @response default
 * @responseContent {Error} default.application/json
 */
router.get("/health", endpoint(ApiHealthController.HealthCheck));

export default router;
