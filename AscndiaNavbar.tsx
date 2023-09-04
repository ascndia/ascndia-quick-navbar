import React,{useState} from 'react'

export interface AscndiaNavbarProps {
    styles?: {
        nav:string;
        title:string;
        dropdown:string;
        li:string;
        hamburger:string;
    };
    title:string;
    dropdownData?: (dropdownDataButtonInterface | dropdownDataNavigateInterface)[];
}

interface dropdownDataButtonInterface {
    title: (() => string) | string; 
    onClick : () => void;
    type:'button';
}

interface dropdownDataNavigateInterface {
    title: (() => string) | string; 
    href: string;
    type:'link';
}

function AscndiaNavbar(props: AscndiaNavbarProps) {

    const { styles, title, dropdownData } = props;
    const [navActive,setNavActive] = useState(false);
    
    const initialDropDownClasses = `${styles.dropdown} absolute mt-3 pt-5 shadow-2xl
    rounded-lg max-w-[270px] w-full right-4 top-full z-index[9999]`;

    const renderDropDownItems = () => {
        return (
            <>
                <div className='flex items-center px-4'>
                    <button onClick={() => setNavActive(!navActive)} id='hamburger' name='hamburger' className={navActive ? 'hamburger-active ' + 'block' : 'block'}>
                        <span className={ styles.hamburger + ' w-[30px] h-[2px] my-2 block transition duration-300 ease-in-out origin-top-left'}></span>
                        <span className={ styles.hamburger + ' w-[30px] h-[2px] my-2 block transition duration-300 ease-in-out'}></span>
                        <span className={ styles.hamburger + ' w-[30px] h-[2px] my-2 block transition duration-300 ease-in-out origin-bottom-left'}></span>
                    </button>
                </div>
                <div id='nav-menu' className={!navActive ? 'hidden ' + initialDropDownClasses : initialDropDownClasses}>
                    <ul className='block'>
                        {
                            dropdownData.map((data,index) => {
                                switch(data.type){
                                    case 'button': return (
                                        <li key={index} className='group cursor-pointer mb-5'>
                                            <button className={ styles.li + ' mx-8 py-2'} onClick={data.onClick}>{data.title}</button>
                                        </li>
                                    )
                                    case 'link': return (
                                        <li key={index} className='group cursor-pointer mb-5'>
                                            <a className={ styles.li + ' mx-8 py-2'} href={data.href}>{data.title}</a>
                                        </li>
                                    )
                                    default: return null
                                }
                            })
                        }
                    </ul>
                </div>
            </>
        )
        
    }
    return (
        <nav className={styles.nav + ' w-full z-[9999]'}>
            <div className='container'>
                <div className="flex justify-between p-2 relative items-center">
                    <h2 className={styles.title}>{title}</h2>
                    {
                        props.dropdownData.length > 0 && renderDropDownItems()
                    }
                </div>
            </div>
        </nav>
    )
}

export default AscndiaNavbar