const ImageKit = require("@imagekit/nodejs")

const imagekit= new ImageKit({
    privateKey: "private_xpzB7d+QkKNC9rWkGAEUpR59GoA="
})

// async function uploadFile(buffer){
//     const result = await imagekit.files.upload({
//         file:buffer.toString("base64"),
//         filename: "image.jpeg"
//     })
//     return result;
// }
async function uploadFile(buffer, fileName) {
  const result = await imagekit.files.upload({
    file: buffer.toString("base64"),
    fileName: fileName
  });

  return result;
}

module.exports =uploadFile;