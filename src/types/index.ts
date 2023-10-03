export interface SectionProps {
  id: string;
}

export interface Section {
  id: string;
  title: string;
  isActive: boolean;
  View: ({ id }: SectionProps) => JSX.Element;
}
