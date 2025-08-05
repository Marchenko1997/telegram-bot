import smart1x from "public/assets/responsgambling/smart1x.png"
import smart2x from 'public/assets/responsgambling/smart2x.png';

interface SmartImgProps {
  className?: string;
}

export const SmartImg: React.FC<SmartImgProps> = ({ className }) => {
    return (
      <div className={className}>
        <picture>
          <source media="(max-width: 1023px)" srcSet={smart2x.src} />

          <img src={smart1x.src} alt="My bets" className="w-full h-full object-contain" />
        </picture>
      </div>
    );
};