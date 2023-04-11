interface LoaderProps {
    size: number;
}
/**
 * Bootstrap loader wrapper component
 * @param size set size in rem units
 */
export default function Loader({ size }: LoaderProps) {
    return (
        <div
            className="spinner-border m-5"
            style={{ width: size + "rem", height: size + "rem" }}
            role="status"
        >
            <span className="visually-hidden">Loading...</span>
        </div>
    );
}
