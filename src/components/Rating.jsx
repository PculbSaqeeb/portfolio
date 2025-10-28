
import { Star, StarHalf, StarOff } from 'lucide-react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);         
  const hasHalfStar = rating % 1 >= 0.5;     
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex gap-1 sm:gap-1.5 self-start sm:self-center">
      {[...Array(fullStars)]?.map((_, i) => (
        <Star key={`full-${i}`} className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
      ))}
      {hasHalfStar && (
        <StarHalf className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
      )}
      {[...Array(emptyStars)]?.map((_, i) => (
        <StarOff key={`empty-${i}`} className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
      ))}
    </div>
  );    
};


export default StarRating; 