import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './config/constants.config';
// import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(compression());
  await app.listen(PORT(app));
}
bootstrap();
