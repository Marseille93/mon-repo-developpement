import { Module } from '@nestjs/common';
import { ProduitsController } from './produits.controller';
import { ProduitsService } from './produits.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProduitsEntity } from './entities/produits.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProduitsEntity])],
  controllers: [ProduitsController],
  providers: [ProduitsService],
})
export class ProduitsModule {}
