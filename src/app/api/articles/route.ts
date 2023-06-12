import { NextResponse } from "next/server";

type ArticleProps = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
};

export async function GET() {
  const newArticle: ArticleProps = {
    id: "1",
    title: "Article 1",
    content: "This is the content of article 1",
    imageUrl: "https://picsum.photos/200/300",
  };

  return NextResponse.json(newArticle);
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  return NextResponse.json(body);
}

export async function PUT(request: Request) {
  const body = await request.json();
  console.log(body);
  return NextResponse.json(body);
}

export async function DELETE(request: Request) {
  const body = await request.json();
  console.log(body);
  return NextResponse.json(body);
}
