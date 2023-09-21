import express, { IRouter } from "express";
import { BaseController } from "./BaseController";
import { registerEndpoint } from "./RegisterEndpoint";


export class MainController extends BaseController {
  constructor() {
    super();
  }
  registerRoutes(app: IRouter): void {
    const router = express.Router();

    router.use(express.raw({ type: "application/json" }));
    router.use(express.urlencoded({ extended: true }));
    this.configureRoutes(router);

    registerEndpoint(router, "/login", this.login);
    app.use("/", router);
  }

  private login = async (data: any): Promise<any> => {
    console.log("cats are awesome");
  };

  private configureRoutes(app: express.IRouter) {
    const router = express.Router();

    app.use("/core", router);
  }
}
