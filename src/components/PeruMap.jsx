import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { CONTENT } from "../content";
import { PERU_VIEWBOX, PERU_DEPARTMENTS } from "./peruMapPaths";

export default function PeruMap({ activeRegion, onSelectRegion }) {
  const { map } = CONTENT.problem;
  const [hoveredRegion, setHoveredRegion] = useState(null);

  // Mapa de datos específicos por departamento
  const regionDataMap = React.useMemo(() => {
    const mapDict = {};
    for (const reg of map.regions) {
      mapDict[reg.id] = reg;
    }
    return mapDict;
  }, [map.regions]);

  const currentDisplay = hoveredRegion || activeRegion;

  // Determinar texto y estilo de cada departamento
  const getDeptInfo = (dept) => {
    const custom = regionDataMap[dept.id];
    let colorType = "other";
    let text = "Mente en Línea está disponible por WhatsApp en todo el Perú.";

    if (dept.id === "loreto") {
      colorType = "forest";
      text = custom ? custom.text : text;
    } else if (dept.id === "lima" || dept.id === "callao") {
      colorType = "mint";
      const limaData = regionDataMap["lima"];
      text = limaData ? limaData.text : text;
    } else if (
      ["piura", "lambayeque", "ucayali", "madrededios", "puno"].includes(dept.id)
    ) {
      colorType = "sage";
      text = custom ? custom.text : text;
    }

    return { colorType, text };
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Contenedor del Mapa SVG con aspect-ratio fijo, alto min 460px (360px móvil) */}
      <div className="relative w-full max-w-[500px] aspect-[600/840] min-h-[360px] sm:min-h-[460px] bg-[#FBF8F3] rounded-3xl border border-[rgba(31,77,58,0.12)] p-4 sm:p-6 flex flex-col items-center justify-center overflow-hidden shadow-xs">
        
        {/* Etiqueta interactiva SOLO al pasar el cursor o seleccionar */}
        {currentDisplay && (
          <div className="absolute top-4 left-4 right-4 z-20 pointer-events-none transition-all duration-200">
            <div className="bg-[#1F4D3A] text-[#FBF8F3] px-3.5 py-2 rounded-2xl shadow-md border border-[#5E7F63]/30 text-xs text-left max-w-sm mx-auto">
              <span className="font-bold text-[#DCE9DD] block text-[13px] mb-0.5">
                {currentDisplay.name}
              </span>
              <p className="text-[11px] leading-snug text-[#FBF8F3]/90">
                {currentDisplay.text}
              </p>
            </div>
          </div>
        )}

        <svg
          viewBox={PERU_VIEWBOX}
          className="w-full h-full filter drop-shadow-xs select-none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          aria-label="Mapa oficial del territorio peruano con datos de acceso a salud mental"
        >
          {PERU_DEPARTMENTS.map((dept) => {
            const { colorType, text } = getDeptInfo(dept);
            const isSelected = activeRegion?.id === dept.id;
            const isHovered = hoveredRegion?.id === dept.id;
            const isCallaoLimaActive =
              (dept.id === "callao" || dept.id === "lima") &&
              (activeRegion?.id === "lima" || hoveredRegion?.id === "lima");
            const isActive = isSelected || isHovered || isCallaoLimaActive;

            // Paleta exacta:
            // Loreto: --forest (#1F4D3A)
            // Lima y Callao: --mint (#DCE9DD)
            // Piura, Lambayeque, Ucayali, Madre de Dios, Puno: --sage (#5E7F63)
            // Resto: #EFE9DE
            let fill = "#EFE9DE";
            let stroke = "#D5CDBC";

            if (colorType === "forest") {
              fill = isActive ? "#153628" : "#1F4D3A";
              stroke = "#0B4A24";
            } else if (colorType === "mint") {
              fill = isActive ? "#C8DDC9" : "#DCE9DD";
              stroke = "#5E7F63";
            } else if (colorType === "sage") {
              fill = isActive ? "#48664D" : "#5E7F63";
              stroke = "#1F4D3A";
            } else {
              fill = isActive ? "#E2D9CB" : "#EFE9DE";
              stroke = "#C8BDAA";
            }

            const regionPayload = {
              id: dept.id === "callao" ? "lima" : dept.id,
              name: dept.name,
              text,
              color: colorType,
            };

            return (
              <path
                key={dept.id}
                d={dept.d}
                fill={fill}
                stroke={stroke}
                strokeWidth={isActive ? 2 : 1}
                strokeLinejoin="round"
                strokeLinecap="round"
                tabIndex={0}
                role="button"
                aria-label={`${dept.name}: ${text}`}
                className="cursor-pointer transition-colors duration-150 outline-none focus-visible:stroke-[#1F4D3A] focus-visible:stroke-2"
                onClick={() => onSelectRegion(regionPayload)}
                onMouseEnter={() => setHoveredRegion(regionPayload)}
                onMouseLeave={() => setHoveredRegion(null)}
                onFocus={() => setHoveredRegion(regionPayload)}
                onBlur={() => setHoveredRegion(null)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectRegion(regionPayload);
                  }
                }}
              />
            );
          })}
        </svg>

      </div>

      {/* Leyenda debajo del mapa en 3 ítems sin cortes */}
      <div className="w-full mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#5B6B62] font-medium">
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <span className="w-3.5 h-3.5 rounded-full bg-[#1F4D3A] shrink-0" />
          <span>Loreto (brecha crítica)</span>
        </div>
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <span className="w-3.5 h-3.5 rounded-full bg-[#DCE9DD] border border-[#5E7F63]/40 shrink-0" />
          <span>Lima y Callao</span>
        </div>
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <span className="w-3.5 h-3.5 rounded-full bg-[#5E7F63] shrink-0" />
          <span>Regiones destacadas</span>
        </div>
      </div>

      {/* Nota al pie (14px) */}
      <p className="mt-3 text-xs sm:text-sm text-[#5B6B62] text-center max-w-md italic">
        {map.footnote}
      </p>
    </div>
  );
}
