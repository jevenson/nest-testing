import { Component, HttpException } from 'nest.js';
import { User } from './../models/user.model';

@Component()
export class UsersService {
    public users: Array<User> = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Alice Caeiro" },
        { id: 3, name: "Who Knows" }
    ];

    public async getAllUsers(): Promise<Array<User>> {
        return await Promise.resolve(this.users);
    }

    public async getUser(id: number): Promise<User> {
        const user = this.users.find((user) => user.id === id);

        if (!user) {
            throw new HttpException("User not found", 404);
        }

        return await Promise.resolve(user);
    }

    public async addUser(user): Promise<void> {
        this.users.push(user);
        return await Promise.resolve();
    }
}
