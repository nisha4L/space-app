import { sql } from "@/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
    const json = await request.json();

    const res = await sql(
        "select id, username from users where username ilike $1",
        [json.username]
    );

    //@ts-ignore : Object is possibly 'null'.
    if(res.rowCount > 0){
        return NextResponse.json({ error: "User Already Exists." }, { status: 400 });
    };

    const saltRounds = 10;
    const hash = await bcrypt.hash(json.password, saltRounds);

    await sql("insert into users (username, password) values ($1, $2)",
        [json.username, hash]
    );

    return NextResponse.json({msg : "Registration Success"}, {status : 201});
}