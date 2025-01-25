async function suggestHairstyle() {
    const userPhoto = document.getElementById('userPhoto').files[0];
    const botResponse = document.getElementById('botResponse');

    if (userPhoto) {
        botResponse.innerHTML = '<p>Analyzing your photo...</p>';

        const formData = new FormData();
        formData.append('image', userPhoto);

        try {
            const response = await fetch('http://127.0.0.1:5000/process-image', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                botResponse.innerHTML = `
                    <img src="data:image/png;base64,${data.result_image}" alt="Suggested Hairstyle" style="max-width: 300px;">
                `;
            } else {
                botResponse.innerHTML = '<p>Failed to analyze the image. Please try again later.</p>';
            }
        } catch (error) {
            console.error('Error:', error);
            botResponse.innerHTML = '<p>Something went wrong. Please try again later.</p>';
        }
    } else {
        botResponse.innerHTML = '<p>Please upload a photo.</p>';
    }
}
