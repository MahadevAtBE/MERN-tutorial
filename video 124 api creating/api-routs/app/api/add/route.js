// this is a file tell next js that we are going to make get post delete request

import { NextResponse } from "next/server";

// export async function GET(request) {}
 
// export async function HEAD(request) {}
 
export async function POST(request) {   // post request handeler

    let data = await request.json()  // catching the data
    console.log(data)

    return NextResponse.json({success:true,  // this is the terponce when backend get the data
        receve:"yes",
        data  // resending the same data to brouser/frontend/sender
    })
}
 
// export async function PUT(request) {}
 
// export async function DELETE(request) {}
 
// export async function PATCH(request) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and set the appropriate Response `Allow` header depending on the other methods defined in the Route Handler.
// export async function OPTIONS(request) {}