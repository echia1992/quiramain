// utils/email-service.js
import nodemailer from "nodemailer";
import path from "path";
import { mkdir } from "fs/promises";

// Company details
export const COMPANY_NAME = "Quira Resource Digital Tech";
export const COMPANY_EMAIL = process.env.EMAIL_USER;
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

// Ensure the tmp directory exists
export async function ensureTmpDir() {
  const tmpDir = path.join(process.cwd(), "tmp");
  try {
    await mkdir(tmpDir, { recursive: true });
  } catch (err) {
    // Directory already exists or cannot be created
    console.log("Tmp dir check:", err.message);
  }
  return tmpDir;
}

// Set up email transporter
export const createTransporter = () => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Verify SMTP connection
  transporter.verify((error, success) => {
    if (error) {
      console.error("SMTP connection error:", error);
    } else {
      console.log("SMTP server is ready to send emails");
    }
  });

  return transporter;
};

// Send email with retry mechanism
export async function sendEmailWithRetry(mailOptions, retries = 3) {
  const transporter = createTransporter();

  try {
    await transporter.sendMail({
      ...mailOptions,
      from: `"${COMPANY_NAME}" <${COMPANY_EMAIL}>`,
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Email sending error:", error);
    if (retries > 0) {
      console.log(`Retrying... ${retries} attempts left`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return sendEmailWithRetry(mailOptions, retries - 1);
    }
    throw error;
  }
}
