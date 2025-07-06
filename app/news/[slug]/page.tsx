import Link from "next/link";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
const GalleryCarousel = dynamic(() => import("./GalleryCarousel"), { ssr: false });
const MarkdownViewer = dynamic(() => import("./MarkdownViewer"), { ssr: false });
const CoverImage = dynamic(() => import("./CoverImage"), { ssr: false });
import ImageModal from "@/components/ImageModal";
import NewsEventClient from "./NewsEventClient";

const newsData = [
  {
    slug: "finales-juniors-seniors-2-juillet-2025",
    title:
      "Un Honneur Mémorable : Parrain des Finales de Football Junior & Senior", // Titre amélioré
    subtitle: "Immersion au cœur de la passion du football régional le 02 juillet 2025.", // Nouveau sous-titre
    content:
      "C'est avec une immense joie et une grande fierté que j'ai eu l'honneur d'être le parrain officiel des **finales juniors et seniors de la ligue régionale de football** ce mercredi 02 juillet 2025. Cette journée a été marquée par des moments de pure émotion, de compétition acharnée et de célébration du talent local. Découvrez en images la ferveur de cet événement inoubliable.", // Contenu amélioré
    imagesFolder: "/images/2july",
    cover: "/images/2july/389e83ca-5941-4102-9be8-476d5c26c12b.jpg",
  },
  {
    slug: "finale-senior-saint-louis-3-juillet-2025",
    title: "Finale senior de la Ligue Régionale de Football de Saint-Louis",
    subtitle: "Parrainage à Ross Béthio – 03 juillet 2025",
    content: `𝐂𝐞 𝐣𝐞𝐮𝐝𝐢 𝟎𝟑 𝐣𝐮𝐢𝐥𝐥𝐞𝐭 𝟐𝟎𝟐𝟓,\nj’ai eu le privilège d’être le parrain de la grande finale senior de la Ligue Régionale de Football de 𝐒𝐚𝐢𝐧𝐭-𝐋𝐨𝐮𝐢𝐬, organisée à 𝐑𝐨𝐬𝐬 𝐁𝐞́𝐭𝐡𝐢𝐨\n\nAu-delà du match, c’est toute la vitalité et la ferveur du football local que j’ai pu ressentir à travers cette belle rencontre.\n\nCet honneur m’a permis de renouveler mon engagement pour un football de proximité fort, structuré et ambitieux, convaincu que les talents de demain naissent et grandissent d’abord dans nos ligues locales.\n\nJe tiens à remercier chaleureusement :\n• 𝐌𝐨𝐧𝐬𝐢𝐞𝐮𝐫 𝐥𝐞 𝐏𝐫𝐞𝐬𝐢𝐝𝐞𝐧𝐭 𝐝𝐞 𝐥𝐚 𝐋𝐢𝐠𝐮𝐞 𝐝𝐞 𝐒𝐚𝐢𝐧𝐭-𝐋𝐨𝐮𝐢𝐬, 𝐃𝐫 𝐀𝐡𝐦𝐚𝐝𝐨𝐮 𝐃𝐈𝐀, pour sa confiance et son travail remarquable.\n\n• 𝐌𝐨𝐧𝐬𝐢𝐞𝐮𝐫 𝐥𝐞 𝐌𝐚𝐢𝐫𝐞 𝐅𝐚𝐥𝐥𝐲 𝐒𝐄𝐂𝐊, pour l’accueil à Ross Béthio et son appui constant au sport régional.\n\n• ⁠𝐌𝐨𝐧𝐬𝐢𝐞𝐮𝐫 𝐀𝐦𝐚𝐫𝐚 𝐓𝐑𝐀𝐎𝐑𝐄, ancien sélectionneur des Lions et figure emblématique du football sénégalais, dont la présence a donné un éclat particulier à cette finale.\n\nBravo à tous les acteurs du terrain et de l’ombre qui œuvrent sans relâche pour faire progresser notre football national.\n\n#senegal #abdoulayefall2025 #fsf #saint-louis #final #avecVousPourLeFootball`,
    cover: "/images/3july/01dfbe6d-ce65-4081-bfd9-4985c0cb3cc8.JPG",
    imagesFolder: "/images/3july",
  },
];

export async function generateStaticParams() {
  return newsData.map((item) => ({ slug: item.slug }));
}

export default function NewsEventPage({ params }: { params: { slug: string } }) {
  const event = newsData.find((n) => n.slug === params.slug);
  if (!event) return notFound();

  // Lecture des images du dossier (côté serveur)
  const imagesDir = path.join(process.cwd(), "public", event.imagesFolder);
  let images: string[] = [];
  try {
    images = fs
      .readdirSync(imagesDir)
      .filter((file) => [".jpg", ".jpeg", ".png"].some(ext => file.toLowerCase().endsWith(ext)))
      .map((file) => `${event.imagesFolder}/${file}`);
  } catch {
    images = [];
  }

  return <NewsEventClient event={event} images={images} />;
}