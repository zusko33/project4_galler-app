import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <>
      <Image
        src={image}
        height={230}
        width={140}
        alt={`piece of art by ${artist}`}
      />
      <h2>{artist}</h2>
    </>
  );
}
