import * as d3 from "d3-geo";

const geojson = JSON.parse(await Deno.readTextFile("peru_departamental_simple.geojson"));
const W = 600;
const H = 840;
// fitExtent con 20px de padding para que nada toque el borde del SVG
const projection = d3.geoMercator().fitExtent([[20, 20], [W - 20, H - 20]], geojson);
const pathGen = d3.geoPath().projection(projection);

const idMap: Record<string, string> = {
  AMAZONAS: "amazonas",
  ANCASH: "ancash",
  APURIMAC: "apurimac",
  AREQUIPA: "arequipa",
  AYACUCHO: "ayacucho",
  CAJAMARCA: "cajamarca",
  CALLAO: "callao",
  CUSCO: "cusco",
  HUANCAVELICA: "huancavelica",
  HUANUCO: "huanuco",
  ICA: "ica",
  JUNIN: "junin",
  "LA LIBERTAD": "lalibertad",
  LAMBAYEQUE: "lambayeque",
  LIMA: "lima",
  LORETO: "loreto",
  "MADRE DE DIOS": "madrededios",
  MOQUEGUA: "moquegua",
  PASCO: "pasco",
  PIURA: "piura",
  PUNO: "puno",
  "SAN MARTIN": "sanmartin",
  TACNA: "tacna",
  TUMBES: "tumbes",
  UCAYALI: "ucayali",
};

const properNames: Record<string, string> = {
  AMAZONAS: "Amazonas",
  ANCASH: "Áncash",
  APURIMAC: "Apurímac",
  AREQUIPA: "Arequipa",
  AYACUCHO: "Ayacucho",
  CAJAMARCA: "Cajamarca",
  CALLAO: "Callao",
  CUSCO: "Cusco",
  HUANCAVELICA: "Huancavelica",
  HUANUCO: "Huánuco",
  ICA: "Ica",
  JUNIN: "Junín",
  "LA LIBERTAD": "La Libertad",
  LAMBAYEQUE: "Lambayeque",
  LIMA: "Lima",
  LORETO: "Loreto",
  "MADRE DE DIOS": "Madre de Dios",
  MOQUEGUA: "Moquegua",
  PASCO: "Pasco",
  PIURA: "Piura",
  PUNO: "Puno",
  "SAN MARTIN": "San Martín",
  TACNA: "Tacna",
  TUMBES: "Tumbes",
  UCAYALI: "Ucayali",
};

const depts = geojson.features.map((f: any) => {
  const rawName: string = f.properties.NOMBDEP;
  const id = idMap[rawName] || rawName.toLowerCase();
  const name = properNames[rawName] || rawName;
  const d = pathGen(f);
  const [cx, cy] = pathGen.centroid(f);
  return { id, name, d, cx: Math.round(cx), cy: Math.round(cy) };
});

const fileContent = `// Generado automáticamente con d3-geo y datos geográficos oficiales del INEI/IGN
export const PERU_VIEWBOX = "0 0 ${W} ${H}";
export const PERU_DEPARTMENTS = ${JSON.stringify(depts, null, 2)};
`;

await Deno.writeTextFile("src/components/peruMapPaths.js", fileContent);
console.log("src/components/peruMapPaths.js generado con éxito. Total departamentos:", depts.length);
