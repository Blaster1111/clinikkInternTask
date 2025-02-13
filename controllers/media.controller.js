import Media from "../models/media.model.js";
import { ApiError } from "../utils/ApiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js"


const createMedia = asyncHandler(async (req, res) => {
    const { title, url, description, mediaType } = req.body;
    
    if (!title || !url || !mediaType) {
        throw new ApiError(400, "Missing Required Fields");
    }

    const media = new Media({
        title,
        url,
        description,
        mediaType,
    });

    await media.save();
    res.status(201).json(new apiResponse(201, "Media created successfully", media));
});

const getAllMedia = asyncHandler(async (req, res) => {
    const mediaList = await Media.find();
    
    if (!mediaList.length) {
        throw new ApiError(404, "No media found");
    }

    res.status(200).json(new apiResponse(200, "Media retrieved successfully", mediaList));
});

const getMediaById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const media = await Media.findById(id);

    if (!media) {
        throw new ApiError(404, "Media not found");
    }

    res.status(200).json(new apiResponse(200, "Media retrieved successfully", media));
});

const updateMedia = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title, url, description, mediaType } = req.body;

    const media = await Media.findByIdAndUpdate(
        id,
        { title, url, description, mediaType },
        { new: true, runValidators: true }
    );

    if (!media) {
        throw new ApiError(404, "Media not found");
    }

    res.status(200).json(new apiResponse(200, "Media updated successfully", media));
});

const deleteMedia = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const media = await Media.findByIdAndDelete(id);

    if (!media) {
        throw new ApiError(404, "Media not found");
    }

    res.status(200).json(new apiResponse(200, "Media deleted successfully"));
});

export { createMedia, getAllMedia, getMediaById, updateMedia, deleteMedia };
