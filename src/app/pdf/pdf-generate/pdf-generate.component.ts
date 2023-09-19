import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

import {
  TDocumentDefinitions,
  Content,
  StyleDictionary,
} from 'pdfmake/interfaces';
import { FONT_NotoSerifVithkuqi } from 'src/app/constants/fonts-base';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdf-generate',
  templateUrl: './pdf-generate.component.html',
  styleUrls: ['./pdf-generate.component.scss'],
})
export class PdfGenerateComponent implements OnInit {
  constructor(
    private router: Router,
    private aciveRouter: ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {}

  generatePdf() {
    this.createPDF();
  }

  createPDF() {
    this.generate();
  }

  async generate() {
    const image = await this.getBase64ImageFromURL(
      '../../../assets/images/logo-ventas.png'
    ); 

    // Se puede utilizar mediante esta forma
    // const fonts = {
    //   myFont: {
    //     normal: location.origin + '/assets/fonts/Tangerine-Regular.ttf',
    //     bold: location.origin + '/assets/fonts/Tangerine-Bold.ttf',
    //     italics: location.origin + '/assets/fonts/Tangerine-Regular.ttf',
    //     bolditalics: location.origin + '/assets/fonts/Tangerine-Bold.ttf'
    //   }
    // }

    const fonts = {
      myFont: {
        normal: FONT_NotoSerifVithkuqi['NotoSerifVithkuqi-Regular.ttf'],
        bold: FONT_NotoSerifVithkuqi['NotoSerifVithkuqi-Bold.ttf'],
        italics: FONT_NotoSerifVithkuqi['NotoSerifVithkuqi-Regular.ttf'],
        bolditalics: FONT_NotoSerifVithkuqi['NotoSerifVithkuqi-Bold.ttf']
      }
    }

    const data: any[] = [
      {
        name: 'Nombre',
        price: 234,
      },
    ];

    let contentPdf: any[] = [];

    data.forEach((dat: any) => {
      const content = this.getContent(dat);
      contentPdf.push(content);
    });

    var docDefinition: TDocumentDefinitions = {
      pageMargins: [40, 100, 40, 50],
      // pageOrientation: 'landscape',
      header: this.getHeader(image),
      content: contentPdf,
      styles: this.getStyles(),
      watermark: 'Mi marca de agua',
      footer: (currentPage, pageCount) =>  { return {
        text: currentPage.toString() + ' de ' + pageCount,
        alignment: 'right',
        margin: [0, 30, 10, 0],
        color: 'gray',
        bold: true
      }; },
      defaultStyle: {
        font: 'myFont'
      }
    };

    pdfMake.createPdf(docDefinition, undefined, fonts).open();

    // var pdfDoc: = printer.createPdfKitDocument(docDefinition);
    // pdfDoc.pipe(fs.createWriteStream('pdfs/tables.pdf'));
    // pdfDoc.end();
  }

  getContent(dat: any): Content {
    const colums = [
      { id: '', text: 'Nombre' },
      { id: '', text: 'Precio' },
      { id: '', text: 'Marca' },
      { id: '', text: 'Modelo' },
      { id: '', text: 'Peso' },
      { id: '', text: 'Sub total' },
      { id: '', text: 'Total' },
    ];

    let headerPdf: any[] = [];
    colums.forEach((colum) => {
      headerPdf.push({
        text: colum.text,
        borderColor: ['white', 'white', 'white', 'white'],
      });
    });

    let bodyRows: any[] = [];
    
    for (let index = 0; index < 30; index++) {
      const rows1 = [
        {
          text: 'Laptop HP 234B',
          borderColor: ['white', 'white', 'white', 'white'],
        },
        { text: '$14000.00', borderColor: ['white', 'white', 'white', 'white'] },
        { text: 'HP', borderColor: ['white', 'white', 'white', 'white'] },
        { text: '234B', borderColor: ['white', 'white', 'white', 'white'] },
        { text: '2.5 kg', borderColor: ['white', 'white', 'white', 'white'] },
        { text: '$14000.00', borderColor: ['white', 'white', 'white', 'white'] },
        { text: '$15640.00', borderColor: ['white', 'white', 'white', 'white'] },
      ];  

      bodyRows.push(rows1); 
    }


    return [
      {
        layout: 'noBorders',
        style: 'tableContent',
        table: {
          widths: [180, '*'],
          body: [
            [
              {
                layout: 'noBorders',
                style: 'tableContentSub1',
                table: {
                  body: [
                    [
                      {
                        text: 'Lista de artículos',
                      },
                    ],
                    [
                      {
                        text: '......',
                      },
                    ],
                  ],
                },
              },
              {
                layout: 'noBorders',
                style: 'tableContentSub2',
                table: {
                  body: [
                    [
                      {
                        text: 'Más vendidos',
                      },
                    ],
                    [
                      {
                        text: '',
                      },
                    ],
                  ],
                },
              },
            ],
          ],
        },
      },
      {
        // layout: 'noBorders',
        style: 'tableHederMain',
        table: {
          widths: Array(11).fill(60.29),
          body: [headerPdf],
        },
      },
      {
        layout: 'noBorders',
        style: 'tableContentBody',
        table: {
          widths: Array(11).fill(60.29),
          body: bodyRows,
        },
      },
    ];
  }

  getHeader(image: any): Content {
    return {
      style: 'header',
      columns: [
        {
          image,
          width: 200,
          height: 100,
        },
        {
          style: 'tableHeader1',
          layout: 'noBorders',
          table: {
            headerRows: 1,
            widths: ['*', '*'],
            body: [
              [
                {
                  text: 'Reporte de ventas',
                  // color: 'red',
                  bold: true,
                  colSpan: 2,
                  alignment: 'center',
                },
                {},
              ],
              [
                {
                  text: 'Cliente',
                  alignment: 'right',
                  bold: true,
                },
                {
                  text: 'Miselanea Nueva Esmeralda',
                },
              ],
              [
                {
                  text: 'Folio',
                  alignment: 'right',
                  bold: true,
                },
                {
                  text: '0000014',
                },
              ],
              [
                {
                  text: 'Fecha de elaboración',
                  alignment: 'right',
                  bold: true,
                },
                {
                  text: new Date().toLocaleDateString(),
                },
              ],
              [
                {
                  text: 'Elaborado por',
                  alignment: 'right',
                  bold: true,
                },
                {
                  text: 'Rigoberto González Marín',
                },
              ],
            ],
          },
        },
      ],
    };
  }

  getStyles(): StyleDictionary {
    return {
      header: {
        alignment: 'justify',
        margin: [0, 0, 0, 0],
        // color: 'white',
      },
      tableContent: {
        margin: [0, 10, 0, 0],
        fontSize: 12,
      },
      tableContentSub1: {
        bold: true,
      },
      tableContentHeader: {
        color: 'white',
        fontSize: 12,
        alignment: 'center',
        fillColor: '',
      },
      tableContentBody: {
        color: 'gray',
        fontSize: 12,
        alignment: 'center',
      },
      tableHederMain: {
        fillColor: 'gray',
        alignment: 'center',
        fontSize: 14
      }
    };
  }

  getBase64ImageFromURL(url: string) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      // img.setAttribute('crossOrigin', 'anonymous');

      img.onload = () => {
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx: any = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL('image/png');

        resolve(dataURL);
      };

      img.onerror = (error) => {
        reject(error);
      };

      img.src = url;
    });
  }
}
