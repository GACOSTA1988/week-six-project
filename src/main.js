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
      getElementsNameBase(responseName);
    })();
    // THIS WILL CATCH UNDEFINED WEBSITE RETURN
    const printWebsiteUrl = (practicesObject) => {
      if (practicesObject && practicesObject.website) {
        return `Doctor Website: ${practicesObject.website}`;
      } else {
        return "No website for this practice";
      }
    };

    // THIS WILL CATCH UNDEFINED NUMBER RESULTS
    const printPhoneNumber = (practicesObject) => {
      if (practicesObject && practicesObject.number) {
        return `Doctor Phone Number: ${practicesObject.number}`;
      } else {
        return "No phone number for this practice";
      }
    };
    // THIS WILL CHECK IF DOC IS ACCEPTING NEW PATIENTS
    const printOpenToPatients = (practicesObject) => {
      if (practicesObject && practicesObject.accepts_new_patients === true) {
        return `The doctor is accepting new patients`;
      } else {
        return "Sorry but the doctor is not accepting new patients";
      }
    };
    // THIS WILL DISPLAY API FUNCTION RETURN ON (DOM)
    function getElementsNameBase(responseName) {
      $("#showByNameSection").text(`The following doctors names best match ${inputedName}:`);

      $("#docByName1").text(`${responseName.data[0].profile.first_name} ${responseName.data[0].profile.middle_name} ${responseName.data[0].profile.last_name}, ${responseName.data[0].profile.title}`);
      $("#docPhone1").text(printPhoneNumber(responseName.data[0].practices[0].phones[0]));
      $("#docWebSite1").text(printWebsiteUrl(responseName.data[0].practices[0]));
      $("#docOpenToPatients1").text(printOpenToPatients(responseName.data[0].practices[0]));

      $("#docByName2").text(`${responseName.data[1].profile.first_name} ${responseName.data[1].profile.middle_name} ${responseName.data[1].profile.last_name}, ${responseName.data[1].profile.title}`);
      $("#docPhone2").text(printPhoneNumber(responseName.data[1].practices[0].phones[0]));
      $("#docWebSite2").text(printWebsiteUrl(responseName.data[1].practices[0]));
      $("#docOpenToPatients2").text(printOpenToPatients(responseName.data[1].practices[0]));

      $("#docByName3").text(`${responseName.data[2].profile.first_name} ${responseName.data[2].profile.middle_name} ${responseName.data[2].profile.last_name}, ${responseName.data[2].profile.title}`);
      $("#docPhone3").text(printPhoneNumber(responseName.data[2].practices[0].phones[0]));
      $("#docWebSite3").text(printWebsiteUrl(responseName.data[2].practices[0]));
      $("#docOpenToPatients3").text(printOpenToPatients(responseName.data[2].practices[0]));

      $("#docByName4").text(`${responseName.data[3].profile.first_name} ${responseName.data[3].profile.middle_name} ${responseName.data[3].profile.last_name}, ${responseName.data[3].profile.title}`);
      $("#docPhone4").text(printPhoneNumber(responseName.data[3].practices[0].phones[0]));
      $("#docWebSite4").text(printWebsiteUrl(responseName.data[3].practices[0]));
      $("#docOpenToPatients4").text(printOpenToPatients(responseName.data[3].practices[0]));

      $("#docByName5").text(`${responseName.data[4].profile.first_name} ${responseName.data[4].profile.middle_name} ${responseName.data[4].profile.last_name}, ${responseName.data[4].profile.title}`);
      $("#docPhone5").text(printPhoneNumber(responseName.data[4].practices[0].phones[0]));
      $("#docWebSite5").text(printWebsiteUrl(responseName.data[4].practices[0]));
      $("#docOpenToPatients5").text(printOpenToPatients(responseName.data[4].practices[0]));
    }
  });
});
