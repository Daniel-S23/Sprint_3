// Window

const burger = document.querySelector("#btn__burger");

const links = document.querySelectorAll(".nav__link");

burger.addEventListener("click", () => {
  links.forEach(link => {
    if (link.style.display === "block") {
      link.style.display = "none"
    } else {
      link.style.display = "block"
    }
  })
})

// Form 

const formulario = document.querySelector("#formulario");

function mostrarTipo(resultado) {
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const arrayFiltrado = resultado.filter(item => {
      const usuario = tipo.value.toLowerCase();
      const letraApi = item.Tipo.toLowerCase();
      if (letraApi.indexOf(usuario) !== -1) {
        return item
      }
    })
    mostrarHTML(arrayFiltrado)
  })
}

//location

function filtros(resultado) {
  const ubicacion = document.querySelector("#ubicacion");

  ubicacion.addEventListener("change", (e) => {
    const query = e.target.value

    if (query === "") {
      mostrarHTML(resultado)
    } else {
      const arrayFiltrado = resultado.filter(item => item.ubicacion === query)
      mostrarHTML(arrayFiltrado)
    }
  })
}
