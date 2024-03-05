// eslint-disable-next-line react/prop-types
const ChevronLeft = ({ size, color }, ...props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        {...props}
    >
        <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m12.5 15-5-5 5-5"
        />
    </svg>
)
export default ChevronLeft