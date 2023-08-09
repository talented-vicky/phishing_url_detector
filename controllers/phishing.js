const axios = require('axios')


exports.mainPage = async (req, res, next) => {
    console.log('got here')
    res.render('phishing')
}

exports.getPhishing = async (req, res, next) => {
    try {
        const result = await axios.get("api here")
        const data = result.data
    } catch (error) {
        console.log(`Error fetching from API ${error}`)
        res.status(500).json({error: "Error fetching Data from API"})
    }
}