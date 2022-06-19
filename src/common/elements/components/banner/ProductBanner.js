import Image from 'next/image'

export default function ProductBanner({data}) {
    return(
        <div style={{ position: "relative", width: "100%", paddingBottom: "25%", marginBottom: "4.5rem", padding:"-2rem" }}>
            <Image 
                src={data}
                layout="fill"
                objectFit="cover"
            />
        </div>
    )
}
