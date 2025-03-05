import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    const todos = await prisma.todo.findMany()

    return NextResponse.json(todos, { status: 200 })
}

export async function POST(req: NextRequest, res: NextResponse) {
    const formData: any = await req.formData()

    console.log(formData.get('task'))

    const createTodos = await prisma.todo.create({
        data: {
            task: formData.get('task')
        }
    })

    return NextResponse.json({ success: true }, { status: 201 })
}