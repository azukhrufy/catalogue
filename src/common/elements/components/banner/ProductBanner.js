import Image from 'next/image'

import styles from '../../../../styles/Home.module.css'

export default function ProductBanner({data}) {
    return(
        <div className={styles.banner} style={{ position: "relative", width: "100%", paddingBottom: "25%", padding:"-2rem" }}>
            <Image 
                src={data}
                layout="fill"
                objectFit="cover"
            />
        </div>
    )
}
