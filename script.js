function suggestHairstyle() {
    const userPhoto = document.getElementById('userPhoto').files[0];
    const botResponse = document.getElementById('botResponse');
    if (userPhoto) {
        botResponse.innerHTML = '<p>Analyzing your photo...</p><p>Suggested hairstyle: Classic Bob</p><img src="https://via.placeholder.com/300" alt="Suggested Hairstyle">';
    } else {
        botResponse.innerHTML = '<p>Please upload a photo.</p>';
    }
}
