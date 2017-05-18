import { Module, MiddlewaresConsumer } from '@nestjs/common';
import { BrokenController } from './../controllers/broken.controller';
import { WorkingController } from './../controllers/working.controller';
import { AuthMiddleware } from './../middleware/auth.middleware';

@Module({
    controllers: [
        BrokenController,
        WorkingController
    ]
})
export class ApplicationModule {
    configure(consumer: MiddlewaresConsumer) {
        consumer.apply(AuthMiddleware).forRoutes(BrokenController, WorkingController);
    }
}