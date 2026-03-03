import { Module } from '@nestjs/common';
import { BatchController } from './batch.controller';
import { BatchService } from './batch.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import MemberSchema from 'apps/nestar-api/src/schemas/Member.model';
import PropertySchema from 'apps/nestar-api/src/schemas/Property.model';
@Module({
	imports: [
		MongooseModule.forFeature([{ name: 'Member', schema: MemberSchema }]),
		MongooseModule.forFeature([{ name: 'Property', schema: PropertySchema }]),
		ConfigModule.forRoot(),
		DatabaseModule,
		ScheduleModule.forRoot(),
	],
	controllers: [BatchController],
	providers: [BatchService],
})
export class BatchModule {}
