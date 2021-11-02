let AnchoHuecoObra = document.getElementById("entry1"); //ancho hueco
let AltoHuecoObra = document.getElementById("entry2"); //alto hueco
let data3 = document.getElementById("entry3"); // x
let data4 = document.getElementById("entry4"); // autoportante
let HolguraAnchoAutoportante = document.getElementById("entry5"); // holgura ancho autoportante
let HolguraAltoAutoportante = document.getElementById("entry6"); // holgura alto autoportante
let HolguraAnchoPuerta = document.getElementById("entry7"); // holgura ancho puerta
let HolguraAltoPuerta = document.getElementById("entry8"); // holgura alto puerta
let data9 = document.getElementById("gridRadios1"); //Frame
let data10 = document.getElementById("gridRadios2"); //Slim
let data11 = document.getElementById("gridRadios3"); //Semitransparent
let data12 = document.getElementById("gridRadios4"); //Transparent
let data13 = document.getElementById("gridRadios5"); //Frame Break Out
let data14 = document.getElementById("gridRadios6"); //SlimBreak Out
let data15 = document.getElementById("gridRadios1b"); //1hoja
let data16 = document.getElementById("gridRadios2b"); //1fijo+1hoja
let data17 = document.getElementById("gridRadios3b"); //2hojas
let data18 = document.getElementById("gridRadios4b"); //2fijos+2hojas
let data19 = document.getElementById("gridRadios5b"); //opcion 5b
let data20 = document.getElementById("gridRadios6b"); //opcion 6b

const resultados = {
    X : data3.value,
    FW : 0,
    FH : 0,
    COW : 0,
    COH : 0,
    CL : 0
}
//let a = "";
//const X = Number(data3.value);
// FUNCIONES PUERTAS TIPO FRAME
//tipo 1
function frame1h(ancho, alto, dX) {
  resultados.X = dX;
  resultados.FW = ancho;
  resultados.FH = alto;
  resultados.COW = resultados.FW - 22;
  resultados.COH = resultados.FH;
  resultados.CL = 2 * resultados.COW + 297;
  return [resultados.FW, resultados.FH, resultados.COW, resultados.COH, resultados.CL, "Frame 1 hoja movil"];
}
//tipo 2
function frame1f1h(ancho, alto, dX) {
  resultados.X = dX;
  resultados.FW = ancho;
  resultados.FH = alto;
  resultados.COW = (resultados.FW - 88 - resultados.X) / 2;
  resultados.COH = resultados.FH;
  resultados.CL = resultados.FW + 152;
  return [resultados.FW, resultados.FH, resultados.COW, resultados.COH, resultados.CL, "Frame 1 fijo + 1 hoja movil"];
}
//tipo 3
function frame2h(ancho, alto, dX) {
  resultados.X = dX;
  resultados.FW = ancho;
  resultados.FH = alto;
  resultados.COW = resultados.FW - 22;
  resultados.COH = resultados.FH;
  resultados.CL = 2 * resultados.COW + 297;
  return [resultados.FW, resultados.FH, resultados.COW, resultados.COH, resultados.CL, "Frame 2 hojas moviles"];
}
//tipo4
function frame2f2h(ancho, alto, dX) {
  resultados.X = dX;
  resultados.FW = ancho;
  resultados.FH = alto;
  resultados.COW = (resultados.FW - 160 - 2 * resultados.X) / 2;
  resultados.COH = resultados.FH;
  resultados.CL = resultados.FW;
  return [resultados.FW, resultados.FH, resultados.COW, resultados.COH, resultados.CL, "Frame 2 fijos + 2 hojas moviles"];
}
//tipo5
function slim1h(ancho, alto, dX) {
  resultados.X = dX;
  resultados.FW = ancho;
  resultados.FH = alto;
  resultados.COW = resultados.FW - 7;
  resultados.COH = resultados.FH;
  resultados.CL = 2 * resultados.COW + 195;
  return [resultados.FW, resultados.FH, resultados.COW, resultados.COH, resultados.CL, "Slim 1 hoja movil"];
}
//tipo6
function slim1f1h(ancho, alto, dX) {
  resultados.X = dX;
  resultados.FW = ancho;
  resultados.FH = alto;
  resultados.COW = (resultados.FW - 37 - resultados.X) / 2;
  resultados.COH = resultados.FH - 50;
  resultados.CL = resultados.FW + 110;
  return [resultados.FW, resultados.FH, resultados.COW, resultados.COH, resultados.CL, "Slim 1 fijo + 1 hoja movil"];
}
//tipo7
function slim2h(ancho, alto, dX) {
  resultados.X = dX;
  resultados.FW = ancho;
  resultados.FH = alto;
  resultados.COW = resultados.FW - 4;
  resultados.COH = resultados.FH;
  resultados.CL = 2 * resultados.COW + 195;
  return [resultados.FW, resultados.FH, resultados.COW, resultados.COH, resultados.CL, "Slim 2 hojas moviles"];
}
//tipo8
function slim2f2h(ancho, alto, dX) {
  resultados.X = dX;
  resultados.FW = ancho;
  resultados.FH = alto;
  resultados.COW = resultados.FW / 2 - 32 - resultados.X;
  resultados.COH = resultados.FH - 50;
  resultados.CL = resultados.FW;
  return [resultados.FW, resultados.FH, resultados.COW, resultados.COH, resultados.CL, "Slim 2 fijos + 2 hojas moviles"];
}
//tipo9
function semitransparent1h(ancho, alto, dX) {
  resultados.X = dX;
  resultados.FW = ancho;
  resultados.FH = alto;
  resultados.COW = resultados.FW;
  resultados.COH = resultados.FH;
  resultados.CL = 2 * resultados.COW + 231;
  return [resultados.FW, resultados.FH, resultados.COW, resultados.COH, resultados.CL, "Semitransparent 1 hoja movil"];
}
//tipo10
function semitransparent1f1h(ancho, alto, dX) {
  resultados.X = dX;
  resultados.FW = ancho;
  resultados.FH = alto;
  resultados.COW = (resultados.FW - 50 - resultados.X) / 2;
  resultados.COH = resultados.FH;
  resultados.CL = resultados.FW + 130;
  return [resultados.FW, resultados.FH, resultados.COW, resultados.COH, resultados.CL, "Semitransparent 1 fijo + 1 hoja movil"];
}
//tipo11
function semitransparent2h(ancho, alto, dX) {
  resultados.X = dX;
  resultados.FW = ancho;
  resultados.FH = alto;
  resultados.COW = resultados.FW;
  resultados.COH = resultados.FH;
  resultados.CL = 2 * resultados.COW + 231;
  return [resultados.FW, resultados.FH, resultados.COW, resultados.COH, resultados.CL, "Semitransparent 2 hojas moviles"];
}
//tipo12
function semitransparent2f2h(ancho, alto, dX) {
  resultados.X = dX;
  resultados.FW = ancho;
  resultados.FH = alto;
  resultados.COW = (resultados.FW - 100 - 2 * resultados.X) / 2;
  resultados.COH = resultados.FH;
  resultados.CL = resultados.FW;
  return [resultados.FW, resultados.FH, resultados.COW, resultados.COH, resultados.CL, "Semitransparent 2 fijos + 2 hojas moviles"];
}
//tipo13
function transparent1h(ancho, alto, dX) {
  resultados.X = dX;
  resultados.FW = ancho;
  resultados.FH = alto;
  resultados.COW = resultados.FW;
  resultados.COH = resultados.FH;
  resultados.CL = 2 * resultados.COW + 231;
  return [resultados.FW, resultados.FH, resultados.COW, resultados.COH, resultados.CL, "Transparent 1 hoja movil"];
}
//tipo14
function transparent1f1h(ancho, alto, dX) {
  resultados.X = dX;
  resultados.FW = ancho;
  resultados.FH = alto;
  resultados.COW = (resultados.FW - 50 - resultados.X) / 2;
  resultados.COH = resultados.FH;
  resultados.CL = resultados.FW + 130;
  return [resultados.FW, resultados.FH, resultados.COW, resultados.COH, resultados.CL, "Transparent 1 fijo + 1 hoja movil"];
}
//tipo15
function transparent2h(ancho, alto, dX) {
  resultados.X = dX;
  resultados.FW = ancho;
  resultados.FH = alto;
  resultados.COW = resultados.FW;
  resultados.COH = resultados.FH;
  resultados.CL = 2 * resultados.COW + 231;
  return [resultados.FW, resultados.FH, resultados.COW, resultados.COH, resultados.CL, "Transparent 2 hojas moviles"];
}
//tipo16
function transparent2f2h(ancho, alto, dX) {
  resultados.X = dX;
  resultados.FW = ancho;
  resultados.FH = alto;
  resultados.COW = (resultados.FW - 100 - 2 * resultados.X) / 2;
  resultados.COH = resultados.FH;
  resultados.CL = resultados.FW;
  return [resultados.FW, resultados.FH, resultados.COW, resultados.COH, resultados.CL, "Transparent 2 fijos + 2 hojas moviles"];
}
//tipo17
function framebreakout1f1h(ancho, alto, dX) {
  resultados.X = dX;
  resultados.FW = ancho;
  resultados.FH = alto;
  resultados.COW = (resultados.FW - 127 - resultados.X) / 2;
  resultados.COH = resultados.FH - 55;
  resultados.CL = resultados.FW + 113;
  return [resultados.FW, resultados.FH, resultados.COW, resultados.COH, resultados.CL, "Frame Break Out 1 fijo + 1 hoja movil"];
}
//tipo18
function framebreakout2f2h(ancho, alto, dX) {
  resultados.X = dX;
  resultados.FW = ancho;
  resultados.FH = alto;
  resultados.COW = (resultados.FW - 160 - 2 * resultados.X) / 2;
  resultados.COH = resultados.FH - 55;
  resultados.CL = resultados.FW;
  return [resultados.FW, resultados.FH, resultados.COW, resultados.COH, resultados.CL, "Frame Break Out 2 fijos + 2 hojas moviles"];
}
//tipo19
function slimbreakout1f1h(ancho, alto, dX) {
  resultados.X = dX;
  resultados.FW = ancho;
  resultados.FH = alto;
  resultados.COW = (resultados.FW - 67 - resultados.X) / 2;
  resultados.COH = resultados.FH - 44;
  resultados.CL = resultados.FW + 102;
  return [resultados.FW, resultados.FH, resultados.COW, resultados.COH, resultados.CL, "Slim Break Out 1 fijo + 1 hoja movil"];
}
//tipo20
function slimbreakout2f2h(ancho, alto, dX) {
  resultados.X = dX;
  resultados.FW = ancho;
  resultados.FH = alto;
  resultados.COW = (resultados.FW - 104 - 2 * resultados.X) / 2;
  resultados.COH = resultados.FH - 44;
  resultados.CL = resultados.FW;
  return [resultados.FW, resultados.FH, resultados.COW, resultados.COH, resultados.CL, "Slim Break Out 2 fijos + 2 hojas moviles"];
}

const inicial = {
    FW_autoportante : 0,
    FH_autoportante : 0,
    AnchoHueco : 0,
    AltoHueco : 0,
}

const button = document.getElementById("button1");
button.onclick = function () {
  if (data4.checked == true) {
    inicial.FW_autoportante = AnchoHuecoObra.value - HolguraAnchoAutoportante.value;
    inicial.FH_autoportante = AltoHuecoObra.value - HolguraAltoAutoportante.value;
    inicial.AnchoHueco = inicial.FW_autoportante - HolguraAnchoPuerta.value - 100;
    inicial.AltoHueco = inicial.FH_autoportante - HolguraAltoPuerta.value - 163;
  } else {
    inicial.AnchoHueco = AnchoHuecoObra.value - HolguraAnchoPuerta.value;
    inicial.AltoHueco = AltoHuecoObra.value - HolguraAltoPuerta.value;
  }

    if (data9.checked == true && data15.checked == true) {
    var presentar = frame1h(inicial.AnchoHueco, inicial.AltoHueco, data3.value);
  } else if (data9.checked == true && data16.checked == true) {
    var presentar = frame1f1h(inicial.AnchoHueco, inicial.AltoHueco, data3.value);
  } else if (data9.checked == true && data17.checked == true) {
    var presentar = frame2h(inicial.AnchoHueco, inicial.AltoHueco, data3.value);
  } else if (data9.checked == true && data18.checked == true) {
    var presentar = frame2f2h(inicial.AnchoHueco, inicial.AltoHueco, data3.value);
  } else if (data10.checked == true && data15.checked == true) {
    var presentar = slim1h(inicial.AnchoHueco, inicial.AltoHueco, data3.value);
  } else if (data10.checked == true && data16.checked == true) {
    var presentar = slim1f1h(inicial.AnchoHueco, inicial.AltoHueco, data3.value);
  } else if (data10.checked == true && data17.checked == true) {
    var presentar = slim2h(inicial.AnchoHueco, inicial.AltoHueco, data3.value);
  } else if (data10.checked == true && data18.checked == true) {
    var presentar = slim2f2h(inicial.AnchoHueco, inicial.AltoHueco, data3.value);
  } else if (data11.checked == true && data15.checked == true) {
    var presentar = semitransparent1h(inicial.AnchoHueco, inicial.AltoHueco, data3.value);
  } else if (data11.checked == true && data16.checked == true) {
    var presentar = semitransparent1f1h(inicial.AnchoHueco, inicial.AltoHueco, data3.value);
  } else if (data11.checked == true && data17.checked == true) {
    var presentar = semitransparent2h(inicial.AnchoHueco, inicial.AltoHueco, data3.value);
  } else if (data11.checked == true && data18.checked == true) {
    var presentar = semitransparent2f2h(inicial.AnchoHueco, inicial.AltoHueco, data3.value);
  } else if (data12.checked == true && data15.checked == true) {
    var presentar = transparent1h(inicial.AnchoHueco, inicial.AltoHueco, data3.value);
  } else if (data12.checked == true && data16.checked == true) {
    var presentar = transparent1f1h(inicial.AnchoHueco, inicial.AltoHueco, data3.value);
  } else if (data12.checked == true && data17.checked == true) {
    var presentar = transparent2h(inicial.AnchoHueco, inicial.AltoHueco, data3.value);
  } else if (data12.checked == true && data18.checked == true) {
    var presentar = transparent2f2h(inicial.AnchoHueco, inicial.AltoHueco, data3.value);
  } else if (data13.checked == true && data16.checked == true) {
    var presentar = framebreakout1f1h(inicial.AnchoHueco, inicial.AltoHueco, data3.value);
  } else if (data13.checked == true && data18.checked == true) {
    var presentar = framebreakout2f2h(inicial.AnchoHueco, inicial.AltoHueco, data3.value);
  } else if (data14.checked == true && data16.checked == true) {
    var presentar = slimbreakout1f1h(inicial.AnchoHueco, inicial.AltoHueco, data3.value);
  } else if (data14.checked == true && data18.checked == true) {
    var presentar = slimbreakout2f2h(inicial.AnchoHueco, inicial.AltoHueco, data3.value);
  } else {
    var presentar = ["N/A", "N/A", "N/A", "N/A", "N/A", "Modelo no existente"];
  }

  if (data4.checked == true) {
    document.body.innerHTML = `
        <h3>Calculo de medidas puertas</h3>
        <h4>Tipo: ${presentar[5]}<br>
        Ancho hueco:${AnchoHuecoObra.value} mm | Alto Hueco:${AltoHuecoObra.value} mm <br></h4>
        <p>FW Aut: ${inicial.FW_autoportante} mm -- Holgura: ${HolguraAnchoAutoportante.value} mm<br>
        FH Aut: &nbsp${inicial.FH_autoportante} mm -- Holgura: ${HolguraAltoAutoportante.value} mm<br><br>
        FW: ${presentar[0]} mm -- Holgura: ${HolguraAnchoPuerta.value} mm<br>
        FH: &nbsp${presentar[1]} mm -- Holgura: ${HolguraAltoPuerta.value} mm<br><br>
        COW: ${presentar[2]} mm<br>
        COH: &nbsp${presentar[3]} mm<br><br>
        CL: ${presentar[4]} mm<br>
        X: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp${resultados.X} mm<br></p>
        <a href="#" onclick="window.location.reload(true);">Introducir nuevos datos...</a>`;
  } else {
    document.body.innerHTML = `
        <h3>Calculo de medidas puertas</h3>
        <h4>Tipo: ${presentar[5]}<br>
        Ancho hueco:${AnchoHuecoObra.value} mm | Alto Hueco:${AltoHuecoObra.value} mm <br></h4>
        <p>FW: ${presentar[0]} mm -- Holgura: ${HolguraAnchoPuerta.value} mm<br>
        FH: &nbsp${presentar[1]} mm -- Holgura: ${HolguraAltoPuerta.value} mm<br><br>
        COW: ${presentar[2]} mm<br>
        COH: &nbsp${presentar[3]} mm<br><br>
        CL: ${presentar[4]} mm<br>
        X: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp${resultados.X} mm<br></p>
        <a href="#" onclick="window.location.reload(true);">Introducir nuevos datos...</a>`;
  }
};
