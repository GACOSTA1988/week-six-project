export class DoctorLocation {
  async getDocByLocation(inputed) {
    try {

      // THIS WILL CALL API WITH LOCATION
      let response =  await fetch(``);

      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      alert("sorry website is grumpy, check back later!");
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
