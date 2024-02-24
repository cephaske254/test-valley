import { CollectionItem } from "@/@types/collection";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ItemTags: React.FC<ItemTagsProps> = ({ item }) => {
  const tags = item.publication.tagsOnImage ?? [];
  if (tags.length === 0) return null;

  return (
    <Stack
      direction="row"
      spacing={1}
      position="absolute"
      bottom={10}
      left={5}
      right={5}
    >
      {tags.map((tag, index) => (
        <Box
          bgcolor="success.main"
          borderRadius={0.8}
          component="span"
          key={index}
          px={1}
        >
          <img src="/return-new.svg" alt="" />
          <Typography variant="caption" color="grey.50">
            {tag}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

type ItemTagsProps = {
  item: CollectionItem;
};

export default ItemTags;
