export const clampText = (
  lines: number = 2,
  overflowStyle: "ellipsis" = "ellipsis"
) => ({
  textOverflow: overflowStyle ?? "ellipsis",
  overflow: "hidden",
  wordBreak: "break-all",
  display: "-webkit-box",
  WebkitLineClamp: lines ?? 1,
  MozBoxOrient: "vertical",
});
