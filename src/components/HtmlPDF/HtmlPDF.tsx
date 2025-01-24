import React from "react";
import { TypeContent } from "../../enums/TypeContent";
import { ItemElement } from "../../interfaces/ItemElement";

interface htmlPDFProps {
  arrayElementPDF: ItemElement[];
}

export const HtmlPDF = ({ arrayElementPDF = [] }:htmlPDFProps) => {
  return (
    <div
      style={{
        flex: 5,
        height: 800,
        backgroundColor: "#fbfbfb",
        overflow: "scroll",
        padding: 50,
      }}
    >
      {/* pdf */}

      {arrayElementPDF.map((item: ItemElement) => {
        return (
          <>
            {item.type === TypeContent.TITLE && (
              <h1 style={{ textAlign: item.align }}>
                {item.value} {item.align}
              </h1>
            )}
            {item.type === TypeContent.SUBTITLE && (
              <h2 style={{ textAlign: item.align }}>{item.value}</h2>
            )}
            {item.type === TypeContent.PARRAPH && (
              <p style={{ textAlign: item.align }}>{item.value}</p>
            )}
            {item.type === TypeContent.IMAGE && (
              <div style={{ textAlign: item.align }}>
                <img src={item.value} alt="imagen" />
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};
