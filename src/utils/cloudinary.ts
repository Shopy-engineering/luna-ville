import { Cloudinary } from "@cloudinary/url-gen";

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: "dvrl5pthx", 
  },
  url: {
    secure: true, // Ensure HTTPS URLs
  },
});

export default cloudinary;