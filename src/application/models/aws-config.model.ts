export class AwsConfig {
    region: string;
    accessKey: string;
    secretKey: string;
    microserviceQueueUrl: string;
    microserviceQueueName: string;
  
    constructor(
      region: string,
      accessKey: string,
      secretKey: string,
      microserviceQueueUrl: string,
      microserviceQueueName: string,
    ) {
      this.region = region;
      this.accessKey = accessKey;
      this.secretKey = secretKey;
      this.microserviceQueueUrl = microserviceQueueUrl;
      this.microserviceQueueName = microserviceQueueName;
    }
  }
  