import React from 'react';
import { pdf, Page, Text, View, Document, Image } from '@react-pdf/renderer';
import { useSession } from 'next-auth/react';
import { ExportButton, Styles } from './UserDataToPdfStyles';

export default function UserDataToPdf({ cardData }) {
  const { data: session } = useSession();
  const userCardData = cardData.filter((cardData) => {
    return cardData.userMail === session.user.email;
  });
  async function exportToPDF() {
    const itemsPerPage = 1000;
    const itemsPerRow = 10;

    const docChunks = [];
    for (let i = 0; i < userCardData.length; i += itemsPerPage) {
      const chunk = userCardData.slice(i, i + itemsPerPage);

      const chunkRows = [];
      for (let j = 0; j < chunk.length; j += itemsPerRow) {
        chunkRows.push(chunk.slice(j, j + itemsPerRow));
      }
      docChunks.push(chunkRows);
    }

    const blobPromises = docChunks.map(async (chunkRows, chunkIndex) => {
      const doc = (
        <Document key={chunkIndex}>
          {chunkRows.map((row, rowIndex) => (
            <Page key={rowIndex} size="A4" style={Styles.page}>
              <View style={Styles.header}>
                <Text style={Styles.title}>
                  Gespeicherte Daten von {session.user.name}
                </Text>
                <Text style={Styles.subtitle}>
                  Erstellt am: {new Date().toLocaleString()}
                </Text>
              </View>
              <View style={Styles.cardContainer}>
                {row.map((item, itemIndex) => (
                  <View key={itemIndex} style={Styles.card}>
                    <Text>Date: {item.date}</Text>
                    <Text style={{ color: '#c92a2a' }}>
                      Blutzuckerwert: {item.bloodsugar} mg/dl
                    </Text>
                    <Text style={{ color: '#e67700' }}>
                      Kohlenhydrate: {item.carbohydrates} g
                    </Text>
                    <Text>Verwendetes Insulin: {item.insulin}</Text>
                    <Text style={{ color: '#2b8a3e' }}>
                      Insulin Faktor: {item.daytimeFactor}
                    </Text>
                    <Text style={{ color: '#2b8a3e' }}>
                      Korrektur Faktor: {item.correctionFactor}
                    </Text>
                    <Text style={{ color: '#364fc7' }}>
                      Gespritzte Insulin Menge: {item.calculateUnit}
                    </Text>
                  </View>
                ))}
              </View>
              <View style={Styles.footer}>
                {' '}
                <Text>InsulinApp.vercel.app</Text>
              </View>
              <Image style={Styles.image} src="logo.png" alt="" />
              <Text
                style={Styles.pageNumber}
                render={({ pageNumber, totalPages }) =>
                  `${pageNumber} / ${totalPages}`
                }
                fixed
              />
            </Page>
          ))}
        </Document>
      );

      const blob = await pdf(doc).toBlob();
      return blob;
    });

    const blobs = await Promise.all(blobPromises);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const pdfDoc = new Blob(blobs, { type: 'application/pdf' });
    const url = URL.createObjectURL(pdfDoc);
    const link = document.createElement('a');
    if (isIOS) {
      window.open(url);
    } else {
      window.open(url);
      link.href = url;
      link.download = `gespeicherte_daten_${session.user.name}.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    }
  }
  return <ExportButton onClick={exportToPDF}>Export als PDF</ExportButton>;
}
