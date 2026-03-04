const ImageKit = require('@imagekit/nodejs').default
const { toFile } = require('@imagekit/nodejs')

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})

const uploadFile = async ({ buffer, filename, folder }) => {
    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(buffer), filename),
        fileName: filename,
        folder
    })
    return file
}

module.exports = {
    uploadFile
}