import { Controller, Get } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { EventPattern } from '@nestjs/microservices';
import { EnviarCartaParecerCreditoCommand } from './application/commands/enviar-carta-parecer-credito-command';
import { MICROSERVICE_EVENT_NAME } from './application/models/constants';

@Controller()
export class AppController {
  constructor(private readonly commandBus: CommandBus) {}


  @EventPattern(MICROSERVICE_EVENT_NAME)
  async handleMicroservice(data: any) {
    const command: EnviarCartaParecerCreditoCommand = data.Body;
    return await this.commandBus.execute(command);
  }

}
