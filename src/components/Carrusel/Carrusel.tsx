interface caruselProp{
    images:string;
}
export function Carrusel({images}:caruselProp){
    return(
        <div className="w-full h-[38vh] overflow-hidden p-2">
            <img 
                src={images} 
                alt="imagen carrusel" 
                className="w-full h-full object-cover transition-all duration-700"
            />
        </div>
    );
}
