import React from 'react';
import { pdf, Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { useSession } from 'next-auth/react';
import styled from 'styled-components';

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
            <Page key={rowIndex} size="A4" style={styles.page} >
              <View style={styles.header}>
               
                <Text style={styles.title}>Gespeicherte Daten von {session.user.name}</Text>
                <Text style={styles.subtitle}>Erstellt am: {new Date().toLocaleString()}</Text>
              </View>
              <View style={styles.cardContainer}>
                {row.map((item, itemIndex) => (
                  <View key={itemIndex} style={styles.card}>
                    <Text>Date: {item.date}</Text>
                    <Text style={{color: '#c92a2a'}}>Blutzuckerwert: {item.bloodsugar} mg/dl</Text>
                    <Text style={{color: '#e67700'}} >Kohlenhydrate: {item.carbohydrates} g</Text>
                    <Text>Verwendetes Insulin: {item.insulin}</Text>
                    <Text style={{color: '#2b8a3e'}}>Insulin Faktor: {item.daytimeFactor}</Text>
                    <Text style={{color: '#2b8a3e'}}>Korrektur Faktor: {item.correctionFactor}</Text>
                    <Text style={{color: '#364fc7'}}>Gespritzte Insulin Menge: {item.calculateUnit}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.footer}> <Text>InsulinApp.vercel.app</Text></View>
               <Image style={styles.image} src="logo.png" alt="" />
              <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
            </Page>
          ))}
        </Document>
      );
  
      const blob = await pdf(doc).toBlob();
      return blob;
    });
const blobs = await Promise.all(blobPromises);

  const pdfDoc = new Blob(blobs, { type: 'application/pdf' });
  const url = URL.createObjectURL(pdfDoc);

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  if (isIOS) {
    // On iOS Safari, trigger download using window.location.href
    window.location.href = url;
  } else {
    // For other devices, prompt the user with a choice
    const userChoice = window.confirm('Do you want to open the PDF in a new tab?');

    if (userChoice) {
      window.open(url, '_blank');
    } else {
      // Trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.download = `gespeicherte_daten_${session.user.name}.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    }
  }
    //const blobs = await Promise.all(blobPromises);
  
    //const pdfDoc = new Blob(blobs, { type: 'application/pdf' });
    //const url = URL.createObjectURL(pdfDoc);
    //const link = document.createElement('a');
    //link.href = url;
    //link.download = `gespeicherte_daten_${session.user.name}.pdf`;
    //link.click();
    //URL.revokeObjectURL(url);
  }
  return <ExportButton onClick={exportToPDF}>Export als PDF</ExportButton>
}

const ExportButton = styled.button`
  background-color: #fe4b13;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  height: 1.8rem;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  width: auto;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #d63200;
  }
`;

  const styles = StyleSheet.create({
    page: {
      fontFamily: 'Helvetica',
      paddingTop: 30,
      paddingBottom: 30,
      paddingHorizontal: 40,
      columnGap:5,
    },
    header: {
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 20,
      color:'rebeccapurple',
    },
    footer: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: '#c92a2a',
    },
    image: {
      bottom: 25,
      left: 200,
      position: 'absolute',
      width: 20,
      height: 20,
      borderRadius:'50%',
    },
    title: {
      fontSize: 18,
      marginTop: 10,
    },
    subtitle: {
      fontSize: 10,
      marginTop: 5,
    },
    cardContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: 60,
    },
    card: {
      width: '40%',
      height: '100', 
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#000',
      padding: 10,
      fontSize: 10,
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 10,
      bottom: 30,
      left: 500,
      textAlign: 'center',
      color: 'grey',
    },
  });
