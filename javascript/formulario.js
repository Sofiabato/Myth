let currentStep = 0;

const steps = document.querySelectorAll(".step");
const dots = document.querySelectorAll(".dot");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

function showStep(index) {
  // steps
  steps.forEach(step => step.classList.remove("active"));
  steps[index].classList.add("active");

  // dots
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");

  // 🔹 BOTÓN ANTERIOR
  if (index === 0) {
    prevBtn.style.visibility = "hidden";
  } else {
    prevBtn.style.visibility = "visible";
  }

  // 🔹 BOTÓN SIGUIENTE / FINALIZAR
  if (index === steps.length - 1) {
    nextBtn.textContent = "Finalizar";
  } else {
    nextBtn.textContent = "Siguiente";
  }
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
  window.location.href = "../../pages/auth/login.html";
}

showStep(currentStep);