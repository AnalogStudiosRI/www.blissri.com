/* eslint-disable camelcase */
import * as cloudinary from 'cloudinary';

const MAX_RESULTS = 500; // doubt we'll ever hit this limit...

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// https://cloudinary.com/documentation/admin_api#get_resources_by_asset_folder
async function getAssetsByFolder(folderName) {
  let assets = [];

  try {
    const [images, videos] = await Promise.all([
      cloudinary.v2.api.resources({
        resource_type: 'image',
        max_results: MAX_RESULTS
      }),
      cloudinary.v2.api.resources({
        resource_type: 'video',
        max_results: MAX_RESULTS
      })
    ]);

    assets = [...images.resources, ...videos.resources]
      .filter((asset) => asset.folder === folderName);
  } catch (e) {
    console.error({ e });
  }

  return assets;
}

export { getAssetsByFolder };