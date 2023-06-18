import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';

@Controller()
export class PaymentsController {

  @MessagePattern({cmd: 'get-transaction'})
    async getTransaction(@Ctx() context: RmqContext){
      const channel = context.getChannelRef();
      const message = context.getMessage();
      channel.ack(message);
      return {user: 'USER'}
    }

}
