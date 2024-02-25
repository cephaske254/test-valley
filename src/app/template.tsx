"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "@/store";
import { SearchContextProvider } from "@/contexts/search-context";
import { useEffect } from "react";
import { reduxGetCollections } from "@/store/actions/collections";
import { reduxGetShortcuts } from "@/store/actions/shortcuts";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import { reduxGetBanners } from "@/store/actions/banners";
import useDispatch from "@/hooks/useDispatch";

export default function Template({ children }: React.PropsWithChildren) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reduxGetCollections());
    dispatch(reduxGetShortcuts());
    dispatch(reduxGetBanners());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SearchContextProvider>{children}</SearchContextProvider>
      </PersistGate>
    </Provider>
  );
}
