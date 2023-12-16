import { Request, Response } from "express";

export default class ApiHealthController {
  static async HealthCheck(req: Request, res: Response) {
    res.status(200).send("Ok!");
  }
}
