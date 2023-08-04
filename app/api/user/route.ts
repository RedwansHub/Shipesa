import { NextResponse } from "next/server";
import bcrypt from  "bcryptjs";

import prisma from "../../lib/prisma";

export async function POST(
  request: Request, 
) {
  const body = await request.json();
  const { 
    email,
    name,
    password,
   } = body;

   const user = await prisma.user.findFirst({
       where: {
         email : body.email,
       }
   }) 

    if (user) {
        return NextResponse.json({
            status: 400,
            message: "User already exists.",
        });
    }   else {
        return NextResponse.json({
            status: 404,
            message: "Users ",
        });
    }

  return NextResponse.json(user);
}

export async function GET(
  request: Request, 
) {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}
export async function PUT(
    request: Request,
) { 
    const body = await request.json();
    const { name } = body;
    
    const user = await prisma.user.findFirst({
        where: {
                name : body.name
        },
    });

    if (!user) {
        return new NextResponse(`No user found with the name - ${body.name}`, { status: 404 });
    }

  return NextResponse.json(user);
}
export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    try {
      const id = params.id;
      await prisma.user.delete({
        where: { id },
      });
  
      return new NextResponse(null, { status: 204 });
    } catch (error: any) {
      if (error.code === "P2025") {
        return new NextResponse("No user with ID found", { status: 404 });
      }
  
      return new NextResponse(error.message, { status: 500 });
    }
}
export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id;
    let json = await request.json();
  
    const updated_user = await prisma.user.update({
      where: { id },
      data: json,
    });
  
    if (!updated_user) {
      return new NextResponse("No user with ID found", { status: 404 });
    }
  
    return NextResponse.json(updated_user);
}