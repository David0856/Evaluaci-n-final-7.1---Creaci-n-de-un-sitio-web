
document.addEventListener("DOMContentLoaded",()=>{
  // Resalta las tarjetas al pasar el mouse.
  document.querySelectorAll(".menu-card").forEach(card=>{
    card.addEventListener("mouseenter",()=>card.classList.add("shadow-lg"));
    card.addEventListener("mouseleave",()=>card.classList.remove("shadow-lg"));
  });

  // Muestra detalles al hacer clic.
  document.querySelectorAll("[data-detail]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const target=document.querySelector(btn.dataset.detail);
      if(target) target.classList.toggle("d-none");
    });
  });

  // Validación de formulario en tiempo real.
  document.querySelectorAll("form.needs-validation").forEach(form=>{
    form.addEventListener("submit",e=>{
      e.preventDefault();
      if(!form.checkValidity()){e.stopPropagation();}
      else{
        const msg=form.querySelector(".form-message");
        if(msg) msg.textContent="¡Gracias! Su mensaje fue enviado correctamente.";
        form.reset();
      }
      form.classList.add("was-validated");
    });
  });
});
