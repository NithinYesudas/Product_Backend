import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaManagerModule } from './prisma-manager/prisma-manager.module';

@Module({
  imports: [AuthModule, BookmarkModule, PrismaManagerModule],
})
export class AppModule {}
