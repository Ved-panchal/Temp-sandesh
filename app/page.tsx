import Slider_Entertainment from "@/components/Slider/Entertainment/Slider_Entertainment";
import Slider_Trending from "@/components/Slider/Trending/Slider_Trending";
import Slider_PhotoGallery from "@/components/Slider/PhotoGallery/Slider_PhotoGallery";
import Category from "@/Category/Category";
import Astrology from "@/components/Astrology/Astrology"


const page = () => {
  return (
    <>
      <Slider_Entertainment />
      <Slider_Trending />
      <Slider_PhotoGallery />
      <Category/>
      <Astrology />
    </>
  );
}

export default page;
