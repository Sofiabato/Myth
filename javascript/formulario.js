let currentStep = 0;

const steps = document.querySelectorAll(".step");
const dots = document.querySelectorAll(".dot");

function showStep(index) {
  steps.forEach(step => step.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  steps[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  } else {
    submitPreferences();
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

function submitPreferences() {
  console.log("Formulario completado");
}

showStep(currentStep);