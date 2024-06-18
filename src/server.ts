import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class Server {
  constructor(private readonly app: INestApplication) {}

  /**
   * initialize server
   */
  async init(): Promise<void> {
    this._initializeSwagger();
  }

  /**
   * execute server
   */
  async run(): Promise<void> {
    await this.app.listen(process.env.PORT);
  }
  /**
   * OPEN API(Swagger) 초기화
   */
  private _initializeSwagger(): void {
    const config = new DocumentBuilder()
      .setTitle('CRUD Server')
      .setDescription('The CRUD API Descripttion')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(this.app, config);
    SwaggerModule.setup('/api-docs', this.app, document);
  }
}
