import { Global, Module } from '@nestjs/common';
import { PrismaManagerService } from './prisma-manager.service';
@Global()
@Module({
  exports: [PrismaManagerService],
  providers: [PrismaManagerService]
})
export class PrismaManagerModule {}
