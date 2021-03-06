import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "../ss-g-1.jpg",
    altText: "Slide 1",
    key: "1",
  },
  {
    src: "../ss-g-2.jpg",
    altText: "Slide 2",
    key: "2",
  },
  {
    src: "../ss-g-3.jpg",
    altText: "Slide 3",
    key: "3",
  },
  {
    src: "../ss-g-4.jpg",
    altText: "Slide 4",
    key: "4",
  },
  {
    src: "../ss-g-6.jpg",
    altText: "Slide 6",
    key: "6",
  },
  {
    src: "../ss-g-7.jpg",
    altText: "Slide 7",
    key: "7",
  },
  {
    src: "../ss-g-8.jpg",
    altText: "Slide 8",
    key: "8",
  },
];

export default function Carousel(styles) {
  return <UncontrolledCarousel items={items} className={styles.carousel} />;
}
