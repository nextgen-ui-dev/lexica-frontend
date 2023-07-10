interface ContainerProps {
  maximum?: boolean;
  expanded?: boolean;
  children: React.ReactNode;
}

const Container = ({ maximum, expanded, children }: ContainerProps) => {
  return (
    <div
      className={`relative ${
        maximum ? "max-w-7xl" : expanded ? "max-w-6xl" : "max-w-4xl"
      } mx-auto px-4`}
    >
      {children}
    </div>
  );
};

export default Container;
