import { NextResponse } from "next/server";
import {
  ADMIN_EMAIL,
  COMPANY_NAME,
  COMPANY_EMAIL,
  sendEmailWithRetry,
} from "../../../utils/email-service";
import {
  generateContactEmailTemplate,
  generateAutoResponseTemplate,
  generateCareerEmailTemplate,
} from "../../../utils/email-templates";
import { handleFileUpload, cleanupFile } from "../../../utils/file-service";

export async function POST(req) {
  let uploadedFilePath = null;

  try {
    // Parse form data
    const formData = await req.formData();
    const formType = formData.get("formType") || "contact";
    const attachments = [];

    // Handle file upload for career applications
    if (formType === "career") {
      const file = formData.get("cvFile");
      if (file) {
        const fileResult = await handleFileUpload(file, "cv");

        if (!fileResult.success) {
          return NextResponse.json(
            { error: fileResult.message },
            { status: 400 }
          );
        }

        uploadedFilePath = fileResult.filePath;
        attachments.push({
          filename: fileResult.fileName,
          path: fileResult.filePath,
        });
      }
    }

    // Extract form data based on form type
    let data = {};
    let adminSubject = "";
    let adminTemplate = "";
    let userSubject = "";
    let userTemplate = "";

    if (formType === "contact") {
      // Handle contact form submission
      data = {
        name: formData.get("name") || "",
        email: formData.get("email") || "",
        company: formData.get("company") || "",
        message: formData.get("message") || "",
      };

      adminSubject = `New Contact Form Submission from ${data.name}`;
      adminTemplate = generateContactEmailTemplate(data);
      userSubject = "Thank you for contacting Quira Resource";
      userTemplate = generateAutoResponseTemplate(data, false);
    } else if (formType === "career") {
      // Handle career application submission
      data = {
        fullName: formData.get("fullName") || "",
        email: formData.get("email") || "",
        phone: formData.get("phone") || "",
        salary: formData.get("salary") || "",
        role: formData.get("role") || "",
        qualification: formData.get("qualification") || "",
        experience: formData.get("experience") || "",
        message: formData.get("message") || "",
      };

      adminSubject = `New Job Application: ${data.role} - ${data.fullName}`;
      adminTemplate = generateCareerEmailTemplate(data, attachments.length > 0);
      userSubject = `Thank you for your application to Quira Resource: ${data.role}`;
      userTemplate = generateAutoResponseTemplate(data, true);
    }

    // Send admin email
    const adminMailOptions = {
      from: `"${COMPANY_NAME}" <${COMPANY_EMAIL}>`,
      to: ADMIN_EMAIL,
      subject: adminSubject,
      html: adminTemplate,
      attachments: attachments,
    };
    await sendEmailWithRetry(adminMailOptions);

    // Send user confirmation email
    const userMailOptions = {
      from: `"${COMPANY_NAME}" <${COMPANY_EMAIL}>`,
      to: formType === "contact" ? data.email : data.email,
      subject: userSubject,
      html: userTemplate,
    };
    await sendEmailWithRetry(userMailOptions);

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { error: "Failed to send emails. Please try again later." },
      { status: 500 }
    );
  } finally {
    if (uploadedFilePath) {
      await cleanupFile(uploadedFilePath);
    }
  }
}
