import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsModule } from './cards/cards.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CardsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://flowcreeper:${process.env.MDB_PASSWORD}@card-game.ylwrj.mongodb.net/?retryWrites=true&w=majority&appName=Card-Game`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
