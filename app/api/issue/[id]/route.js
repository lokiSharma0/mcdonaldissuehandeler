import NewIssue from "../../../../model/issueModel/issuesmodel";
import { ConnectMongoDb } from "../../../../lib/ConnectMongodb";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    await ConnectMongoDb();
    const { id } = params;
    await NewIssue.findByIdAndDelete(id);
    return NextResponse.json({ message: "Isuue Deleted!!" });
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(req, { params }) {
  try {
    await ConnectMongoDb();
    const { id } = params;
    const { title, description, status } = await req.json();
    await NewIssue.findByIdAndUpdate(id, { title, description, status });
    return NextResponse.json({ message: "Issue Updated success!!" });
  } catch (error) {
    console.log(error);
  }
}

export async function GET(req, { params }) {
  const { id } = params;
  try {
    await ConnectMongoDb();
    const issue = await NewIssue.findOne({ _id: id });
    return NextResponse.json(issue);
  } catch (error) {
    console.log(error);
  }
}
