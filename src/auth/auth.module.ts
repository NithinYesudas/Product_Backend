import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaManagerModule } from 'src/prisma-manager/prisma-manager.module';

@Module({
  imports: [PrismaManagerModule],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
