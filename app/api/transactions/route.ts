import prisma from "../../lib/prisma";
import { NextResponse } from "next/server";
import * as bcrypt from 'bcryptjs'
import getCurrentUser from "@/app/lib/action/getCurrentUser";

interface TxRequestBody {
    type: string;
    txId: string;
    time: Date;
    from: string;
    to: string;
    location: string;
    amount: number;
    status: string;
}

export async function POST(request: Request) {
    const currentUser = await getCurrentUser();
  
    if (!currentUser) {
      return NextResponse.error();
    }
  
    const body: TxRequestBody = await request.json();
  
    const transaction = await prisma.userTx.create({
      data: {
        ...body,
        userId: currentUser.id,
      },
    });
  
    return new NextResponse(JSON.stringify(transaction));
  }

  export async function GET(request: Request) {
    const body = await request.json();
    const { id } = body;
    
    try {
      const transaction = await prisma.userTx.findUnique({
        where: { id: String(id) },
      });
  
      if (!transaction) {
        return new NextResponse("Transaction not found", { status: 404 });
      }
  
      return new NextResponse(JSON.stringify(transaction));
    } catch (error) {
        console.error("Error fetching transaction:", error);
        return new NextResponse("Error fetching transaction", { status: 500 });
    }
}

  export async function DELETE(request: Request) {
      
      const body = await request.json();
      const { id } = body;
      try {
      const existingTransaction = await prisma.userTx.findUnique({
        where: { id: String(id) },
      });
  
      if (!existingTransaction) {
        return new NextResponse("Transaction not found", { status: 404 });
      }
  
      const deletedTransaction = await prisma.userTx.delete({
        where: { id: String(id) },
      });
  
      return new NextResponse(JSON.stringify(deletedTransaction));
    } catch (error) {
      console.error("Error deleting transaction:", error);
      return new NextResponse("Error deleting transaction", { status: 500 });
    }
  }

  export async function UPDATE(request: Request) {
      const body = await request.json();
    const { id } = body;
  
    try {
      const existingTransaction = await prisma.userTx.findUnique({
        where: { id: String(id) },
      });
  
      if (!existingTransaction) {
        return new NextResponse("Transaction not found", { status: 404 });
      }
  
      const updatedTransaction = await prisma.userTx.update({
        where: { id: String(id) },
        data: { ...existingTransaction, ...body },
      });
  
      return new NextResponse(JSON.stringify(updatedTransaction));
    } catch (error) {
      console.error("Error updating transaction:", error);
      return new NextResponse("Error updating transaction", { status: 500 });
    }
  }