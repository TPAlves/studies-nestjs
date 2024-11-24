import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getBatata(): string {
    return 'Salve 2 1111111111';
  }
}
