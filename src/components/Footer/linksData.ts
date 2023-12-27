import { FooterLink } from "@/types/footerLink";
import siteConfig from '../../../siteConfig';

export const disclaimerLink: FooterLink[] = [
  {
    id: 5,
    title: "Usage Disclaimer",
    href: "disclaimer",
    newTab: false,
  },
  {
    id: 5,
    title: "2257",
    href: "2257",
    newTab: false,
  },
];

export const supportsLink: FooterLink[] = [
  {
    id: 7,
    title: "Contact",
    href: "contact",
    newTab: false,
  },
  {
    id: 3,
    title: "Terms of Service",
    href: "terms",
    newTab: false,
  },
  {
    id: 4,
    title: "Privacy Policy",
    href: "privacy",
    newTab: false,
  },
  
];

export const toolsLink: FooterLink[] = [
  

];

if (siteConfig.downloaderList == "nsfw") {
  toolsLink.push({
    id: 10,
    title: "Nudify",
    href: "https://ainudify.com/",
    newTab: true,
  },
  {
    id: 11,
    title: "Watermark Remover",
    href: "https://watermarkremover.co/",
    newTab: true,
  },);
}

if (siteConfig.downloaderList == "sfw") {
  toolsLink.push({
    id: 6,
    title: "YouTube Converter",
    href: "https://youtubeconverter.ai/",
    newTab: true,
  },
  {
    id: 9,
    title: "Watermark Remover",
    href: "https://watermarkremover.co/",
    newTab: true,
  },);
}

if (siteConfig.baseSiteName == "OnlyFans") {
  toolsLink.push({
    id: 6,
    title: "OnlyFans Name Generator",
    href: "https://onlyfansnamegenerator.com/",
    newTab: true,
  },
  {
    id: 9,
    title: "OnlyFans Caption Ideas",
    href: "https://onlyfanscaptionideas.com/",
    newTab: true,
  },);
}

