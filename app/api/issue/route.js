import NewIssue from "../../../model/issueModel/issuesmodel";
import { ConnectMongoDb } from "../../../lib/ConnectMongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { title, description, status } = await req.json();
    await ConnectMongoDb();
    const newissue = new NewIssue({
      title: title,
      description: description,
      status: status,
    });
    await newissue.save();
    return NextResponse.json({ message: "isssue Created" });
  } catch (error) {
    console.log(error);
  }
}

export async function GET() {
  try {
    await ConnectMongoDb();
    const SearchIssue = await NewIssue.find();
    return NextResponse.json(SearchIssue);
  } catch (error) {
    console.log(error);
  }
}
