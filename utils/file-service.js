// utils/file-service.js
import { writeFile, unlink } from "fs/promises";
import path from "path";
import { ensureTmpDir } from "./email-service";

// Handle file uploads
export async function handleFileUpload(file, fileType = "document") {
  if (!file || !(file instanceof Blob)) {
    return { success: false, message: "No valid file provided" };
  }

  try {
    // Check file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      return { success: false, message: "File size exceeds 10MB limit" };
    }

    // Validate file type based on context
    if (fileType === "cv") {
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!validTypes.includes(file.type)) {
        return {
          success: false,
          message: "Please upload a PDF or Word document",
        };
      }
    }

    // Process and save the file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uniqueFilename = `${Date.now()}-${file.name}`;
    const tmpDir = await ensureTmpDir();
    const filePath = path.join(tmpDir, uniqueFilename);

    await writeFile(filePath, buffer);

    return {
      success: true,
      filePath,
      fileName: file.name,
      mimeType: file.type,
    };
  } catch (error) {
    console.error("File upload error:", error);
    return { success: false, message: error.message };
  }
}

// Clean up uploaded files
export async function cleanupFile(filePath) {
  if (!filePath) return;

  try {
    await unlink(filePath);
    console.log("File cleaned up:", filePath);
  } catch (error) {
    console.error("File cleanup error:", error);
  }
}
