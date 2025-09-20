// Accessibility helpers and simple form handling
function showInfo(name, text){
  alert(name + " - " + text);
}

function openAdoptForm(event){
  const btn = event.currentTarget;
  const animal = btn.getAttribute('data-animal') || '';
  const modal = document.getElementById('adopt-modal');
  const input = document.getElementById('animal-name');
  input.value = animal;
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  // focus first input
  setTimeout(()=> document.getElementById('full-name').focus(), 100);
}

function closeModal(){
  const modal = document.getElementById('adopt-modal');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function submitAdoption(e){
  e.preventDefault();
  const form = document.getElementById('adopt-form');
  const data = new FormData(form);
  // Simula envío
  alert('Solicitud enviada. Gracias!\nAnimal: ' + data.get('animal'));
  closeModal();
  form.reset();
}

function submitContact(e){
  e.preventDefault();
  const form = document.getElementById('contact-form');
  const data = new FormData(form);
  alert('Formulario enviado. Gracias por ayudar!\nTipo: ' + data.get('type'));
  form.reset();
}

// Close modal on ESC
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    const modal = document.getElementById('adopt-modal');
    if(modal && modal.getAttribute('aria-hidden') === 'false') closeModal();
  }
});
