// EmailJS Configuration
// To enable email functionality, you need to:
// 1. Sign up at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Replace the placeholder values below with your actual credentials

export const emailConfig = {
  serviceId: 'YOUR_EMAILJS_SERVICE_ID', // Replace with your EmailJS service ID
  templateId: 'YOUR_EMAILJS_TEMPLATE_ID', // Replace with your EmailJS template ID
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY', // Replace with your EmailJS public key
}

// Email template variables that will be sent:
// - to_email: Customer's email address
// - to_name: Customer's name
// - reservation_date: Selected date
// - reservation_time: Selected time
// - number_of_guests: Number of guests
// - special_requests: Any special requests
// - phone: Customer's phone number

export const sendReservationEmail = async (formData: {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: string
  specialRequests: string
}) => {
  const { serviceId, templateId, publicKey } = emailConfig
  
  if (serviceId === 'YOUR_EMAILJS_SERVICE_ID') {
    // If not configured, just simulate the email sending
    await new Promise(resolve => setTimeout(resolve, 1000))
    return { success: true, message: 'Email simulation successful' }
  }
  
  // Import emailjs dynamically to avoid SSR issues
  const emailjs = (await import('@emailjs/browser')).default
  
  return await emailjs.send(
    serviceId,
    templateId,
    {
      to_email: formData.email,
      to_name: formData.name,
      reservation_date: formData.date,
      reservation_time: formData.time,
      number_of_guests: formData.guests,
      special_requests: formData.specialRequests,
      phone: formData.phone,
    },
    publicKey
  )
}

