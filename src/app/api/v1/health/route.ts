import { NextResponse } from 'next/server';
import type { ApiResponse } from '@/lib/api-config';

export async function GET() {
  const response: ApiResponse<{ status: string; timestamp: string }> = {
    success: true,
    data: {
      status: 'healthy',
      timestamp: new Date().toISOString(),
    },
  };

  return NextResponse.json(response);
}

export async function HEAD() {
  return new NextResponse(null, { status: 200 });
} 