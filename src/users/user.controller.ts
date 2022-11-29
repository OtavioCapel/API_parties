import { Request, Response } from "express";
import { createSalt, encrypting } from "../shared/utils";

import UserSchema from './user.model';

export class UserController {

    public async getAllUsers(req: Request, res: Response): Promise<Response> {
        const users = await UserSchema.find();
        
        return res.json(users);
    }

    public async createUser(req: Request, res: Response): Promise<Response> {
        req.body.salt = createSalt();

        console.log(`>>>`,encrypting(req.body.password, req.body.salt)); 
        req.body.password = encrypting(req.body.password, req.body.salt).passwordHash
        const user = await UserSchema.create(req.body);
        return res.json(user)
    }

    public async getUserById(req: Request, res: Response): Promise<Response> {
        const user = await UserSchema.findById(req.params.id);
        
        if (!user) {
            return res.status(200).json({ message: 'user not found'})
        }

        return res.json(user)
    }

    public async updateUser(req: Request, res: Response): Promise<Response> {
       return res.json()
    }

    public async deleteUserById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const user = await UserSchema.findById(id);
        
        if (!user) {
            return res.status(200).json({ message: 'user not found'})
        }
        await UserSchema.deleteOne({_id: id})
        return res.json(user)
    }
}

// exportando uma instancia da classe pra acessar suas funções e valores. 
// poderiamos criar funções staticas (que não precisam de instancias para ser acessada), mais prefiro criando instancias
export default new UserController()