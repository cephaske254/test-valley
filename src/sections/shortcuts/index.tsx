"use client";

import { useSelector } from "react-redux";
import ShortcutCard from "./card";
import Stack from "@mui/material/Stack";
import { selectShortcuts } from "@/store/selectors/shortcuts";

const ShortcutsSection = () => {
  const { shortcuts } = useSelector(selectShortcuts);

  return (
    <Stack direction="row" spacing={3} flexWrap='nowrap' overflow='scroll'>
      {shortcuts.map((shortcut) => {
        return (
          <ShortcutCard key={shortcut.mainShortcutId} shortcut={shortcut} />
        );
      })}
    </Stack>
  );
};

export default ShortcutsSection;
