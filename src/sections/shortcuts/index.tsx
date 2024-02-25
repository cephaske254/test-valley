"use client";

import { useSelector } from "react-redux";
import ShortcutCard from "./card";
import Stack from "@mui/material/Stack";
import { selectShortcuts } from "@/store/selectors/shortcuts";

const ShortcutsSection = () => {
  const { shortcuts } = useSelector(selectShortcuts);

  return (
    <Stack
      mt={6}
      mb={10}
      direction="row"
      spacing={1.5}
      flexWrap={{ xs: "wrap", lg: "nowrap" }}
      justifyContent={{
        xs: "space-evenly",
        sm: "flex-start",
        lg: "space-between",
      }}
    >
      {shortcuts.map((shortcut) => {
        return (
          <ShortcutCard key={shortcut.mainShortcutId} shortcut={shortcut} />
        );
      })}
    </Stack>
  );
};

export default ShortcutsSection;
