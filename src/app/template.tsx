"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store, useDispatch } from "@/store";
import { SearchContextProvider } from "@/contexts/search-context";
import { useEffect } from "react";
import { reduxGetCollections } from "@/store/actions/collections";

export default function Template({ children }: React.PropsWithChildren) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reduxGetCollections());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SearchContextProvider>{children}</SearchContextProvider>
      </PersistGate>
    </Provider>
  );
}