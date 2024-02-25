import { Shortcut } from "@/@types/shortcut";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IMAGE_SIZE } from "./constants";

const ShortcutCard: React.FC<Props> = ({ shortcut }) => {
  return (
    <Box
      p={1}
      sx={{
        userSelect: "none",
      }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignContent="center"
    >
      <img src={shortcut.imageUrl} height={IMAGE_SIZE} width={IMAGE_SIZE} />
      <Typography mt={2} color="grey.600" textAlign="center" variant="caption">
        {shortcut.title}
      </Typography>
    </Box>
  );
};

type Props = {
  shortcut: Shortcut;
};
export default ShortcutCard;
