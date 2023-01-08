import React, {
    useState
} from 'react';

function DropdownButton({
    options,
    onOptionClick
}) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return ( <
            div >
            <
            button
            className="mt-8 bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white"
            onClick={
                toggleMenu
            } > Category </button> {
            isOpen && ( <
                ul > {
                    options.map((option) => ( <li
                        li key = {
                            option.value
                        }
                        onClick = {
                            () => onOptionClick(option.value)
                        } > {
                            option.label
                        } </li>
                    ))
                } </ul>
            )
        } </div>
);
}

export default DropdownButton;