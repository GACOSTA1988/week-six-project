export class DoctorByCondition {
  async getDocByCondition(inputedCondition) {
    try {

      // THIS WILL CALL API WITH CONDITIONS QUERY
      let response =  await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${inputedCondition}&location=45.5051,-122.6750,100&skip=0&limit=5&user_key=${process.env.API_KEY}`);

      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      alert("sorry website is grumpy, check back later!" + error.message);
      console.error("There was an error handling your request: " + error.message);
    }
  }
}

export class DoctorByName {
  async getDocByName(inputedName) {
    try {

      // THIS WILL CALL API WITH NAME AS QUERY PERAM
      let responseName =  await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${inputedName}&location=45.5051%2C-122.6750%2C100&user_location=45.5051%2C-122.6750&sort=best-match-asc&skip=0&limit=5&user_key=${process.env.API_KEY}`);


      let jsonifiedResponseName = await responseName.json();
      return jsonifiedResponseName;
    } catch(error) {
      alert("sorry website is grumpy, check back later!" + error.message);
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
