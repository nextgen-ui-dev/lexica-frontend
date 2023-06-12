import path from 'path';
import { promises as fs } from 'fs';
import { NextRequest, NextResponse } from 'next/server';

export default async function get(req: NextRequest, res: NextResponse): Promise<NextResponse<string>> {
  const jsonDirectory = path.join(process.cwd(), 'app/articles');
  const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf-8');

  return NextResponse.json(fileContents);
}