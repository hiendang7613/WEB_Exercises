const myapikey = "418f0031";
const axios = require('axios')

class WelcomeController {
  index(req, res, msg) {
    res.render("welcome", {
      layout: "blank-layout",
      path: "/welcome",
      usertype: msg,

      people: [{ firstname: "Nils" }, { firstname: "Yehuda" }],
      prefix: "Hello",
    });
  }

  async search(keyword,page) {
    // console.log(`https://www.omdbapi.com/?apikey=${myapikey}&s=${keyword}&page=${page}`);
    let result; 
    await axios.get(`https://www.omdbapi.com/?apikey=${myapikey}&s=${keyword}&page=${page}`)
    .then(function (response) {
      result = response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
    return result;
  }

  async get(id) {
    // console.log(`https://www.omdbapi.com/?apikey=${myapikey}&s=${keyword}&page=${page}`);
    let result; 
    await axios.get(`https://www.omdbapi.com/?apikey=${myapikey}&i=${id}`)
    .then(function (response) {
      result = response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
    console.log(result)
    return result;
  }

}

module.exports = new WelcomeController();
