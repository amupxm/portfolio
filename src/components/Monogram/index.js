import classNames from 'classnames';
import { useId } from 'hooks';
import './index.css';

function Monogram({ highlight, className, ...props }) {
  const id = useId();
  const clipId = `monogram-clip-${id}`;

  return (
    <svg
      aria-hidden
      className={classNames('monogram', className)}
      width="46"
      height="29"
      viewBox="0 0 46 29"
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M21.79 18.89L28.97 0.54C29.14 0.11 29.63 -0.11 30.06 0.06C30.25 0.13 30.41 0.27 30.5 0.45L44.9 27.77C45.12 28.18 44.96 28.69 44.55 28.9C44.43 28.97 44.3 29 44.16 29L39.56 29C37.06 29 34.77 27.61 33.62 25.4L26.5 11.73L22.84 20.88L26.47 27.77C26.69 28.18 26.53 28.69 26.12 28.9C26 28.97 25.87 29 25.73 29L21.13 29C18.63 29 16.35 27.61 15.19 25.4L7.2 10.05C7.09 9.84 7.07 9.59 7.16 9.36L10.55 0.54C10.71 0.11 11.2 -0.11 11.63 0.06C11.82 0.13 11.98 0.27 12.07 0.45L21.79 18.89L21.79 18.89ZM2.72 20.64C2.79 20.45 2.93 20.29 3.11 20.19C3.51 19.97 4.02 20.12 4.24 20.53L8.15 27.76C8.22 27.88 8.25 28.02 8.25 28.16C8.25 28.62 7.87 29 7.41 29L0.83 29C0.73 29 0.64 28.98 0.54 28.95C0.11 28.79 -0.11 28.3 0.05 27.87L2.72 20.64L2.72 20.64Z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className="monogram__highlight" width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
}

export default Monogram;
