export default function ApplicationLogo(props) {
    return (
        <svg
            viewBox="0 0 290 150"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:bx="https://boxy-svg.com"
            {...props}
        >
            <defs>
                <style bx:fonts="Bevan">
                    {
                        "@import url(https://fonts.googleapis.com/css2?family=Bevan%3Aital%2Cwght%400%2C400%3B1%2C400&display=swap);"
                    }
                </style>
            </defs>
            <text
                style={{
                    fill: "rgb(0, 12, 213)",
                    fontFamily: "Bevan",
                    fontSize: 22,
                    whiteSpace: "pre",
                }}
                transform="matrix(4.045514, 0, 0, 3.953061, -601.608948, -506.949493)"
                x={153.964}
                y={155.48}
            >
                {"GO"}
            </text>
            <text
                style={{
                    fontFamily: "Bevan",
                    fontSize: 20,
                    whiteSpace: "pre",
                }}
                transform="matrix(2.776016, 0, 0, 2.560795, -688.932861, 8.741709)"
                x={312.005}
                y={38.988}
            >
                {"SV"}
            </text>
        </svg>
    );
}
