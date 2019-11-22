import { DoctorByCondition } from './../src/week-six-project.js';
import { DoctorByName } from './../src/week-six-project.js';
// import { setIntervalAsync } from 'set-interval-async/dynamic';
// import { clearIntervalAsync } from 'set-interval-async';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function() {
  $('#conInput').click(function(event) {
    event.preventDefault();
    const inputedCondition = $('#inputedCondition').val();
    const inputedName = $('#inputedName').val();

    // THIS WILL RUN API CALL
    (async () => {
      let newDoctorByCondition = new DoctorByCondition();
      const response = await newDoctorByCondition.getDocByCondition(inputedCondition);
      console.log(response);
      getElements(response);
    })();

    // THIS WILL DISPLAY API FUNCTION RETURN ON (DOM)
    function getElements(response) {
      $("#showConditionSection").text(`If you are experiencing ${inputedCondition} symptoms you can reach out the the following doctors:`);
      $("#doc1").text(`${response.data[0].profile.first_name} ${response.data[0].profile.middle_name} ${response.data[0].profile.last_name}, ${response.data[0].profile.title}`);
      $("#doc2").text(`${response.data[1].profile.first_name} ${response.data[1].profile.middle_name} ${response.data[1].profile.last_name}, ${response.data[1].profile.title}`);
      $("#doc3").text(`${response.data[2].profile.first_name} ${response.data[2].profile.middle_name} ${response.data[2].profile.last_name}, ${response.data[2].profile.title}`);
      $("#doc4").text(`${response.data[3].profile.first_name} ${response.data[3].profile.middle_name} ${response.data[3].profile.last_name}, ${response.data[3].profile.title}`);
      $("#doc5").text(`${response.data[4].profile.first_name} ${response.data[4].profile.middle_name} ${response.data[4].profile.last_name}, ${response.data[4].profile.title}`);
    }

  });
  $('#nameInput').click(function() {
    const inputedName = $('#inputedName').val();

    (async () => {
      let newDoctorByName = new DoctorByName();
      const responseName = await newDoctorByName.getDocByName(inputedName);
      console.log(responseName);
      getElements(responseName);
    })();

    // THIS WILL DISPLAY API FUNCTION RETURN ON (DOM)
    function getElements(responseName) {
      $("#showByNameSection").text(`The following doctors names best match ${inputedName}:`);
      $("#docByName1").text(`${responseName.data[0].profile.first_name} ${responseName.data[0].profile.middle_name} ${responseName.data[0].profile.last_name}, ${responseName.data[0].profile.title}`);
      $("#docByName2").text(`${responseName.data[1].profile.first_name} ${responseName.data[1].profile.middle_name} ${responseName.data[1].profile.last_name}, ${responseName.data[1].profile.title}`);
      $("#docByName3").text(`${responseName.data[2].profile.first_name} ${responseName.data[2].profile.middle_name} ${responseName.data[2].profile.last_name}, ${responseName.data[2].profile.title}`);
      $("#docByName4").text(`${responseName.data[3].profile.first_name} ${responseName.data[3].profile.middle_name} ${responseName.data[3].profile.last_name}, ${responseName.data[3].profile.title}`);
      $("#docByName5").text(`${responseName.data[4].profile.first_name} ${responseName.data[4].profile.middle_name} ${responseName.data[4].profile.last_name}, ${responseName.data[4].profile.title}`);
    }
  });
});
