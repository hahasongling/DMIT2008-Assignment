 function PageHeader ( {title, tagline}){
    return (
        <header className="text-center pt-16">
            <h1 className="text-5xl text-Black">{title || "Page Title"}</h1>
            <p className="text-2xl text-Black">{tagline || "Page Tagline"}</p>
        </header>

 
    )
 }



 export {PageHeader}