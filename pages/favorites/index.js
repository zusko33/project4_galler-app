import { useState } from "react";

export default function handleTogglePiecesInfo({ slug }) {
  setArtPiecesInfo((artPiecesInfo) => {
    const info = artPiecesInfo.find((info) => info.slug === slug);

    if (info) {
      return artPiecesInfo.map((info) =>
        info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
      );
    }
    return [...artPiecesInfo, { slug, isFavorite: true }];
  });
}
