function submitFeedback() {

    alert('Thank you for your valuable feedback')

    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    document.getElementById('userInfo').style.display = 'block';
}

const submitButton=document.getElementById('submitBtn');

submitButton.onclick = submitFeedback;

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });

// Practice task
// 1. In this task you need to create one more text area
// to ask users to share their experience with the product
// as well and show the result along with other details
// after clicking on Submit Feedback button.
// 2. To complete this task,
// you can use <textarea> tag in html file
// and give id='userExperince' as attribute for this tag.
// 3. Then access the details entered by user in javaScript file
// by accessing the input of this textarea
// using document.getElementById('userExperince')
// and store its value in one variable.
// 4. Then show the output after button is clicked
// with other user's entered details.