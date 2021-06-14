import chef1 from './img/chef1.webp'
import chef2 from './img/chef2.webp'
import chef3 from './img/chef3.webp'

const Trust = () => {
    return (
        <div className="container mx-auto">
            <h2 className="text-green-900 mb-6 text-4xl">TRUSTED BY THOSE IN THE KNOW</h2>
            <div className="grid grid-cols-3">
                <div className="relative overflow-hidden pb-125">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="h-full">
                            <img src={ chef1 } alt="" />
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="w-full h-full flex justify-center items-end p-9">
                            <div className="text-center text-white">
                                <div>THE TWO-MICHELIN STARRED CHEF</div>
                                <h3>TOM KERRIDGE</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden pb-125">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="h-full">
                            <img src={ chef2 } alt="" />
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="w-full h-full flex justify-center items-end p-9">
                            <div className="text-center text-white">
                                <div>THE AWARD WINNING BUTCHER</div>
                                <h3>RICHARD TURNER</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden pb-125">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="h-full">
                            <img src={ chef3 } alt="" />
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="w-full h-full flex justify-center items-end p-9">
                            <div className="text-center text-white">
                                <div>THE PUBLISHED AUTHOR & PRODUCER</div>
                                <h3>JAMES WHETLOR</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Trust;