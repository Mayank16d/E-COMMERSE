import { connect } from "@/dbConfig/dbConfig";
import Products from "@/models/productModel"; // Assuming this is the correct path and name
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
    try {
        // Assuming no specific query criteria, fetching all documents
        // const reqBody = await request.json();
        const products = await Products.find({});

        return NextResponse.json(products);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}