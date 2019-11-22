export class DoctorLocation {
  async getDocByLocation(inputed) {
    try {

      // THIS WILL CALL API WITH CONDITIONS QUERY
      let response =  await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=cold&location=45.5051,-122.6750,100&skip=0&limit=5&user_key=3ce28e6513aaf0d2fe1c11e1e05072e0`);

      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      alert("sorry website is grumpy, check back later!");
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
45.5051,-122.6750,100
