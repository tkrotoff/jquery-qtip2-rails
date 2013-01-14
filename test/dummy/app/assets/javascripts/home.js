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

  $('#qtip-rounded').qtip({
    position: { target: 'mouse', adjust: { x: 10,  y: 10 } },
    content: 'qtip-rounded',
    style: {
      classes: 'qtip-rounded'
    }
  });

  $('#qtip-bootstrap').qtip({
    position: {
      my: 'bottom center',
      at: 'top center',
      target: 'mouse',
      viewport: $(window) // Keep the tooltip on-screen at all times
    },
    content: {
      title: {
        button: 'close',
        text: 'qtip-bootstrap'
      },
      text: 'qtip-bootstrap'
    },
    style: {
      classes: 'qtip-bootstrap'
    }
  });

  $('#qtip-shadow-rounded').qtip({
    position: { target: 'mouse', adjust: { x: 10,  y: 10 } },
    content: 'qtip-shadow qtip-rounded',
    style: {
      classes: 'qtip-shadow qtip-rounded'
    }
  });
});
