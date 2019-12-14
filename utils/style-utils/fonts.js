import { fontFace } from "polished";

const fontPath = "/static/fonts/";

export const fontNames = {
  sans: "Nunito",
  serif: "Merriweather"
};

export const fontSets = {
  serif: {
    // '300': `${fontNames.serif}-Light`,
    "400": `${fontNames.serif}-Regular`,
    // '700': `${fontNames.serif}-Bold`,
    "900": `${fontNames.serif}-Black`,
    "900": `${fontNames.serif}-Black`
  },
  sans: {
    // '200': `${fontNames.sans}-ExtraLight`,
    "300": `${fontNames.sans}-Light`,
    // '400': `${fontNames.sans}-Regular`,
    // '600': `${fontNames.sans}-SemiBold`,
    "700": `${fontNames.sans}-Bold`,
    // '800': `${fontNames.sans}-ExtraBold`,
    "900": `${fontNames.sans}-Black`
  }
};

const buildFontFace = (sansOrSerif, italic) => {
  return Object.keys(fontSets[`${sansOrSerif}`]).map(key => {
    const weight = key;
    const variant = italic ? "Italic" : "";
    const fontName = `${fontSets[sansOrSerif][key]}${variant}`;

    return {
      fontWeight: new Number(weight),
      fontFamily: fontName,
      fontFilePath: `${fontPath}${fontName}`,
      ...(italic ? { fontStyle: "italic" } : {}),
      fileFormats: ["ttf"]
    };
  });
};

const sansFontFaces = buildFontFace("sans", false);
const sansItalicFontFaces = buildFontFace("sans", true);
const serifFontFaces = buildFontFace("serif", false);
const serifItalicFontFaces = buildFontFace("serif", true);

export const getFonts = () => [
  sansFontFaces.map(face => fontFace(face)),
  sansItalicFontFaces.map(face => fontFace(face)),
  serifFontFaces.map(face => fontFace(face)),
  serifItalicFontFaces.map(face => fontFace(face))
];
