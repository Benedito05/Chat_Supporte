import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
import { MessagesController } from "./controllers/MessagesController"







const routes = Router();
const settingsController = new SettingsController();
const userscontroller = new UsersController();
const messagescontroller = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
// rota para actualizar o estado do chat visivel ou nao
routes.put("/settings/:username", settingsController.update);

routes.post("/users", userscontroller.create);

routes.post("/messages", messagescontroller.create)
routes.get("/messages/:id", messagescontroller.showByUser)
export { routes };