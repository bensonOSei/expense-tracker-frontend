import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export const Dropdown = ({ iconText, children }) => {
	const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    // on click outside

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [dropdownRef]);


	return (
		<div 
            ref={dropdownRef}
        className="inline-block relative"
        >
			<button 
                onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-4">
				<span>{iconText}</span>
				<FontAwesomeIcon icon={faChevronDown} />
			</button>
			{isOpen && (
                children
			)}
		</div>
	);
};

Dropdown.propTypes = {
    iconText: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
