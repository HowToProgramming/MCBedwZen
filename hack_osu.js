const axios = require('axios')

const osuApiKey = ""
// const osuApiURL = "https://osu.ppy.sh/api/get_beatmaps?k=" + osuApiKey

const explorer2_api = "https://osu.ppy.sh/api/get_beatmaps?k=" + osuApiKey + "&b=3105666"

// Call API method 1
axios.get(explorer2_api).then((response) => {
    let data = response.data[0]
    console.log(data.title)
})


// Call API method 2
let hackApiFunction = async () => {
    let response = await axios.get(explorer2_api)
    let data = response.data[0]
    console.log(data)
}

hackApiFunction()