import { atom } from 'recoil';

export interface Flight {
  id: string;
  name: string;
  description: string;
  image: string
}

export interface ImgCarouselProps {
  currentSlide: number;
  handleSlideChange: (index: number) => void;
}

export interface SliderButtonProps {
  galleryRef: React.RefObject<HTMLDivElement>;
  rockets: any[];
}

export const favoriteFlightsState = atom<Flight[]>({
  key: 'favoriteFlightsState',
  default: [],
});