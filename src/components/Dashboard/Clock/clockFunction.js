export const updateClock = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = now.toLocaleString('fr-FR', { weekday: 'long' });
    const month = now.toLocaleString('fr-FR', { month: 'long' });
    const year = now.getFullYear();

    const hoursContainer = document.querySelector('.hours');
    const minutesContainer = document.querySelector('.minutes');
    const secondsContainer = document.querySelector('.secondes');
    const dateContainer = document.querySelector('.date');

    hoursContainer.textContent = hours.toString().padStart(2, '0');
    minutesContainer.textContent = minutes.toString().padStart(2, '0');
    secondsContainer.textContent = seconds.toString().padStart(2, '0');
    dateContainer.textContent = `${day} ${month} ${year}`;
}

setInterval(updateClock, 1000);
