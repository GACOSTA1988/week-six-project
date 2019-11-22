import { DoctorByCondition } from './../src/week-six-project.js';
import { setIntervalAsync } from 'set-interval-async/dynamic';
import { clearIntervalAsync } from 'set-interval-async';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function() {
  $('#conInput').click(function() {
    const inputedCondition = $('#inputedCondition').val();

    (async () => {
      let newDoctorByCondition = new DoctorByCondition();
      const response = await personalInfo.getDocByCondition(inputedCondition);
      console.log(response);
      getElements(response);
    })();
    // THIS WILL DISPLAY API FUNCTION RETURN ON (DOM)
    // function getElements(response) {
      //   $(".showCondition").text(`If you are experiencing ${inputedCondition} symptoms you can reach out the the following doctors: ${}`);
      //
      // }

    });
  });
