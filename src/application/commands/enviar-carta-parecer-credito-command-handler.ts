import { Logger } from "@nestjs/common";
import { ICommandHandler } from "@nestjs/cqrs";
import { EnviarCartaParecerCreditoCommand } from "./enviar-carta-parecer-credito-command";

export class EnviarCartaParecerCreditoCommandHandler
  implements ICommandHandler<EnviarCartaParecerCreditoCommand>
{
  execute(command: EnviarCartaParecerCreditoCommand): Promise<any> {
    Logger.log(
      `Atualizando o Status do registro ${command.propriedade} para Status 1. Message: 3`,
    );
    return Promise.resolve();
  }
}
