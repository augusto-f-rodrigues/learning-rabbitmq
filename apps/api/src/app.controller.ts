import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('PAYMENTS_SERVICE') private paymentsService: ClientProxy) {}

  @Get()
  getHello() {
    return { foo: 'bar!' };
  }

  @Get('payments')
  async getTransaction() {
    return this.paymentsService.send(
      {
        cmd: 'get-transaction',
      },
      {},
    );
  }
}
