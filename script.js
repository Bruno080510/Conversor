document.querySelector('#botaoConverte').addEventListener('click', function () {
  let informado = document.querySelector("#valor").value;
  let seleciona = document.querySelector("#selector").value;
  var nonumber = document.querySelector("#valor").value;
  var naoenumber = document.querySelector("#selector").value;
  let tr = document.createElement('tr');
  let corpo = document.querySelector('tbody');

  if ((nonumber != "") && (naoenumber != 0)) {

    informado = parseFloat(informado);
    if (seleciona === 'f') {
      var celsius = ((informado - 32) / 1.8).toFixed(2);
      var fare = informado;
      var kaka = ((informado + 459.67) / 1.8).toFixed(2);
      var Rank = ((informado + 459.67)).toFixed(2);
    }

    if (seleciona === 'c') {
      var celsius = informado;
      var fare = ((informado * 1.8) + 32).toFixed(2);
      var kaka = ((informado + 273)).toFixed(2);
      var Rank = ((informado + 273.15) * 1.8).toFixed(2);
    }

    if (informado > 0) {
      if (seleciona === 'k') {
        var celsius = ((informado - 273.15).toFixed(2));
        var fare = ((informado * 1.8) - 459.67).toFixed(2);
        var kaka = informado;
        var Rank = ((informado * 1.8)).toFixed(2);
      }
    }

    if (seleciona === 'r') {
      var celsius = ((informado - 491.67) / 1.8).toFixed(2);
      var fare = ((informado - 459.67)).toFixed(2);
      var kaka = ((informado / 1.8)).toFixed(2);
    }

    let Cel = document.createElement("td");
    Cel.append(celsius);
    tr.append(Cel);

    let Far = document.createElement("td");
    Far.append(fare);
    tr.append(Far);

    let Kelvin = document.createElement("td");
    Kelvin.append(kaka);
    tr.append(Kelvin);

    let Reiking = document.createElement("td");
    Reiking.append(Rank);
    tr.append(Reiking);
    corpo.append(tr)

    document.querySelector("#valor").value = "";
  }

})