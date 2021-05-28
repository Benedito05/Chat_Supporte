
import { Request, Response } from "express";

import { SettingsServices } from "../services/SettingsServices";
class SettingsController {

    async create(req: Request, res: Response) {
        const { chat, username } = req.body;
        const settingsServices = new SettingsServices();

        try {
            const settings = await settingsServices.create({ chat, username });
            return res.json(settings);
        } catch (err) {
            return res.status(400).json({
                message: err.message
            });
        }
    }
    // alterar estado do chat visivel ou nao por meio das rotas

    async findByUsername(request: Request, response: Response) {

        const { username } = request.params;
        const settingsServices = new SettingsServices();
        const settings = await settingsServices.findByUsername(username);
        return response.json(settings);
    } 


    async update(request: Request, response: Response) {

        const { username } = request.params;
        const { chat } = request.body;
        const settingsServices = new SettingsServices();
        const settings = await settingsServices.update(username, chat);
        return response.json(settings);
    }



}


export { SettingsController };