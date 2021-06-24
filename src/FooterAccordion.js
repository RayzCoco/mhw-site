import { useState, useEffect } from 'react'

const FooterAccordion = ({ footerLinks }) => {
    const [ isActive, setIsActive ] = useState(true)
    const [ isMobile, setIsMobile ] = useState(false)

    const handleResize = () => {
        if(window.innerWidth < 768) {
            setIsMobile(true)
        }else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    const handleActive = (e) => {
        console.log(e)
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 md:mt-0 text-left text-white">
            { footerLinks.map((link) => (
                <div key={ link.id }>
                    <button className="opacity-50" onClick={ (e) => handleActive(e) } disabled={ !isMobile }>{ link.title }</button>
                    { isActive && <ul>
                        { link.links.map((data, i) => (
                            <li key={ i }><a className="py-2 block" href="#">{ data }</a></li>
                        )) }
                    </ul> }
                </div>
            )) }
        </div>
    );
}
 
export default FooterAccordion;