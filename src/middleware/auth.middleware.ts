import { HttpException } from '@nestjs/core';
import { Middleware, NestMiddleware } from '@nestjs/common';

@Middleware()
export class AuthMiddleware implements NestMiddleware {
    public resolve() {
        return (req, res, next) => {
            throw new HttpException('Middleware was hit', 401);
        }
    }
}