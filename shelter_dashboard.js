const addPetBtn = document.querySelector('.AddPet');
const modal = document.getElementById('addPetModal');
const closeModalBtn = document.getElementById('closeModal');
const addPetForm = document.getElementById('addPetForm');

addPetBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

addPetForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const petType = addPetForm.petType.value;
  const petName = addPetForm.petName.value.trim();
  const petAge = addPetForm.petAge.value;
  const petPicture = addPetForm.petPicture.files[0];

  if (!petType || !petName || !petAge || !petPicture) {
    alert('Please fill in all fields.');
    return;
  }

  const reader = new FileReader();

  reader.onload = function (event) {
    const newPet = {
      type: petType.toLowerCase(),
      name: petName,
      age: petAge,
      image: event.target.result
    };

    const existingPets = JSON.parse(localStorage.getItem('pets')) || [];
    existingPets.push(newPet);
    localStorage.setItem('pets', JSON.stringify(existingPets));

    alert('Pet added successfully!');
    addPetForm.reset();
    modal.style.display = 'none';
  };

  reader.readAsDataURL(petPicture);
});
