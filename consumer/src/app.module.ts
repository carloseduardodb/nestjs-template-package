import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GladiatorModule } from 'gladiator';

@Module({
  imports: [
    GladiatorModule.register({
      weapon: 'Sword7', // true = "Sword"
      name: 'hello',
      level: 5,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
