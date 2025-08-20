import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! you will be amazed by the power of NestJS!';
  }
}
