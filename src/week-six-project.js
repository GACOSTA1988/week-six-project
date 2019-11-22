export class DoctorLocation {
  async getDocByLocation(inputed) {
    try {

      // THIS WILL CALL API WITH LOCATION
      let response =  await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=3ce28e6513aaf0d2fe1c11e1e05072e0`);

      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      alert("sorry website is grumpy, check back later!");
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
