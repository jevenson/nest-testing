import { Controller, Get, Post, HttpStatus, Response, Param, Body } from '@nestjs/common';
import { UsersService } from './../components/users.service';

@Controller()
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get('users')
    public async getAllUsers(@Response() res) {
        let users = await this.usersService.getAllUsers();
        res.status(HttpStatus.OK).json(users);
    }

    @Get('users/:id')
    public async getUser(@Response() res, @Param('id') id) {
        let user = await this.usersService.getUser(+id);
        res.status(HttpStatus.OK).json(user);
    }

    @Post('users')
    public async addUser(@Response() res, @Body() user) {
        await this.usersService.addUser(user);
        res.status(HttpStatus.CREATED).json();
    }
}
