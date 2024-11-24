import { Controller, Get, HttpCode, HttpStatus, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { request } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/batata')
  getBatata(): string {
    return this.appService.getBatata();
  }
}

@Controller('persons')
export class PersonsController {
  @Get()
  // @HttpCode(HttpStatus.OK)
  getPersons(@Query('name') name: string): string {
    if (name == undefined) {
      return 'Não identificado'
    }
    return `Opa ${name}, beleza? `
  }

  @Post()
  createPerson(): string {
    return ''
  }

  @Get('redirect')
  @Redirect('https://www.notion.so/', 301)
  redirect(): any {
    return 
  }
}