// Component
import BaseContainer from '../baseContainer/BaseContainer';

// Interface
export interface ISectionTitle {
  title?: string;
  subTitle?: string;
  description?: string;
  align?: string;
}
const SectionTitle: React.FC<ISectionTitle> = ({
  title,
  subTitle,
  description,
  align,
}) => {
  return (
    <BaseContainer
      className={`flex w-full flex-col mt-4 p-0 ${
        align === 'left' ? '' : 'items-center justify-center text-center'
      }`}
    >
      {title && (
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          {title}
        </div>
      )}

      {subTitle && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {subTitle}
        </h2>
      )}

      {description && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {description}
        </p>
      )}
    </BaseContainer>
  );
};

export default SectionTitle;
