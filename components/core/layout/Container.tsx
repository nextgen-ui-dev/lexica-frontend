interface ContainerProps {
  expanded?: boolean;
  children: React.ReactNode;
}

const Container = ({ expanded, children }: ContainerProps) => {
  return (
    <div
      className={`relative ${
        expanded ? "max-w-6xl" : "max-w-4xl"
      } mx-auto px-4`}
    >
      {children}
    </div>
  );
};

export default Container;
