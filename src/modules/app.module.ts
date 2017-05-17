import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';

@Module({
    modules: [
        UsersModule
    ]
})
export class ApplicationModule { }