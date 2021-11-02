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

let a = "";
const X = Number(data3.value);
// FUNCIONES PUERTAS TIPO FRAME
//tipo 1
function frame1h(ancho, alto, dX) {
  let X = dX;
  let FW = ancho;
  let FH = alto;
  let COW = FW - 22;
  let COH = FH;
  let CL = 2 * COW + 297;
  return [FW, FH, COW, COH, CL, "Frame 1 hoja movil"];
}
//tipo 2
function frame1f1h(ancho, alto, dX) {
  let X = dX;
  let FW = ancho;
  let FH = alto;
  let COW = (FW - 88 - X) / 2;
  let COH = FH;
  let CL = FW + 152;
  return [FW, FH, COW, COH, CL, "Frame 1 fijo + 1 hoja movil"];
}
//tipo 3
function frame2h(ancho, alto, dX) {
  let X = dX;
  let FW = ancho;
  let FH = alto;
  let COW = FW - 22;
  let COH = FH;
  let CL = 2 * COW + 297;
  return [FW, FH, COW, COH, CL, "Frame 2 hojas moviles"];
}
//tipo4
function frame2f2h(ancho, alto, dX) {
  let X = dX;
  let FW = ancho;
  let FH = alto;
  let COW = (FW - 160 - 2 * X) / 2;
  let COH = FH;
  let CL = FW;
  return [FW, FH, COW, COH, CL, "Frame 2 fijos + 2 hojas moviles"];
}
//tipo5
function slim1h(ancho, alto, dX) {
  let X = dX;
  let FW = ancho;
  let FH = alto;
  let COW = FW - 7;
  let COH = FH;
  let CL = 2 * COW + 195;
  return [FW, FH, COW, COH, CL, "Slim 1 hoja movil"];
}
//tipo6
function slim1f1h(ancho, alto, dX) {
  let X = dX;
  let FW = ancho;
  let FH = alto;
  let COW = (FW - 37 - X) / 2;
  let COH = FH - 50;
  let CL = FW + 110;
  return [FW, FH, COW, COH, CL, "Slim 1 fijo + 1 hoja movil"];
}
//tipo7
function slim2h(ancho, alto, dX) {
  let X = dX;
  let FW = ancho;
  let FH = alto;
  let COW = FW - 4;
  let COH = FH;
  let CL = 2 * COW + 195;
  return [FW, FH, COW, COH, CL, "Slim 2 hojas moviles"];
}
//tipo8
function slim2f2h(ancho, alto, dX) {
  let X = dX;
  let FW = ancho;
  let FH = alto;
  let COW = FW / 2 - 32 - X;
  let COH = FH - 50;
  let CL = FW;
  return [FW, FH, COW, COH, CL, "Slim 2 fijos + 2 hojas moviles"];
}
//tipo9
function semitransparent1h(ancho, alto, dX) {
  let X = dX;
  let FW = ancho;
  let FH = alto;
  let COW = FW;
  let COH = FH;
  let CL = 2 * COW + 231;
  return [FW, FH, COW, COH, CL, "Semitransparent 1 hoja movil"];
}
//tipo10
function semitransparent1f1h(ancho, alto, dX) {
  let X = dX;
  let FW = ancho;
  let FH = alto;
  let COW = (FW - 50 - X) / 2;
  let COH = FH;
  let CL = FW + 130;
  return [FW, FH, COW, COH, CL, "Semitransparent 1 fijo + 1 hoja movil"];
}
//tipo11
function semitransparent2h(ancho, alto, dX) {
  let X = dX;
  let FW = ancho;
  let FH = alto;
  let COW = FW;
  let COH = FH;
  let CL = 2 * COW + 231;
  return [FW, FH, COW, COH, CL, "Semitransparent 2 hojas moviles"];
}
//tipo12
function semitransparent2f2h(ancho, alto, dX) {
  let X = dX;
  let FW = ancho;
  let FH = alto;
  let COW = (FW - 100 - 2 * X) / 2;
  let COH = FH;
  let CL = FW;
  return [FW, FH, COW, COH, CL, "Semitransparent 2 fijos + 2 hojas moviles"];
}
//tipo13
function transparent1h(ancho, alto, dX) {
  let X = dX;
  let FW = ancho;
  let FH = alto;
  let COW = FW;
  let COH = FH;
  let CL = 2 * COW + 231;
  return [FW, FH, COW, COH, CL, "Transparent 1 hoja movil"];
}
//tipo14
function transparent1f1h(ancho, alto, dX) {
  let X = dX;
  let FW = ancho;
  let FH = alto;
  let COW = (FW - 50 - X) / 2;
  let COH = FH;
  let CL = FW + 130;
  return [FW, FH, COW, COH, CL, "Transparent 1 fijo + 1 hoja movil"];
}
//tipo15
function transparent2h(ancho, alto, dX) {
  let X = dX;
  let FW = ancho;
  let FH = alto;
  let COW = FW;
  let COH = FH;
  let CL = 2 * COW + 231;
  return [FW, FH, COW, COH, CL, "Transparent 2 hojas moviles"];
}
//tipo16
function transparent2f2h(ancho, alto, dX) {
  let X = dX;
  let FW = ancho;
  let FH = alto;
  let COW = (FW - 100 - 2 * X) / 2;
  let COH = FH;
  let CL = FW;
  return [FW, FH, COW, COH, CL, "Transparent 2 fijos + 2 hojas moviles"];
}
//tipo17
function framebreakout1f1h(ancho, alto, dX) {
  let X = dX;
  let FW = ancho;
  let FH = alto;
  let COW = (FW - 127 - X) / 2;
  let COH = FH - 55;
  let CL = FW + 113;
  return [FW, FH, COW, COH, CL, "Frame Break Out 1 fijo + 1 hoja movil"];
}
//tipo18
function framebreakout2f2h(ancho, alto, dX) {
  let X = dX;
  let FW = ancho;
  let FH = alto;
  let COW = (FW - 160 - 2 * X) / 2;
  let COH = FH - 55;
  let CL = FW;
  return [FW, FH, COW, COH, CL, "Frame Break Out 2 fijos + 2 hojas moviles"];
}
//tipo19
function slimbreakout1f1h(ancho, alto, dX) {
  let X = dX;
  let FW = ancho;
  let FH = alto;
  let COW = (FW - 67 - X) / 2;
  let COH = FH - 44;
  let CL = FW + 102;
  return [FW, FH, COW, COH, CL, "Slim Break Out 1 fijo + 1 hoja movil"];
}
//tipo20
function slimbreakout2f2h(ancho, alto, dX) {
  let X = dX;
  let FW = ancho;
  let FH = alto;
  let COW = (FW - 104 - 2 * X) / 2;
  let COH = FH - 44;
  let CL = FW;
  return [FW, FH, COW, COH, CL, "Slim Break Out 2 fijos + 2 hojas moviles"];
}

let button = document.getElementById("button1");
button.onclick = function () {
  if (data4.checked == true) {
    var FW_autoportante = AnchoHuecoObra.value - HolguraAnchoAutoportante.value;
    var FH_autoportante = AltoHuecoObra.value - HolguraAltoAutoportante.value;
    var AnchoHueco = FW_autoportante - HolguraAnchoPuerta.value - 100;
    var AltoHueco = FH_autoportante - HolguraAltoPuerta.value - 163;
  } else {
    var AnchoHueco = AnchoHuecoObra.value - HolguraAnchoPuerta.value;
    var AltoHueco = AltoHuecoObra.value - HolguraAltoPuerta.value;
  }

  if (data9.checked == true && data15.checked == true) {
    var presentar = frame1h(AnchoHueco, AltoHueco, data3.value);
  } else if (data9.checked == true && data16.checked == true) {
    var presentar = frame1f1h(AnchoHueco, AltoHueco, data3.value);
  } else if (data9.checked == true && data17.checked == true) {
    var presentar = frame2h(AnchoHueco, AltoHueco, data3.value);
  } else if (data9.checked == true && data18.checked == true) {
    var presentar = frame2f2h(AnchoHueco, AltoHueco, data3.value);
  } else if (data10.checked == true && data15.checked == true) {
    var presentar = slim1h(AnchoHueco, AltoHueco, data3.value);
  } else if (data10.checked == true && data16.checked == true) {
    var presentar = slim1f1h(AnchoHueco, AltoHueco, data3.value);
  } else if (data10.checked == true && data17.checked == true) {
    var presentar = slim2h(AnchoHueco, AltoHueco, data3.value);
  } else if (data10.checked == true && data18.checked == true) {
    var presentar = slim2f2h(AnchoHueco, AltoHueco, data3.value);
  } else if (data11.checked == true && data15.checked == true) {
    var presentar = semitransparent1h(AnchoHueco, AltoHueco, data3.value);
  } else if (data11.checked == true && data16.checked == true) {
    var presentar = semitransparent1f1h(AnchoHueco, AltoHueco, data3.value);
  } else if (data11.checked == true && data17.checked == true) {
    var presentar = semitransparent2h(AnchoHueco, AltoHueco, data3.value);
  } else if (data11.checked == true && data18.checked == true) {
    var presentar = semitransparent2f2h(AnchoHueco, AltoHueco, data3.value);
  } else if (data12.checked == true && data15.checked == true) {
    var presentar = transparent1h(AnchoHueco, AltoHueco, data3.value);
  } else if (data12.checked == true && data16.checked == true) {
    var presentar = transparent1f1h(AnchoHueco, AltoHueco, data3.value);
  } else if (data12.checked == true && data17.checked == true) {
    var presentar = transparent2h(AnchoHueco, AltoHueco, data3.value);
  } else if (data12.checked == true && data18.checked == true) {
    var presentar = transparent2f2h(AnchoHueco, AltoHueco, data3.value);
  } else if (data13.checked == true && data16.checked == true) {
    var presentar = framebreakout1f1h(AnchoHueco, AltoHueco, data3.value);
  } else if (data13.checked == true && data18.checked == true) {
    var presentar = framebreakout2f2h(AnchoHueco, AltoHueco, data3.value);
  } else if (data14.checked == true && data16.checked == true) {
    var presentar = slimbreakout1f1h(AnchoHueco, AltoHueco, data3.value);
  } else if (data14.checked == true && data18.checked == true) {
    var presentar = slimbreakout2f2h(AnchoHueco, AltoHueco, data3.value);
  } else {
    var presentar = ["", "", "", "", "", "Modelo no existente"];
  }

  if (data4.checked == true) {
    document.body.innerHTML = `
        <h3>Calculo de medidas puertas</h3>
        <h4>Tipo: ${presentar[5]}<br>
        Ancho hueco:${AnchoHuecoObra.value} mm | Alto Hueco:${AltoHuecoObra.value} mm <br></h4>
        <p>FW Aut: ${FW_autoportante} mm -- Holgura: ${HolguraAnchoAutoportante.value} mm<br>
        FH Aut: &nbsp${FH_autoportante} mm -- Holgura: ${HolguraAltoAutoportante.value} mm<br><br>
        FW: ${presentar[0]} mm -- Holgura: ${HolguraAnchoPuerta.value} mm<br>
        FH: &nbsp${presentar[1]} mm -- Holgura: ${HolguraAltoPuerta.value} mm<br><br>
        COW: ${presentar[2]} mm<br>
        COH: &nbsp${presentar[3]} mm<br><br>
        CL: ${presentar[4]} mm<br>
        X: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp${data3.value} mm<br></p>
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
        X: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp${data3.value} mm<br></p>
        <a href="#" onclick="window.location.reload(true);">Introducir nuevos datos...</a>`;
  }
};
