<template>
  <div id="app">
    <div class="columns">
      <div class="column is-one-third is-offset-4">
        <h1 class="title has-text-info has-text-centered is-light">
          ระบบพิมพ์ใบประกาศนียบัตรเข้าร่วมงาน LA Forum 2021
        </h1>
        <h1 class="subtitle has-text-centered has-text-danger">
          สภาเทคนิคการแพทย์
        </h1>
        <b-field label="หมายเลข ท.น.">
          <b-input v-model="license"></b-input>
        </b-field>
        <b-field>
          <b-button type="is-primary" @click="generate">
            Create
          </b-button>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

pdfMake.fonts = {
  Sarabun: {
    normal: 'Sarabun-Regular.ttf',
    bold: 'Sarabun-Bold.ttf',
    italics: 'Sarabun-Italic.ttf',
    bolditalics: 'Sarabun-BoldItalic.ttf'
  }
}

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      license: null,
      docDefinition: {
        content: [
          {
            text: 'ประกาศนียบัตรเข้าร่วมงานประชุมวิชาการ', fontSize: 21
          }
        ],
        defaultStyle: {
          font: 'Sarabun'
        }
      }
    }
  },
  methods: {
    generate () {
      pdfMake.createPdf(this.docDefinition).open()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
