document.addEventListener("DOMContentLoaded", function () {

    const soapButton = document.getElementById("soap-button");
    const soap = document.getElementById("soap");

    const restButton = document.getElementById("rest-button");
    const rest = document.getElementById("rest");

    const graqButton = document.getElementById("graq-button");
    const graq = document.getElementById("graq");

    const grButton = document.getElementById("gr-button");
    const gr = document.getElementById("gr");

    const restfulButton = document.getElementById("restful-button");
    const restful = document.getElementById("restful");

    const jaxButton = document.getElementById("jax-button");
    const jax = document.getElementById("jax");

    const jsrButton = document.getElementById("jsr-button");
    const jsr = document.getElementById("jsr");

    const wsButton = document.getElementById("ws-button");
    const ws = document.getElementById("ws");

    const wsdlButton = document.getElementById("wsdl-button");
    const wsdl = document.getElementById("wsdl");

    const uddiButton = document.getElementById("uddi-button");
    const uddi = document.getElementById("uddi");

    const wsilButton = document.getElementById("wsil-button");
    const wsil = document.getElementById("wsil");
  
    soapButton.addEventListener("click", function () {
        soap.classList.toggle("hidden");
      if (soap.classList.contains("hidden")) {
        soapButton.textContent = "Mostrar información";
      } else {
        soapButton.textContent = "Ocultar";
      }
    });


    restButton.addEventListener("click", function () {
        rest.classList.toggle("hidden");
      if (rest.classList.contains("hidden")) {
        restButton.textContent = "Mostrar información";
      } else {
        restButton.textContent = "Ocultar";
      }
    });

    graqButton.addEventListener("click", function () {
        graq.classList.toggle("hidden");
      if (graq.classList.contains("hidden")) {
        graqButton.textContent = "Mostrar información";
      } else {
        graqButton.textContent = "Ocultar";
      }
    });

    grButton.addEventListener("click", function () {
        gr.classList.toggle("hidden");
      if (gr.classList.contains("hidden")) {
        grButton.textContent = "Mostrar información";
      } else {
        grButton.textContent = "Ocultar";
      }
    });

    restfulButton.addEventListener("click", function () {
        restful.classList.toggle("hidden");
      if (restful.classList.contains("hidden")) {
        restfulButton.textContent = "Mostrar información";
      } else {
        restfulButton.textContent = "Ocultar";
      }
    });


    jaxButton.addEventListener("click", function () {
        jax.classList.toggle("hidden");
      if (jax.classList.contains("hidden")) {
        jaxButton.textContent = "Mostrar información";
      } else {
        jaxButton.textContent = "Ocultar";
      }
    });


    jsrButton.addEventListener("click", function () {
        jsr.classList.toggle("hidden");
      if (jsr.classList.contains("hidden")) {
        jsrButton.textContent = "Mostrar información";
      } else {
        jsrButton.textContent = "Ocultar";
      }
    });


    wsButton.addEventListener("click", function () {
        ws.classList.toggle("hidden");
      if (ws.classList.contains("hidden")) {
        wsButton.textContent = "Mostrar información";
      } else {
        wsButton.textContent = "Ocultar";
      }
    });


    wsdlButton.addEventListener("click", function () {
        wsdl.classList.toggle("hidden");
      if (wsdl.classList.contains("hidden")) {
        wsdlButton.textContent = "Mostrar información";
      } else {
        wsdlButton.textContent = "Ocultar";
      }
    });


    uddiButton.addEventListener("click", function () {
        uddi.classList.toggle("hidden");
      if (uddi.classList.contains("hidden")) {
        uddiButton.textContent = "Mostrar información";
      } else {
        uddiButton.textContent = "Ocultar";
      }
    });


    wsilButton.addEventListener("click", function () {
        wsil.classList.toggle("hidden");
      if (wsil.classList.contains("hidden")) {
        wsilButton.textContent = "Mostrar información";
      } else {
        wsilButton.textContent = "Ocultar";
      }
    });
  });
  