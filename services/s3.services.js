// import { DeleteObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
// import { s3Client, getSignedUrl } from "../utils/aws.js";

// const generatePresignedURL = async (fileName, contentType,uploadType, expires = 60 * 2) => {
//     const key = `uploads/${uploadType}/${fileName}`;
//     const command = new PutObjectCommand({
//         Bucket: process.env.AWS_S3_BUCKET_NAME,
//         Key: key,
//         ContentType: contentType,
//     });

//     try {
//         const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: expires });
//         return { signedUrl, key };
//     } catch (error) {
//         console.error('Error generating pre-signed URL:', error);
//         throw error;
//     }
// };

// const getFileUrl = (key) => {
//     return `https://${process.env.AWS_S3_BUCKET_NAME}.s3.amazonaws.com/${key}`;
// };

// const extractKeyFromUrl = (url) => {
//     const key = url.split('.com/')[1];
//     return key;
// };

// const generatePresignedDeleteURL = async (key, expires = 60 * 2) => {
//     const command = new DeleteObjectCommand({
//         Bucket: process.env.AWS_S3_BUCKET_NAME,
//         Key: key,
//     });
    
//     try {
//         const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: expires });
//         return signedUrl;
//     } catch (error) {
//         console.error("Error Generating Pre-Signed Url:", error.message);
//         throw new Error("Failed to generate pre-signed delete URL");
//     }
// };

// export {
//     generatePresignedURL,
//     getFileUrl,
//     generatePresignedDeleteURL,
//     extractKeyFromUrl,
// }