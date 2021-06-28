import React, { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const FooterAccordion = ({ id, title, links }) => {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ height, setHeight ] = useState(0)
    const measure = useRef(null)

    useLayoutEffect(() => {
        setHeight(measure.current.scrollHeight)
    }, [])

    const handleExpand = (e) => {
        const accordion = e.target.nextElementSibling
        setIsOpen(!isOpen)
        if(!isOpen) {
            accordion.style.height = `${height}px`
        }else {
            accordion.style.height = '0px'
        }
    }

    return (
        <div className="border-t md:border-t-0 border-green-500 border-opacity-30" key={ id }>
            <button className="w-full md:w-auto py-4 md:py-0 md:pb-4 flex justify-between items-center md:block opacity-50 md:pointer-events-none pointer-events-auto" onClick={ (e) => handleExpand(e) }>
                <span className="text-xs md:text-base">{ title }</span>
                <div className="md:hidden"><ExpandMoreIcon /></div>
            </button>
            <ul ref={ measure } className={`accordion-body overflow-hidden opacity-0 md:opacity-100 transform transition-all duration-200 ease-in-out ${isOpen ? 'expanded' : ''}`}>
                { links.map((data, i) => (
                    <li key={ i }><a className="py-2 block" href="#">{ data }</a></li>
                )) }
            </ul>
        </div>
    );
}
 
export default FooterAccordion;