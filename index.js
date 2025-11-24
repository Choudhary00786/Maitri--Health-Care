window.onload = function () {
  var draft = JSON.parse(localStorage.getItem('draftData'));

  if (draft) {
    document.getElementById('issue-category').value = draft.issueCategory || "";
    document.getElementById('urgency-level').value = draft.urgencyLevel || "";
    document.getElementById('issue-title').value = draft.issueTitle || "";
    document.getElementById('detailed-description').value = draft.detailedDescription || "";
    document.getElementById('duration').value = draft.duration || "";
    document.getElementById('previous-medical-history').value = draft.previousMedicalHistory || "";
    document.getElementById('current-medications').value = draft.currentMedications || "";

    if (draft.contactPreferences) {
      draft.contactPreferences.forEach(function (id) {
        document.getElementById(id).checked = true;
      });
    }
  }
};


document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();

  var issueCategory = document.getElementById('issue-category').value;
  var urgencyLevel = document.getElementById('urgency-level').value;
  var issueTitle = document.getElementById('issue-title').value;
  var detailedDescription = document.getElementById('detailed-description').value;
  var duration = document.getElementById('duration').value;
  var previousMedicalHistory = document.getElementById('previous-medical-history').value;
  var currentMedications = document.getElementById('current-medications').value;
  var attachments = document.getElementById('attachments').files;

  var contactPreferences = Array.from(
    document.querySelectorAll('input[name="contact-preferences[]"]:checked')
  ).map(function (checkbox) {
    return checkbox.id;
  });

  var formData = {
    issueCategory,
    urgencyLevel,
    issueTitle,
    detailedDescription,
    duration,
    previousMedicalHistory,
    currentMedications,
    attachmentNames: Array.from(attachments).map(file => file.name),
    contactPreferences
  };

  console.log("Submitted Data:", formData);

  alert("Your report has been submitted successfully!");

  localStorage.removeItem('draftData');

  document.querySelector('form').reset();
});


function saveDraft() {
  var issueCategory = document.getElementById('issue-category').value;
  var urgencyLevel = document.getElementById('urgency-level').value;
  var issueTitle = document.getElementById('issue-title').value;
  var detailedDescription = document.getElementById('detailed-description').value;
  var duration = document.getElementById('duration').value;
  var previousMedicalHistory = document.getElementById('previous-medical-history').value;
  var currentMedications = document.getElementById('current-medications').value;

  var contactPreferences = Array.from(
    document.querySelectorAll('input[name="contact-preferences[]"]:checked')
  ).map(function (checkbox) {
    return checkbox.id;
  });

  var draftData = {
    issueCategory,
    urgencyLevel,
    issueTitle,
    detailedDescription,
    duration,
    previousMedicalHistory,
    currentMedications,
    contactPreferences
  };

  localStorage.setItem('draftData', JSON.stringify(draftData));

  alert("Draft saved successfully!");
}
