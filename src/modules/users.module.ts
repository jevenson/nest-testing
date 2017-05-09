import { Module, MiddlewaresConsumer } from 'nest.js';
import { UsersController } from './../controllers/users.controller';
import { UsersService } from './../components/users.service';
import { AuthMiddleware } from './../middleware/auth.middleware';

@Module({
    controllers: [
        UsersController
    ],
    components: [
        UsersService
    ]
})
export class UsersModule {
    configure(consumer: MiddlewaresConsumer) {
        console.log("configure start");
        consumer.apply(AuthMiddleware).forRoutes(UsersController);
        console.log("configure end");
    }
}