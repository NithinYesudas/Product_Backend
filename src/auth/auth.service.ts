import { ForbiddenException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { argon2d } from 'argon2';
import { PrismaManagerService } from 'src/prisma-manager/prisma-manager.service';
import { AuthDto } from './dto';
import * as argon from 'argon2'
import { User } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaManagerService) {}
 async signUp(dto: AuthDto){
  try{
    const hash = await argon.hash(dto.password);
    
    const user = await this.prisma.user.create({
      data: {
        firstName: dto.email,
        email: dto.email,
        hash
      },
      select: {
        id: true,
        firstName: true,
        email: true,
         
      }
    })
    
    return user;
    
  }
  catch(error){
    if(error instanceof PrismaClientKnownRequestError){
      if(error.code == "P2002"){
        console.log("don't make me fool, you have already created an account bitch")
        return "don't make me fool, you have already created an account bitch";
      }
    }
    console.log("there has been a error")
  }
 
  }
  async login(dto: AuthDto){
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email
      }
    })
    if(!user){
      throw new ForbiddenException("credentials wrong");
    }
    const isPwMatching= await argon.verify(user.hash,dto.password);
    if(!isPwMatching){
      throw new ForbiddenException("Credentials wrong");
    }
    return user;
  }
}
