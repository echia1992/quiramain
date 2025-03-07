const sharedStyles = `
  body { 
    font-family: Arial, sans-serif; 
    line-height: 1.6; 
    color: #333;
    margin: 0;
    padding: 0;
  }
  .container { 
    max-width: 600px; 
    margin: 0 auto; 
    padding: 20px;
  }
  .header { 
    background: linear-gradient(135deg, #4f46e5 0%, #3b3590 100%);
    padding: 30px 20px; 
    border-radius: 8px 8px 0 0;
    text-align: center;
  }
  .header h2 {
    color: white;
    margin: 0;
    font-size: 24px;
  }
  .content { 
    background: #f9f9f9; 
    padding: 20px;
    border-radius: 0 0 8px 8px;
  }
  .field {
    margin-bottom: 15px;
  }
  .label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }
  .value {
    background: white;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #eee;
  }
  .highlight {
    background: #f0f7ff;
    border-left: 4px solid #4f46e5;
    padding: 15px;
    margin: 15px 0;
  }
  .footer {
    margin-top: 20px;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
  .button {
    display: inline-block;
    background-color: #4f46e5;
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 4px;
    margin-top: 15px;
  }
`;

// Generate contact form email template (admin notification)
export function generateContactEmailTemplate(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>${sharedStyles}</style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email}</div>
          </div>
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">${data.company || "Not specified"}</div>
          </div>
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${data.message.replace(/\n/g, "<br>")}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the contact form on the Quira Resource website.</p>
          <p>Date: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Generate auto-response email template (for either contact or career)
export function generateAutoResponseTemplate(data, isCareerForm = false) {
  const subject = isCareerForm
    ? `Thank you for your application: ${data.role}`
    : "Thank you for contacting Quira Resource";

  const message = isCareerForm
    ? `<p>We appreciate your interest in joining our team as a <strong>${data.role}</strong>. We've received your application and CV.</p>
       <p>Our team will review your profile and get back to you if there's a good match with our current needs.</p>`
    : `<p>We appreciate your message and will get back to you as soon as possible.</p>
       <p>Our team typically responds within 24-48 business hours.</p>`;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>${sharedStyles}</style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>${subject}</h2>
        </div>
        <div class="content">
          <p>Dear ${data.name || data.fullName},</p>
          ${message}
          <p>If you have any further questions, please don't hesitate to reach out to us with phone no. 08160966136.</p>
          <p>Best regards,<br>The Quira Resource Team</p>
          <div style="text-align: center; margin-top: 20px;">
            <a href="https://quiratech.com" class="button" style="color: white;">Visit Our Website</a>
          </div>
        </div>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} Quira Resource Digital Tech. All rights reserved.</p>
          <p>Off Ikorodu Rd, Fadeyi Lagos Nigeria</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Generate career application email template (admin notification)
export function generateCareerEmailTemplate(data, hasAttachment = false) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>${sharedStyles}</style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Job Application: ${data.role}</h2>
        </div>
        <div class="content">
          <div class="highlight">
            <div class="label">Position:</div>
            <div class="value">${data.role}</div>
          </div>
          
          <div class="field">
            <div class="label">Applicant Name:</div>
            <div class="value">${data.fullName}</div>
          </div>
          
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email}</div>
          </div>
          
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${data.phone || "Not provided"}</div>
          </div>
          
          <div class="field">
            <div class="label">Experience:</div>
            <div class="value">${data.experience || "Not specified"}</div>
          </div>
          <div class="field">
            <div class="label">Eductional Qualification:</div>
            <div class="value">${data.qualification || "Not specified"}</div>
          </div>
          <div class="field">
            <div class="label">Salary Expectation:</div>
            <div class="value">${data.salary || "Not specified"}</div>
          </div>
          
          <div class="field">
            <div class="label">Additional Information:</div>
            <div class="value">${(data.message || "None provided").replace(
              /\n/g,
              "<br>"
            )}</div>
          </div>
          
          ${
            hasAttachment
              ? `
          <div class="field" style="margin-top: 20px;">
            <div class="label">Attachments:</div>
            <div class="value" style="color: #4f46e5;">
              CV attached to this email
            </div>
          </div>
          `
              : ""
          }
        </div>
        <div class="footer">
          <p>This application was submitted via the Quira Resource career page.</p>
          <p>Date: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
