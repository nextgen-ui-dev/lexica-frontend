interface ContainerProps {
    children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="max-w-4xl mx-auto px-4">
            {children}
        </div>
    );
}

export default Container;