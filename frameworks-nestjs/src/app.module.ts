import { Module } from '@nestjs/common';
import { TrainModule } from './train/train.module';

@Module({
  imports: [TrainModule],
})
export class AppModule {}
