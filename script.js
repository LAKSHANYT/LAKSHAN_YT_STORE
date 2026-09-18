const textElement = document.getElementById("type-text");
const textToType = "Developer & Tech Enthusiast";
let index = 0;

function typeEffect() {
    if (index < textToType.length) {
        textElement.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}function openBuyModal(productName, price) {
    document.getElementById("modalTitle").innerText = productName;
    document.getElementById("modalPrice").innerText = "Price: " + price;
    document.getElementById("buyModal").style.display = "block";
}

function closeBuyModal() {
    document.getElementById("buyModal").style.display = "none";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    var modal = document.getElementById("buyModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}function openBuyModal(productName, price) {
    document.getElementById("modalTitle").innerText = productName;
    document.getElementById("modalPrice").innerText = "Price: " + price;
    document.getElementById("buyModal").style.display = "block";

    // ඔයාගේ Telegram username එක මෙතනට දාන්න
    const telegramUsername = "lakshan_yt_username"; 
    
    // Message එක සාදා ගැනීම
    const message = encodeURIComponent(`Hi, I want to buy ${productName} (${price}).`);
    
    // තත්පර 3කට පසු ස්වයංක්‍රීයව Telegram එකට Redirect වේ
    setTimeout(function() {
        window.open(`https://t.me/${telegramUsername}?text=${message}`, '_blank');
    }, 3000); // 3000ms = 3 seconds
}

function closeBuyModal() {
    document.getElementById("buyModal").style.display = "none";
}// YouTube API Key සහ Channel ID එක මෙතැනට දමන්න
const API_KEY = 'YOUR_YOUTUBE_API_KEY';
const CHANNEL_ID = 'YOUR_CHANNEL_ID';

async function fetchYouTubeStats() {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`);
        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
            const stats = data.items[0].statistics;
            
            // Format numbers (e.g. 12500 -> 12.5K)
            document.getElementById('yt-subscribers').innerText = formatNumber(stats.subscriberCount);
            document.getElementById('yt-views').innerText = formatNumber(stats.viewCount);
        }
    } catch (error) {
        console.error("Error fetching YouTube stats:", error);
    }
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num;
}

// Page එක load වෙද්දී call කිරීම
fetchYouTubeStats();

// Start typing effect on page load
window.onload = typeEffect;