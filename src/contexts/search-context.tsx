"use client";

import { createContext, useCallback, useState } from "react";

export const SearchContext = createContext<SearchContextType>({
  search: "",
  setSearch: (search: string) => {},
  onChange: () => {},
  onClear: () => {},
});

export const SearchContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [search, setSearch] = useState("");

  const onChange = useCallback<SearchContextType["onChange"]>(
    (e) => {
      setSearch(e.target.value);
    },
    [setSearch]
  );

  const onClear = useCallback<SearchContextType["onClear"]>(() => {
    setSearch("");
  }, [setSearch]);

  return (
    <SearchContext.Provider value={{ search, setSearch, onChange, onClear }}>
      {children}
    </SearchContext.Provider>
  );
};

export type SearchContextType = {
  search: string;
  setSearch: (search: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
};
