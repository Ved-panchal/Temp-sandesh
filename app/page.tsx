import dynamic from 'next/dynamic';
import Loading from '@/app/loading';

const Slider_Entertainment = dynamic(() => import('@/components/Slider/Entertainment/Slider_Entertainment'), {
  loading: () => <Loading />,
  ssr: false,
});
const Slider_Trending = dynamic(() => import('@/components/Slider/Trending/Slider_Trending'), {
  loading: () => <Loading />,
  ssr: false,
});
const Slider_PhotoGallery = dynamic(() => import('@/components/Slider/PhotoGallery/Slider_PhotoGallery'), {
  loading: () => <Loading />,
  ssr: false,
});
const Category = dynamic(() => import('@/Category/Category'), {
  loading: () => <Loading />,
  ssr: false,
});
const Astrology = dynamic(() => import('@/components/Astrology/Astrology'), {
  loading: () => <Loading />,
  ssr: false,
});
const World = dynamic(() => import('@/components/World/world'), {
  loading: () => <Loading />,
  ssr: false,
});
const India = dynamic(() => import('@/components/India/India'), {
  loading: () => <Loading />,
  ssr: false,
});
const SportsNews = dynamic(() => import('@/components/SportsNews/SportsNews'), {
  loading: () => <Loading />,
  ssr: false,
});
const Gujarat = dynamic(() => import('@/components/Gujarat/Gujarat'), {
  loading: () => <Loading />,
  ssr: false,
});

const Page = () => {
  return (
    <>
      <Slider_Entertainment />
      <Slider_Trending />
      <Slider_PhotoGallery />
      <Category />
      <Astrology />
      <World />
      <India />
      <SportsNews />
      <Gujarat />
    </>
  );
};

export default Page;
