const axios = require('axios')

exports.fetchImagesFromFacebook = async () => {
    try {
        const response = await axios.get(
            'https://www.facebook.com/pg/skysharkgroup/photos/?ref=page_internal'
        )
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}