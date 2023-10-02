function validateFiles(files) {
  const supportedFormats = ["jpg", "jpeg", "png"]; // Supported image formats
  const maxSize = 5 * 1024 * 1024; // Maximum file size (5MB)
  const maxImageCount = 5; // Maximum number of images

  const errors = [];

  if (Array.from(files).length > maxImageCount) {
    errors.push(`You can only upload up to ${maxImageCount} images.`);
  }

  Array.from(files).forEach((file) => {
    const { name, size } = file;
    const fileExtension = name.split(".").pop().toLowerCase();

    if (!supportedFormats.includes(fileExtension)) {
      errors.push(`Unsupported file format: ${name}`);
    }

    if (size > maxSize) {
      errors.push(`File size exceeds the limit: ${name}`);
    }
  });

  return errors;
}

// function validateFiles(files) {
//   const supportedFormats = ["jpg", "jpeg", "png"]; // Supported image formats
//   const maxSize = 5 * 1024 * 1024; // Maximum file size (5MB)
//   const maxImageCount = 5; // Maximum number of images

//   const errors = [];

//   if (files.length > maxImageCount) {
//     errors.push(`You can only upload up to ${maxImageCount} images.`);
//   }

//   files.some((file) => {
//     const { name, size } = file;
//     const fileExtension = name.split(".").pop().toLowerCase();

//     if (!supportedFormats.includes(fileExtension)) {
//       errors.push(`Unsupported file format: ${name}`);
//       return true; // Short-circuit the iteration
//     }

//     if (size > maxSize) {
//       errors.push(`File size exceeds the limit: ${name}`);
//       return true; // Short-circuit the iteration
//     }

//     return false; // Continue the iteration
//   });

//   return errors;
// }

export default function validate(detail, images) {
  const errors = {};

  // Validate detail
  for (const key in detail) {
    if (!detail[key]) {
      errors[key] = `${key} is required.`;
    }
  }

  // Validate image
  if (images.length == 0) {
    errors.image = "Image is required.";
  }

  if (images.length > 0) {
    if (validateFiles(images).length > 0) {
      errors.image = validateFiles(images);
    }
  }

  console.log(errors);
  return errors;
}
