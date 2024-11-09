import crypto from "crypto";

export const generateSignature = (params: any) => {
  const { public_id, timestamp } = params;

  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  const stringToSign = `public_id=${public_id}&timestamp=${timestamp}${apiSecret}`;

  return crypto.createHash("sha1").update(stringToSign).digest("hex");
};
