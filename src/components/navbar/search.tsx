"use client";

import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

import Search from "@mui/icons-material/Search";
import CloseOutlined from "@mui/icons-material/CloseOutlined";
import { SearchContext } from "@/contexts/search-context";

const SearchClearIconWrapper = styled("span")(({ theme }) => ({
  backgroundColor: theme.palette.grey[300],
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
}));

const StyledSearchInput = styled(TextField)(({ theme }) => ({
  width: 330,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavbarSearch = () => {
  return (
    <Stack flexGrow={1} direction="row" justifyContent="center">
      <SearchContext.Consumer>
        {(props) => (
          <StyledSearchInput
            value={props.search}
            onChange={props.onChange}
            placeholder="살까말까 고민된다면 검색해보세요!"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
              endAdornment: !!props.search && (
                <InputAdornment position="end">
                  <IconButton
                    disableRipple
                    disableFocusRipple
                    sx={{ color: "grey.700" }}
                    onClick={props.onClear as any}
                  >
                    <SearchClearIconWrapper>
                      <CloseOutlined fontSize="small" />
                    </SearchClearIconWrapper>
                  </IconButton>
                </InputAdornment>
              ),
            }}
            size="small"
          />
        )}
      </SearchContext.Consumer>
    </Stack>
  );
};

export default NavbarSearch;
