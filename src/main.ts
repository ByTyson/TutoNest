import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//Necessaire pour acceder à swagger doc
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //start swagger
  const options = new DocumentBuilder()
    .setTitle('Tuto nest')
    .setDescription('API articles et auteurs')
    .setVersion('1.0')
    .addTag('tuto-nest')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
  //stop swagger

  await app.listen(3000);
}

bootstrap();

