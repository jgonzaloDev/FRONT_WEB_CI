<script setup>
import { ref } from "vue";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

// Configurar las fuentes de pdfMake
//pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generatePDF = () => {
    const dd = {
          content: [
            { text: "Probando creando un PDF", style: "header" },
            {
              style: "tableExample",
              table: {
                body: [
                  ["Column 1", "Column 2", "Column 3"],
                  ["One value goes here", "Another one here", "OK?"],
                  ["Another row", "With some data", "Inside"]
                ]
              }
            },
            { text: "A simple table with nested elements", style: "header" },
            {
              style: "tableExample",
              table: {
                body: [
                  ["Column 1", "Column 2", "Column 3"],
                  [
                    {
                      stack: [
                        "Let's try an unordered list", 
                        {
                          ul: [
                            "item 1", 
                            "item 2", 
                            "item 3"
                          ]
                        }
                      ]
                    },
                    "Column 2 Text",
                    "Column 3 Text"
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

<template>
   
  <div class="pdf-container">
    <button @click="generatePDF" class="pdf-button">Generate PDF</button>
  </div>
</template>

<style scoped>
.pdf-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pdf-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}

.pdf-button:hover {
  background-color: #45a049;
}
</style>
