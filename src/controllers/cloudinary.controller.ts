import { Request, Response } from "express";
import httpStatus from "http-status";
import { generateSignature } from "../services/cloudinary.service";
import { apiResponse } from "../utils/apiResponse";

export const getCloudinarySignatureController = async (
  req: Request,
  res: Response
) => {
  const timestamp = Math.floor(Date.now() / 1000);
  const { public_id } = req.query;

  if (!public_id) {
    return apiResponse(
      res,
      false,
      httpStatus.BAD_REQUEST,
      null,
      "public_id is required",
      "Missing required parameter"
    );
  }

  const signature = generateSignature({ public_id, timestamp });

  return apiResponse(
    res,
    true,
    httpStatus.OK,
    {
      signature,
      timestamp,
      apiKey: process.env.CLOUDINARY_API_KEY,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    },
    null,
    "Signature generated successfully"
  );
};
