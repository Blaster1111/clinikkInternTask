// import { generateUploadURL,generateDeleteURL } from "../services/blob.services.js";
// import { ApiError } from "../utils/ApiError.js";
// import { APIresponse } from "../utils/APIresponse.js";
// import { asyncHandler } from "../utils/asyncHandler.js";

// const getUploadURL = asyncHandler(async (req, res) => {
//     try {
//         const { blobName, uploadType } = req.body;
//         const { uploadUrl, blobUrl } = await generateUploadURL(blobName, uploadType);
//         res.status(200).json(new APIresponse(200, { uploadUrl, blobUrl }, "Upload URL Fetched Successfully"));
//     } catch (error) {
//         throw new ApiError(500, `Error Generating Upload URL: ${error.message}`);
//     }
// });

// // const removeBlob = asyncHandler(async(req,res)=>{
// //     try{
// //         const {blobName} = req.body;
// //         await deleteBlob(blobName);
// //         res.status(200).json(new APIresponse(200,"Blob Deleted Successfully"));
// //     }catch(error){
// //         throw new ApiError(500,`Blob Deletion Failed: ${error.message}`)
// //     }
// // });

// const getDeleteURL = asyncHandler(async (req, res) => {
//     try {
//         const { blobName } = req.body;
//         const { deleteUrl, blobUrl } = await generateDeleteURL(blobName);
//         res.status(200).json(new APIresponse(200, { deleteUrl, blobUrl }, "Delete URL fetched successfully"));
//     } catch (error) {
//         throw new ApiError(500, `Error generating delete URL: ${error.message}`);
//     }
// });

// export{
//     getUploadURL,
//     getDeleteURL,
// }