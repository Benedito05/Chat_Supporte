

import { getCustomRepository, Repository } from "typeorm";

import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";
interface ISettingsCreate {
    chat: boolean,
    username: string;
}


class SettingsServices {

    private settingsRepository: Repository<Setting>
    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRepository)
    }
    async create({ chat, username }: ISettingsCreate) {


        const userAlreadExists = await this.settingsRepository.findOne({
            username
        });

        if (userAlreadExists) {

            throw new Error("Usuario Já se encontra cadastrado!")
        }

        const settings = this.settingsRepository.create({

            chat,
            username,
        });
        await this.settingsRepository.save(settings);
        return settings;

    }
    // metodo para ocultar chat da aplicação ou dar visibilidade
    async findByUsername(username: string) {
        const settings = await this.settingsRepository.findOne({
            username,
        })
        return settings;
    }

    // actualizar estado do chat disponivel ou noa com tyeorm
    async update(username: string, chat: boolean) {


        await this.settingsRepository.createQueryBuilder().update(Setting).set({ chat }).where("username = :username", {
            username,
        }).execute();
    }
}
export { SettingsServices };