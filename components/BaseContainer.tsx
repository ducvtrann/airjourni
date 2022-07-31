// Interface
export interface IBaseContainerTemplate {
  className?: string;
  children: React.ReactNode;
}

// Main
const BaseContainer: React.FC<IBaseContainerTemplate> = ({
  className,
  children,
}) => {
  return (
    <div className={`container p-8 mx-auto ${className ? className : ''}`}>
      {children}
    </div>
  );
};

export default BaseContainer;
