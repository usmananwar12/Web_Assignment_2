document.addEventListener("DOMContentLoaded", function () {
    function generateStars(rating) {
        let starsHTML = '';
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fas fa-star fa-1x"></i>';
        }
        if (halfStar) {
            starsHTML += '<i class="fas fa-star-half-alt fa-1x"></i>';
        }
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="far fa-star fa-1x"></i>';
        }

        return starsHTML;
    }

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'reviews.json', true);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.responseText);
            const container = document.getElementById('reviews-container');

            data.reviews.forEach(review => {
                const reviewHTML = `
                <div class="col-md-4 mb-4">
                    <div class="service-card">
                        <h2>${review.name}</h2>
                        ${generateStars(review.rating)}
                        <p>"${review.review}"</p>
                    </div>
                </div>
            `;
                container.innerHTML += reviewHTML;
            });
        } else {
            console.error('Error loading reviews. Status:', xhr.status);
        }
    };

    xhr.onerror = function () {
        console.error('Network error while loading reviews.');
    };

    xhr.send();
    
    //jquerry 
    $(document).ready(function () {
        $('#chatBtn').click(function () {
            $('#chatPopup').fadeIn();
        });

        $('#closeChat').click(function () {
            $('#chatPopup').fadeOut();
        });
    });

    $('#feedbackForm').submit(function (e) {
        let name = $('#name').val();
        let feedback = $('#message').val();

        if (!feedback || !name) {
            alert("Please fill all fields.");
            e.preventDefault();
        } else {
            alert("Thank you for your feedback!");
        }
    });

    $('h2').click(function () {
        console.log('H2 tag clicked:', $(this).text());
    });
});