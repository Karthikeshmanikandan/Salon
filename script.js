/*<script>
const photoInput = document.getElementById('photoInput');
const getSuggestionBtn = document.getElementById('getSuggestionBtn');
const suggestionOutput = document.getElementById('suggestionOutput');

getSuggestionBtn.addEventListener('click', async () => {
    const file = photoInput.files[0];
    if (!file) {
        suggestionOutput.innerHTML = '<p>Please upload a photo first.</p>';
        return;
    }

    suggestionOutput.innerHTML = '<p>Processing your photo...</p>';

    const formData = new FormData();
    formData.append('image', file);

    try {
        const response = await fetch('https://your-backend-api-url.com/analyze', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            suggestionOutput.innerHTML = `
                <h3>Suggested Hairstyle</h3>
                <img src="data:image/png;base64,${data.result_image}" alt="Suggested Hairstyle" style="max-width: 300px;">
                <p>${data.suggestion_text}</p>
            `;
        } else {
            suggestionOutput.innerHTML = '<p>Could not process the image. Please try again later.</p>';
        }
    } catch (error) {
        console.error('Error:', error);
        suggestionOutput.innerHTML = '<p>Something went wrong. Please try again later.</p>';
    }*/
































    