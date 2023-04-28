const axios = require("axios");
const { KEY, URL} = process.env;

const getCharDetail = (req, res) => {
    const { id } = req.params;

    axios
    .get(`${URL}/character/${id}?key=${KEY}`)
    .then((response) => {
        const { id, name, species, image, gender, origin, status } = response.data;
        res.status(200).json({ id, name, species, image, gender, origin, status });
    })
    .catch((error) => {
        res.status(500).json({ error: error.message });
    });
};

module.exports = getCharDetail;