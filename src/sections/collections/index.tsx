"use client";

import { selectCollections } from "@/store/selectors/collections";
import { useSelector } from "react-redux";
import Stack from "@mui/material/Stack";

import CollectionStack from "./collection";

const CollectionsSection = () => {
  const { collections } = useSelector(selectCollections);

  return (
    <Stack spacing={10}>
      {collections.map((collection, index) => {
        return (
          <CollectionStack
            key={collection.id}
            collection={collection}
            index={index}
          />
        );
      })}
    </Stack>
  );
};

export default CollectionsSection;
