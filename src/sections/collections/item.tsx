import { Collection } from "@/@types/collection";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Star from "@mui/icons-material/Star";

import ItemTags from "./item-tags";
import { useMemo } from "react";
import { formatPrice } from "@/utils/format-number";
import { clampText } from "@/utils/typography";

const CLAMP_TEXT_STYLE = clampText(2, "ellipsis");

const StyledImage = styled("img")({
  width: "100%",
  height: "auto",
  borderRadius: 4,
});

const StyledPrefaceImage = styled("img")({
  width: 14,
  height: 14,
  marginRight: 0.5,
});

const CollectionItem: React.FC<CollectionItemProps> = ({ item }) => {
  const hasDiscount = useMemo(() => {
    return !!item.publication.priceInfo.discountPrice;
  }, [item.publication.priceInfo.discountPrice]);

  const discountPercentage = useMemo(() => {
    return hasDiscount ? item.publication.priceInfo.discountRate : null;
  }, [hasDiscount]);

  const imageSrc = useMemo(
    () => item.publication.media[0]?.uri,
    [item.publication.media]
  );

  const price = useMemo(() => {
    return formatPrice(
      item.publication.priceInfo.discountPrice ??
        item.publication.priceInfo.price
    );
  }, [hasDiscount]);

  const rating = useMemo(() => {
    return !!item.publication.rating ? item.publication.rating : null;
  }, [item.publication.rating]);

  return (
    <Stack spacing={1} overflow="hidden" position="relative" pb={1}>
      <div style={{ position: "relative" }}>
        <StyledImage loading="lazy" src={imageSrc} />
        <ItemTags item={item} />
      </div>

      <Typography
        mt={2}
        color="grey.900"
        variant="body2"
        component="p"
        sx={CLAMP_TEXT_STYLE}
      >
        {item.publication.title}
      </Typography>

      <Box color="grey.800" display="flex" alignItems="center">
        <Typography
          textAlign="center"
          variant="h6"
          component="p"
          fontWeight={600}
        >
          {!!discountPercentage && (
            <Typography
              component="span"
              color="error.main"
              fontWeight="inherit"
              fontSize="inherit"
            >
              {discountPercentage}%
            </Typography>
          )}{" "}
          {price}
        </Typography>

        <Typography variant="caption" ml={0.5}>
          원
        </Typography>
      </Box>
      {!!item.publication.applyCoupon && (
        <Typography
          bgcolor="grey.50"
          color="grey.500"
          variant="caption"
          width="fit-content"
          fontWeight={600}
        >
          쿠폰
        </Typography>
      )}

      {rating && (
        <Typography
          color="grey.900"
          variant="caption"
          component="p"
          fontWeight={500}
          lineHeight="auto"
        >
          <Star style={{ height: 12, width: 12 }} />
          {rating}
        </Typography>
      )}

      {!!item.publication.preface && (
        <Stack
          direction="row"
          spacing={1}
          sx={({ palette }) => ({
            borderRadius: 1,
            borderColor: palette.divider,
            borderWidth: 1,
            borderStyle: "solid",
          })}
          width="fit-content"
          px={1}
          alignItems="center"
        >
          {!!item.publication.prefaceIconUrl && (
            <StyledPrefaceImage src={item.publication.prefaceIconUrl} alt="" />
          )}
          <Typography variant="caption" color="grey.600">
            {item.publication.preface}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

type CollectionItemProps = {
  item: Collection["items"][number];
};

export default CollectionItem;
