import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";
http.listen(3333, () => {
    console.log("Servidor Rodando na porta 3333...");
});
