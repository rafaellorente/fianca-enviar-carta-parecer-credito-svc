import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { AppController } from './app.controller';
import { CommandHandlers } from './application/commands';

@Module({
  imports: [CqrsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
  ],
  controllers: [AppController],
  providers: [...CommandHandlers],
})
export class AppModule {}
