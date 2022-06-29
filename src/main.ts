import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import AwsSqsServer from './infraestructure/transporters/sqsTransportStrategy';

declare const module: any;

async function bootstrap() {
  try {
    Logger.log(
      `Environment: ${process.env.NODE_ENV?.toUpperCase()}`,
      'Bootstrap',
    );
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      {
        strategy: new AwsSqsServer(),
      },
    );

    app.listen();
    if (module.hot) {
      module.hot.accept();
      module.hot.dispose(() => app.close());
    }
  } catch (error) {
    Logger.error(`Error starting server, ${error}`, '', 'Bootstrap', false);
    process.exit();
  }
}
bootstrap().catch((err: any) => {
  Logger.error(`Error starting server, ${err}`, '', 'Bootstrap', false);
  throw err;
});
