const axios = require('axios')


exports.mainPage = async (req, res, next) => {
    console.log('got here')
    res.render('phishing', {
        title: "Home"
    })
}

exports.getPhishing = async (req, res, next) => {
    const { link } = req.body
    
    const modelAPI = "https://phish-xa1s.onrender.com/v1/predict/";
    try {
        const result = await axios.post(modelAPI, { "url": link })
        const data = JSON.stringify(result.data)
        const another = data.split(":")[1]
        const final = another.substr(1, 4)

        if(!result){
            const error = new Error("API Returned Null")
            error.statusCode = 500
            throw error
        }

        res.render('result', {
            title: "Phishing Details",
            phishing: final,
            url: link
        })
    } catch (error) {
        // console.log(`Error fetching from API ${error}`)
        console.error(error)
        res.status(500).json({error: "Error fetching Data from API"})
    }
}