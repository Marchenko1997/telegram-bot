import signs1x from 'public/assets/responsgambling/signs1x.png';
import signs2x from 'public/assets/responsgambling/signs2x.png';

interface SignsImgProps {
  className?: string;
}

export const SignsImg: React.FC<SignsImgProps> = ({ className }) => {
  return (
    <div className={className}>
      <picture>
        <source media="(max-width: 1023px)" srcSet={signs2x.src} />

        <img src={signs1x.src} alt="My bets" className="w-full h-full object-contain" />
      </picture>
    </div>
  );
};
