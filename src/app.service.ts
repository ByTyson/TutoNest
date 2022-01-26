import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(name: string): string {
    return `Hello guy my name is ${name} !`;
  }
}