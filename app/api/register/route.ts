import prisma from "../../lib/prisma";
import { NextResponse } from "next/server";
import * as bcrypt from 'bcryptjs'

interface RequestBody {
    name: string;
    email: string;
    password: string;
    role?: string | 'User';
}

export async function POST(request : Request) {
    
    const body:RequestBody = await request.json();
    
    const encrpytedPassword = await bcrypt.hash(body.password,12);
    
    const user = await prisma.user.create({
        data:{
            name: body.name,
            email: body.email,
            hashedPassword: encrpytedPassword,
            role: body.role
        },
    })
    const { hashedPassword, ...result } = user;
    
    return new NextResponse(JSON.stringify(result))

}