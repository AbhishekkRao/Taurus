import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const IconText = ({ iconName, displayText, active, targetLink, onClick, color }) => {
    return (
        <Link to={targetLink} className="block">
            <div
                className={`flex items-center justify-start cursor-pointer`}
                onClick={onClick}
            >
                <div className="px-5 py-2">
                    <Icon
                        icon={iconName}
                        color={active ? "white" : color}
                        fontSize={30}
                    />
                </div>
                <div
                    className={`${active ? "text-white" : "text-gray-400"
                        } ${color === "red" ? "text-red-600" : ""} text-sm font-semibold hover:text-white`}
                >
                    {displayText}
                </div>
            </div>
        </Link>
    );
};

export default IconText;