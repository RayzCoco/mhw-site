import { useState, useEffect } from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const FooterAccordion = ({ id, title, links }) => {
    const [ width, setWidth ] = useState(window.innerWidth)
    const [ isOpen, setIsOpen ] = useState(false)
    const [ isMobile, setIsMobile ] = useState(false)

    const handleResize = () => {
        setWidth(window.innerWidth)
        if(width < 768) {
            setIsMobile(true)
            console.log('true')
        } else {
            setIsMobile(false)
            console.log('false')
        }
    }

    useEffect(() => {
        window.addEventListener('load', handleResize)
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('load', handleResize)
            window.removeEventListener('resize', handleResize)
        }
    })

    const handleActive = (e) => {
        const accordion = e.target.nextElementSibling
        const accordionHeight = accordion.clientHeight
        accordion.style.height = accordionHeight
    }

    return (
        <div className="border-t md:border-t-0 border-green-500 border-opacity-30" key={ id }>
            <button className="w-full md:w-auto py-4 md:py-0 md:pb-4 flex justify-between items-center md:block opacity-50 md:pointer-events-none pointer-events-auto" onClick={ (e) => setIsOpen(!isOpen) }>
                <span className="text-xs md:text-base">{ title }</span>
                <div className="md:hidden"><ExpandMoreIcon /></div>
            </button>
            <ul className={`accordion-body overflow-hidden opacity-0 md:opacity-100 transform transition-all duration-200 ease-in-out ${isOpen ? 'expanded' : ''}`}>
                { links.map((data, i) => (
                    <li key={ i }><a className="py-2 block" href="#">{ data }</a></li>
                )) }
            </ul>
        </div>
    );
}
 
export default FooterAccordion;