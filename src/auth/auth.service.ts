import { Injectable } from '@nestjs/common';
import { PrismaManagerService } from 'src/prisma-manager/prisma-manager.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaManagerService) {}
  signUp() {
    return 'I signed up ';
  }
  login(){
    return "I logined";
  }
}
