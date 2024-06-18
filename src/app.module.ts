import { Module } from '@nestjs/common';
import { ServerConfig } from './server-config';

@Module({
  imports: [
    // config setting
    ServerConfig,
    // dao
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
