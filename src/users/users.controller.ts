import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  //   constructor() {}
  @Get('/')
  getUsers() {
    console.log(process.env.APP_PORT);
    return [];
  }
}
