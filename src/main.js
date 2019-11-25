import { DoctorByCondition } from './../src/week-six-project.js';
import { DoctorByName } from './../src/week-six-project.js';
// import { setIntervalAsync } from 'set-interval-async/dynamic';
// import { clearIntervalAsync } from 'set-interval-async';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function() {
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
  // THIS FUBCTION WILL SEARCH DOCS BY CONDTION
  $('#conInput').click(function(event) {
    event.preventDefault();
    const inputedCondition = $('#inputedCondition').val();
    const inputedName = $('#inputedName').val();
    // THIS WILL RUN API CALL FOR DOCS BY CONDITION
    (async () => {
      let newDoctorByCondition = new DoctorByCondition();
      const response = await newDoctorByCondition.getDocByCondition(inputedCondition);
      console.log(response);

      getElements(response);
    })();

    // THIS WILL DISPLAY API FUNCTION RETURN ON (DOM)
    function getElements(response) {
      // THIS WILL CATCH IF SEARCH RESULTS ARE BAD(NON ERROR TYPE)
      const doDoctorsExist = response.meta.total > 0;

      const canThisBeTreated = (inputedCondition) => {
        if (doDoctorsExist){
          return `If you are experiencing ${inputedCondition} symptoms you can reach out the the following doctors:`;
        } else {
          return `No Doctors in our daabase treat ${inputedCondition}, please try another search term`;
        }
      }

      $("#showConditionSection").text(canThisBeTreated(inputedCondition));
      // DOC 1 DETAILS
      $("#doc1").text(`${response.data[0].profile.first_name} ${response.data[0].profile.middle_name} ${response.data[0].profile.last_name}, ${response.data[0].profile.title}`);
      $("#doc1Address").text(`Visit address is: ${response.data[0].practices[0].visit_address.street}, ${response.data[0].practices[0].visit_address.city} ${response.data[0].practices[0].visit_address.state}, ${response.data[0].practices[0].visit_address.zip}`);
      $("#doc1Phone").text(printPhoneNumber(response.data[0].practices[0].phones[0]));
      $("#doc1WebSite").text(printWebsiteUrl(response.data[0].practices[0]));
      $("#doc1OpenToPatients").text(printOpenToPatients(response.data[0].practices[0]));
      // DOC 2 DETAILS
      $("#doc2").text(`${response.data[1].profile.first_name} ${response.data[1].profile.middle_name} ${response.data[1].profile.last_name}, ${response.data[1].profile.title}`);
      $("#doc2Address").text(`Visit address is: ${response.data[1].practices[0].visit_address.street}, ${response.data[1].practices[0].visit_address.city} ${response.data[1].practices[0].visit_address.state}, ${response.data[1].practices[0].visit_address.zip}`);
      $("#doc2Phone").text(printPhoneNumber(response.data[1].practices[0].phones[0]));
      $("#doc2WebSite").text(printWebsiteUrl(response.data[1].practices[0]));
      $("#doc2OpenToPatients").text(printOpenToPatients(response.data[1].practices[0]));
      // DOC 3 DETAILS
      $("#doc3").text(`${response.data[2].profile.first_name} ${response.data[2].profile.middle_name} ${response.data[2].profile.last_name}, ${response.data[2].profile.title}`);
      $("#doc3Address").text(`Visit address is: ${response.data[2].practices[0].visit_address.street}, ${response.data[2].practices[0].visit_address.city} ${response.data[2].practices[0].visit_address.state}, ${response.data[2].practices[0].visit_address.zip}`);
      $("#doc3Phone").text(printPhoneNumber(response.data[2].practices[0].phones[0]));
      $("#doc3WebSite").text(printWebsiteUrl(response.data[2].practices[0]));
      $("#doc3OpenToPatients").text(printOpenToPatients(response.data[2].practices[0]));
      // DOC 4 DETAILS
      $("#doc4").text(`${response.data[3].profile.first_name} ${response.data[3].profile.middle_name} ${response.data[3].profile.last_name}, ${response.data[3].profile.title}`);
      $("#doc4Address").text(`Visit address is: ${response.data[3].practices[0].visit_address.street}, ${response.data[3].practices[0].visit_address.city} ${response.data[3].practices[0].visit_address.state}, ${response.data[3].practices[0].visit_address.zip}`);
      $("#doc4Phone").text(printPhoneNumber(response.data[3].practices[0].phones[0]));
      $("#doc4WebSite").text(printWebsiteUrl(response.data[3].practices[0]));
      $("#doc4OpenToPatients").text(printOpenToPatients(response.data[3].practices[0]));
      // DOC 5 DETAILS
      $("#doc5").text(`${response.data[4].profile.first_name} ${response.data[4].profile.middle_name} ${response.data[4].profile.last_name}, ${response.data[4].profile.title}`);
      $("#doc5Address").text(`Visit address is: ${response.data[4].practices[0].visit_address.street}, ${response.data[4].practices[0].visit_address.city} ${response.data[4].practices[0].visit_address.state}, ${response.data[4].practices[0].visit_address.zip}`);
      $("#doc5Phone").text(printPhoneNumber(response.data[4].practices[0].phones[0]));
      $("#doc5WebSite").text(printWebsiteUrl(response.data[4].practices[0]));
      $("#doc5OpenToPatients").text(printOpenToPatients(response.data[4].practices[0]));
    }

  });

  $('#nameInput').click(function() {
    const inputedName = $('#inputedName').val();
    // RUN ASYNC API CALL FOR DOCS BY SEARCH NAME
    (async () => {
      let newDoctorByName = new DoctorByName();
      const responseName = await newDoctorByName.getDocByName(inputedName);
      console.log(responseName);
      getElementsNameBase(responseName);
    })();
    // THIS WILL DISPLAY API FUNCTION RETURN ON (DOM)
    function getElementsNameBase(responseName) {
      // THIS WILL CATCH IF SEARCH RESULTS ARE BAD(NON ERROR TYPE)
      const doDoctorsExist = responseName.meta.total > 0;

      const canThisBeTreated = (inputedName) => {
        if (doDoctorsExist){
          return `The following doctors names best match ${inputedName}`;
        } else {
          return `No Doctors in our database match ${inputedName}, please try another name`;
        }
      }
      $("#showByNameSection").text(canThisBeTreated(inputedName));
      // DOC 1 DETAILS
      $("#docByName1").text(`${responseName.data[0].profile.first_name} ${responseName.data[0].profile.middle_name} ${responseName.data[0].profile.last_name}, ${responseName.data[0].profile.title}`);
      $("#docAddress1").text(`Visit address is: ${responseName.data[0].practices[0].visit_address.street}, ${responseName.data[0].practices[0].visit_address.city} ${responseName.data[0].practices[0].visit_address.state}, ${responseName.data[0].practices[0].visit_address.zip}`);
      $("#docPhone1").text(printPhoneNumber(responseName.data[0].practices[0].phones[0]));
      $("#docWebSite1").text(printWebsiteUrl(responseName.data[0].practices[0]));
      $("#docOpenToPatients1").text(printOpenToPatients(responseName.data[0].practices[0]));
      // DOC 2 DETAILS
      $("#docByName2").text(`${responseName.data[1].profile.first_name} ${responseName.data[1].profile.middle_name} ${responseName.data[1].profile.last_name}, ${responseName.data[1].profile.title}`);
      $("#docAddress2").text(`Visit address is: ${responseName.data[1].practices[0].visit_address.street}, ${responseName.data[1].practices[0].visit_address.city} ${responseName.data[1].practices[0].visit_address.state}, ${responseName.data[1].practices[0].visit_address.zip}`);
      $("#docPhone2").text(printPhoneNumber(responseName.data[1].practices[0].phones[0]));
      $("#docWebSite2").text(printWebsiteUrl(responseName.data[1].practices[0]));
      $("#docOpenToPatients2").text(printOpenToPatients(responseName.data[1].practices[0]));
      // DOC 3 DETAILS
      $("#docByName3").text(`${responseName.data[2].profile.first_name} ${responseName.data[2].profile.middle_name} ${responseName.data[2].profile.last_name}, ${responseName.data[2].profile.title}`);
      $("#docAddress3").text(`Visit address is: ${responseName.data[2].practices[0].visit_address.street}, ${responseName.data[2].practices[0].visit_address.city} ${responseName.data[2].practices[0].visit_address.state}, ${responseName.data[2].practices[0].visit_address.zip}`);
      $("#docPhone3").text(printPhoneNumber(responseName.data[2].practices[0].phones[0]));
      $("#docWebSite3").text(printWebsiteUrl(responseName.data[2].practices[0]));
      $("#docOpenToPatients3").text(printOpenToPatients(responseName.data[2].practices[0]));
      // DOC 4 DETAILS
      $("#docByName4").text(`${responseName.data[3].profile.first_name} ${responseName.data[3].profile.middle_name} ${responseName.data[3].profile.last_name}, ${responseName.data[3].profile.title}`);
      $("#docAddress4").text(`Visit address is: ${responseName.data[3].practices[0].visit_address.street}, ${responseName.data[3].practices[0].visit_address.city} ${responseName.data[3].practices[0].visit_address.state}, ${responseName.data[3].practices[0].visit_address.zip}`);
      $("#docPhone4").text(printPhoneNumber(responseName.data[3].practices[0].phones[0]));
      $("#docWebSite4").text(printWebsiteUrl(responseName.data[3].practices[0]));
      $("#docOpenToPatients4").text(printOpenToPatients(responseName.data[3].practices[0]));
      // DOC 5 DETAILS
      $("#docByName5").text(`${responseName.data[4].profile.first_name} ${responseName.data[4].profile.middle_name} ${responseName.data[4].profile.last_name}, ${responseName.data[4].profile.title}`);
      $("#docAddress5").text(`Visit address is: ${responseName.data[4].practices[0].visit_address.street}, ${responseName.data[4].practices[0].visit_address.city} ${responseName.data[4].practices[0].visit_address.state}, ${responseName.data[4].practices[0].visit_address.zip}`);
      $("#docPhone5").text(printPhoneNumber(responseName.data[4].practices[0].phones[0]));
      $("#docWebSite5").text(printWebsiteUrl(responseName.data[4].practices[0]));
      $("#docOpenToPatients5").text(printOpenToPatients(responseName.data[4].practices[0]));
    }
  });
});
