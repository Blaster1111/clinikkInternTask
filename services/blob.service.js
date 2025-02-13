// import { BlobServiceClient, ContainerClient, generateBlobSASQueryParameters,BlobSASPermissions } from "@azure/storage-blob";
// import { generateAccountSASQueryParameters,ContainerSASPermissions } from "@azure/storage-blob";
// import { blobServiceClient } from "../utils/azure.js";
// import { v4 as uuidv4 } from 'uuid';

// const containerName = process.env.AZURE_CONTAINER_NAME;

// const generateUploadURL = async (blobName, uploadType) => {
//     const uuid = uuidv4().replace(/[^0-9]/g, '');
//     const filename = Date.now().toString().slice(0, 6) + uuid.slice(0, 2);
//     const containerClient = blobServiceClient.getContainerClient(containerName);
//     const file = blobName + filename;
//     const blob = `uploads/${uploadType}/${file}`;
//     const blobClient = containerClient.getBlobClient(blob);

//     const sasOptions = {
//         containerName,
//         blobName: blob,
//         permissions: BlobSASPermissions.parse("rwd"),
//         startsOn: new Date(),
//         expiresOn: new Date(new Date().valueOf() + 3600 * 1000),
//     };

//     const sasToken = generateBlobSASQueryParameters(sasOptions, blobServiceClient.credential).toString();
//     return {
//         uploadUrl: `${blobClient.url}?${sasToken}`,
//         blobUrl: blobClient.url,
//     };
// };

// // const deleteBlob = async(blobName) =>{
// //     const ContainerClient = blobServiceClient.getContainerClient(containerName);
// //     const blobClient = ContainerClient.getBlobClient(blobName);
// //     await blobClient.delete();
// // };

// const extractKeyFromUrl = (url) => {
//     const key = url.split('/stagingstoragecontainer/')[1];
//     return key;
// };

// const generateDeleteURL = async (blobName) => {
//     const containerClient = blobServiceClient.getContainerClient(containerName);
//     const blobClient = containerClient.getBlobClient(blobName);

//     const sasOptions = {
//         containerName,
//         blobName,
//         permissions: BlobSASPermissions.parse("d"), // Delete permission
//         startsOn: new Date(),
//         expiresOn: new Date(new Date().valueOf() + 3600 * 1000), // 1 hour from now
//     };

//     const sasToken = generateBlobSASQueryParameters(sasOptions, blobServiceClient.credential).toString();
//     return {
//         deleteUrl: `${blobClient.url}?${sasToken}`,
//         blobUrl: blobClient.url,
//     };
// };

// export{
//     generateUploadURL,
//     extractKeyFromUrl,
//     generateDeleteURL,
// }