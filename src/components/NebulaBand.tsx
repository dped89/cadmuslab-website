interface NebulaBandProps {
  /** Tint color — defaults to the brand teal. */
  tint?: "teal" | "violet" | "amber";
  /** Position: "top" bleeds upward into the previous section,
   * "bottom" bleeds downward into the next. */
  position?: "top" | "bottom";
  /** Width of the ellipse as a percentage. Default 55%. */
  width?: number;
}

const TINTS: Record<NonNullable<NebulaBandProps["tint"]>, string> = {
  teal: "rgba(100, 255, 218, 0.18)",
  violet: "rgba(139, 92, 246, 0.18)",
  amber: "rgba(245, 158, 11, 0.16)",
};

export default function NebulaBand({
  tint = "teal",
  position = "top",
  width = 55,
}: NebulaBandProps) {
  const color = TINTS[tint];
  const yAnchor = position === "top" ? "0%" : "100%";
  const transform =
    position === "top" ? "translateY(-50%)" : "translateY(50%)";

  return (
    <div
      aria-hidden
      className={`absolute left-0 right-0 h-[28rem] pointer-events-none ${
        position === "top" ? "top-0" : "bottom-0"
      }`}
      style={{
        transform,
        background: `radial-gradient(ellipse ${width}% 100% at 50% ${yAnchor}, ${color} 0%, transparent 70%)`,
      }}
    />
  );
}
