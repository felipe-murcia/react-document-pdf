import { Document, Page, Text, Image, StyleSheet, View, Font } from '@react-pdf/renderer';
import { ItemElement } from '../interfaces/ItemElement';

interface PDFGenerateProps {
  arrayElementPDF: ItemElement[];
}


export const PDFGenerate = ({ arrayElementPDF }:PDFGenerateProps) => {
  
  return(
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          ~ Generated with react-pdf ~
        </Text>

        {
          arrayElementPDF.map((item: ItemElement) => {
            return (
              <>
                {item.type === 'TITLE' && (
                  <Text style={[styles.title,{ textAlign: item.align }]}>
                    {item.value} {item.align}
                  </Text>
                )}
                {item.type === 'SUBTITLE' && (
                  <Text style={[styles.subtitle,{ textAlign: item.align }]}>{item.value}</Text>
                )}
                {item.type === 'PARRAPH' && (
                  <Text style={[ styles.parraph ,{ textAlign: item.align }]}>{item.value}</Text>
                )}
                {item.type === 'IMAGE' && (
                  <View style={[styles.parraph, { textAlign: item.align }]}>
                    <Image
                      style={styles.image}
                      src={item.value}
                    />
                  </View>
                )}
              </>
            );
          })
        }
        
         
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed />
      </Page>
    </Document>
  )
  
};
  
  Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
  });
  
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 18,
      margin: 12,
    },
    parraph: {
      margin: 12,
      fontSize: 14,
      textAlign: 'justify',
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
  });
  