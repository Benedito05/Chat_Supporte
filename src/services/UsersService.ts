
import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRepository';


class UsersService {
    private usersRepository: Repository<User>
    constructor() {

        this.usersRepository = getCustomRepository(UsersRepository)
    }
    async create(email: string) {

        //Verificar Se o usuario Existe;
        const userExists = await this.usersRepository.findOne({
            email,
        })

        // Se  existir retornar o user;
        if (userExists) {
            return userExists;
        }

        // Se nao  existir Salvar no Banco;
        const user = this.usersRepository.create({
            email
        });
        await this.usersRepository.save(user);

        return user;
    }
    async findByEmail(email: string) {
        const useremail = await this.usersRepository.findOne({
            email,
        })
        return useremail;

    }
}
export { UsersService }