const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const confirmButton = document.getElementById('confirm');

seats.forEach(seat => {
  seat.addEventListener('click', () => {
    seat.classList.toggle('selected');
  });
});

confirmButton.addEventListener('click', () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  alert(`You have selected ${selectedSeats.length} seat(s).`);
});