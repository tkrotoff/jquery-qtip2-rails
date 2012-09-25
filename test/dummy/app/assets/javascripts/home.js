// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function() {
  $('#title').qtip({
    position: { target: 'mouse', adjust: { x: 10,  y: 10 } }
  });

  $('#no_title').qtip({
    position: { target: 'mouse', adjust: { x: 10,  y: 10 } },
    content: 'no_title'
  });

  $('#ui-tooltip-rounded').qtip({
    position: { target: 'mouse', adjust: { x: 10,  y: 10 } },
    content: 'ui-tooltip-rounded',
    style: {
      classes: 'ui-tooltip-rounded'
    }
  });

  $('#ui-tooltip-bootstrap').qtip({
    position: {
      my: 'bottom center',
      at: 'top center',
      target: 'mouse',
      viewport: $(window) // Keep the tooltip on-screen at all times
    },
    content: {
      title: {
        button: 'close',
        text: 'ui-tooltip-bootstrap'
      },
      text: 'ui-tooltip-bootstrap'
    },
    style: {
      classes: 'ui-tooltip-bootstrap'
    }
  });

  $('#ui-tooltip-shadow-rounded').qtip({
    position: { target: 'mouse', adjust: { x: 10,  y: 10 } },
    content: 'ui-tooltip-shadow ui-tooltip-rounded',
    style: {
      classes: 'ui-tooltip-shadow ui-tooltip-rounded'
    }
  });
});
