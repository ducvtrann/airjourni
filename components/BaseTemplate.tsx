// Package

// Component

// Interface
export interface IBaseTemplate {
  sampleTextProp: string;
}

// Data

// Main
const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div>{sampleTextProp}</div>;
};

export default BaseTemplate;
