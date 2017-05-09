import { Module } from 'nest.js';
import { UsersModule } from './users.module';

@Module({
    modules: [
        UsersModule
    ]
})
export class ApplicationModule { }