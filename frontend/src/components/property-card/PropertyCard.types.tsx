type PropertyCardProps = {
  title: string;
  price: number;
  image: string;
  size?: "small" | "large"; // <── FIX
  onClick?: () => void;
};
