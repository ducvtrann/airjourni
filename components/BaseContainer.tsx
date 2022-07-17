// Interface
export interface IBaseContainerTemplate {
  className?: string;
  children: React.ReactNode;
}

// Main Component
const BaseContainer: React.FC<IBaseContainerTemplate> = ({
  className,
  children,
}) => {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0 ${className ? className : ''}`}
    >
      {children}
    </div>
  );
};

export default BaseContainer;
