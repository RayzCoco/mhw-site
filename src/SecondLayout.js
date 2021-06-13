import restaurant from './img/restaurant-quality.webp'

const SecondLayout = () => {
    return (
        <div className="grid grid-cols-3">
            <div className="col-span-2 row-span-1">
                <div className="relative">
                    <div className="overflow-hidden relative pb-62-5">
                        <div className="absolute top-0 left-0 flex w-full h-full">
                            <img src={ restaurant } alt="" />
                        </div>
                        <div className="absolute top-0 left-0 flex w-full h-full">
                            <div className="ml-auto max-w-1/2 flex justify-center flex-col">
                                <h4>Achieve restaurant quality food at home</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 row-span-1">
                <div className="relative overflow-hidden pb-125"></div>
            </div>
            <div className="col-span-1 row-span-2">
                <div className="overflow-hidden relative pb-125">
                    <div className="absolute top-0 left-0 h-full w-full bg-green-900"></div>
                    <div className="absolute top-0 left-0 h-full w-full">
                        <div className="flex justify-center text-white w-full h-full flex-col p-9">
                            <div className="mb-4">Daniel Clifford, Chef of Midsummer House</div>
                            <h3>"I HAVE NEVER COME ACROSS A BARBECUE THAT OFFERS SUCH VERSATILITY AND CONTROL"</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 row-span-2"></div>
            <div className="col-span-1 row-span-2"></div>
        </div>
    );
}
 
export default SecondLayout;