interface NebulaBandProps {
  /** Tint color — defaults to the Halnos teal. */
  tint?: "teal" | "violet" | "amber" | "cyan";
  /** Position: "top" glows downward into the section,
   * "bottom" glows upward. */
  position?: "top" | "bottom";
  /** Width of the ellipse as a percentage. Default 70%. */
  width?: number;
  /** Vertical extent of the band in rem. Default 32. */
  height?: number;
}

const TINTS: Record<NonNullable<NebulaBandProps["tint"]>, string> = {
  teal: "rgba(100, 255, 218, 0.32)",
  violet: "rgba(139, 92, 246, 0.30)",
  amber: "rgba(245, 158, 11, 0.28)",
  cyan: "rgba(0, 212, 255, 0.30)",
};

export default function NebulaBand({
  tint = "teal",
  position = "top",
  width = 70,
  height = 32,
}: NebulaBandProps) {
  const color = TINTS[tint];
  // Anchor the gradient at the edge the band sits against so the full
  // saturation lands right at the section boundary and fades inward.
  const anchorY = position === "top" ? "0%" : "100%";

  return (
    <div
      aria-hidden
      className={`absolute left-0 right-0 pointer-events-none ${
        position === "top" ? "top-0" : "bottom-0"
      }`}
      style={{
        height: `${height}rem`,
        background: `radial-gradient(ellipse ${width}% 100% at 50% ${anchorY}, ${color} 0%, transparent 72%)`,
      }}
    />
  );
}
