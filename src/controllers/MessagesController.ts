
import { Request, Response } from "express";
import { MessagesService, } from "../services/MessagesService";

class MessagesController {

    async create(request: Request, response: Response) {

        const messagesService = new MessagesService();
        const { admin_id, text, user_id } = request.body

        const message = await messagesService.create({

            admin_id,
            text,
            user_id
        })
        return response.json(message);
    }
    //localhost:3333/messages/iddoUsuario 
    async showByUser(request: Request, response: Response) {

        const { id } = request.params;
        const messagesService = new MessagesService();
        const list = await messagesService.listByUser(id);
        return response.json(list);

    }

}
export { MessagesController }