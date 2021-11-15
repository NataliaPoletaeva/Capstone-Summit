window.addEventListener('DOMContentLoaded', () => {
    const speakerCard = document.createElement('div');
    speakerCard.className = 'speaker-card';
    speakerCard.innerHTML = `<div class="speaker-card">
                     <img class="img-back" src="">
                     <img src="" alt="">
                     <span class="speaker-about">
                         <h3 class="speaker-name"></h3>
                         <div class="speaker-position"></div>
                         <p class="speaker-info"></p>
                     </span>
                 </div>
                 `;
    const featSpeakers = document.querySelector('.speakers');
    featSpeakers.appendChild(speakerCard);
});