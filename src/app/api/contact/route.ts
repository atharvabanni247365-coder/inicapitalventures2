import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    
    // Fallback if submitted via traditional HTML form POST
    let name = '';
    let email = '';
    let message = '';

    if (body) {
      name = body.name || '';
      email = body.email || '';
      message = body.message || '';
    } else {
      const formData = await request.formData();
      name = formData.get('name')?.toString() || '';
      email = formData.get('email')?.toString() || '';
      message = formData.get('message')?.toString() || '';
    }

    // Input sanitization & validation checks
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields (name, email, message) are required.' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address format.' },
        { status: 400 }
      );
    }

    // Process submission logic (e.g., save to DB or send via Resend)
    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry received successfully. Our principal architect will respond shortly.',
        data: { name, email },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
