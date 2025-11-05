import emailjs from '@emailjs/browser';

// EmailJS configuration - Replace these with your own EmailJS credentials
// Get them from https://www.emailjs.com/
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Recipient email - will be configured in EmailJS template
const RECIPIENT_EMAIL = import.meta.env.VITE_RECIPIENT_EMAIL || 'gerald@cattledogadvisory.com';

// Check if EmailJS is configured
const isEmailJSConfigured = EMAILJS_SERVICE_ID && 
                            EMAILJS_TEMPLATE_ID && 
                            EMAILJS_PUBLIC_KEY &&
                            EMAILJS_SERVICE_ID !== 'your_service_id' &&
                            EMAILJS_TEMPLATE_ID !== 'your_template_id' &&
                            EMAILJS_PUBLIC_KEY !== 'your_public_key';

// Initialize EmailJS only if configured
if (isEmailJSConfigured) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

interface EmailParams {
  subject: string;
  message: string;
  name?: string;
  email?: string;
  source?: string; // Where the email is coming from (form, button, etc.)
}

export const sendEmail = async (params: EmailParams): Promise<boolean> => {
  // If EmailJS is not configured, fall back to mailto
  if (!isEmailJSConfigured) {
    console.warn('EmailJS is not configured. Falling back to mailto link.');
    const subject = encodeURIComponent(params.subject);
    const body = encodeURIComponent(params.message + `\n\nFrom: ${params.name || 'Website Visitor'}\nEmail: ${params.email || 'Not provided'}`);
    const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    return true; // Return true since we're opening the mailto (user can send manually)
  }

  try {
    const templateParams = {
      to_email: RECIPIENT_EMAIL,
      subject: params.subject,
      message: params.message,
      from_name: params.name || 'Website Visitor',
      from_email: params.email || 'no-reply@website.com',
      source: params.source || 'Website Contact',
      reply_to: params.email || RECIPIENT_EMAIL,
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    // Fallback to mailto if EmailJS fails
    const subject = encodeURIComponent(params.subject);
    const body = encodeURIComponent(params.message + `\n\nFrom: ${params.name || 'Website Visitor'}\nEmail: ${params.email || 'Not provided'}`);
    const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    return true; // Return true since we're opening the mailto as fallback
  }
};

// Helper function for contact form
export const sendContactFormEmail = async (
  name: string,
  email: string,
  message: string
): Promise<boolean> => {
  return sendEmail({
    subject: `Contact Form Submission from ${name}`,
    message: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
    name,
    email,
    source: 'Contact Form',
  });
};

// Helper function for consultation requests
export const sendConsultationEmail = async (
  name?: string,
  email?: string,
  additionalMessage?: string
): Promise<boolean> => {
  return sendEmail({
    subject: 'Schedule a Consultation Request',
    message: `
${name ? `Name: ${name}` : 'Name: Not provided'}
${email ? `Email: ${email}` : 'Email: Not provided'}

Request Type: Schedule a Consultation

${additionalMessage ? `Additional Message: ${additionalMessage}` : ''}
    `,
    name: name || 'Website Visitor',
    email: email || '',
    source: 'Consultation Button',
  });
};

// Helper function for learn more requests
export const sendLearnMoreEmail = async (
  name?: string,
  email?: string,
  additionalMessage?: string
): Promise<boolean> => {
  return sendEmail({
    subject: 'Learn More About Services Request',
    message: `
${name ? `Name: ${name}` : 'Name: Not provided'}
${email ? `Email: ${email}` : 'Email: Not provided'}

Request Type: Learn More About Services

${additionalMessage ? `Additional Message: ${additionalMessage}` : ''}
    `,
    name: name || 'Website Visitor',
    email: email || '',
    source: 'Learn More Button',
  });
};

