import PageContainer from "@/components/page-container";
import DefaultLayout from "@/layouts/default";

import CollectionsSection from "@/sections/collections";
import ShortcutsSection from "@/sections/shortcuts";
import TopCarouselSection from "@/sections/top-carousel";

export default function Home() {
  return (
    <DefaultLayout>
      <TopCarouselSection />

      <PageContainer sx={{ pb: 8 }}>
        <ShortcutsSection />

        <CollectionsSection />
      </PageContainer>
    </DefaultLayout>
  );
}
