import { HttpException } from '@nestjs/core';
import { Middleware, NestMiddleware } from '@nestjs/common';
import { UsersService } from './../components/users.service';

@Middleware()
export class AuthMiddleware implements NestMiddleware {
    constructor(private usersService: UsersService) { }

    public resolve() {
        return (req, res, next) => {
            const userName = req.headers["x-access-token"];
            const users = this.usersService.users;

            const user = users.find((user) => user.name === userName);

            if (!user) {
                throw new HttpException('User not found.', 401);
            }
            
            req.user = user;
            next();
        }
    }
}