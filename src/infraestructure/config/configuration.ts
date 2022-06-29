import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AwsConfig } from 'src/application/models/aws-config.model';

@Injectable()
export class ApplicationConfigService {
  constructor(private configService: ConfigService) {}

  get Aws(): AwsConfig {
    return new AwsConfig(
      this.configService.get<string>('AWS_REGION'),
      this.configService.get<string>('AWS_ACCESS_KEY_ID'),
      this.configService.get<string>('AWS_SECRET_ACCESS_KEY'),
      this.configService.get<string>('AWS_SQS_MICROSERVICE_QUEUE_URL'),
      this.configService.get<string>('AWS_SQS_MICROSERVICE_QUEUE_NAME'),
    );
  }
}
