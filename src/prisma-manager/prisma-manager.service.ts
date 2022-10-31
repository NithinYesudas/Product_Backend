import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

@Injectable()
export class PrismaManagerService extends PrismaClient{
    constructor(){
        super(
            {
                datasources:{
                    db:{
                        url: "postgresql://postgres:123@localhost:5434/nest?schema=public"
                    }
                }
            }
        )
    }
}
