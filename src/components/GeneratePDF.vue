<template>
    <a @click="generatePDF" style="margin-left: 18px;" class="btn btn-sm btn-outline-primary">Generar PDF</a>
</template>

<script setup>

    import pdfMake from "pdfmake/build/pdfmake.js";
    import pdfFonts from "pdfmake/build/vfs_fonts.js";

//pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const generatePDF = () => {
              const dd = {
                    content: [
                      { text: "GUIA DE REMISION", style: "header", class: "alineado" },
                      {
                        style: "tableExample",
                        table: {
                          body: [
                            ["Nombre", "Apellido", "VideoJuego"],
                            ["Diego Alonso", "Bueno Pastor", "FIFA 19"],
                            ["Diego Stephano", "Bueno Hilario", "Roblox"]
                          ]
                        }
                      },
                      { text: "Datos Ingresados de la Quinua procesada", style: "header" },
                      {
                        style: "tableExample",
                        table: {
                          body: [
                            ["Lote", "Ubicación", "Carga"],
                            [
                              {
                                stack: [
                                  "Se Ubican en los Lotes:", 
                                  {
                                    ul: [
                                      "Lote 1", 
                                      "Lote 2", 
                                      "Lote 3"
                                    ]
                                  }
                                ]
                              },
                              "Ubicación en la zona este del campo A",
                              "1 Tonelada"
                            ]
                          ]
                        }
                      }
                    ],
                    styles: {
                      header: {
                        fontSize: 18,
                        bold: true,
                        margin: [0, 0, 0, 10]
                      },
                      tableExample: {
                        margin: [0, 5, 0, 15]
                      }
                    }
                  };
            pdfMake.createPdf(dd).open();
    };
</script>
<style>
.alineado{
  text-align: center;
}
</style>