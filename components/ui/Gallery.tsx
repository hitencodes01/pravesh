import Image from 'next/image';
import styles from './Gallery.module.css'; 

export default function Gallery({ images }: any) {
    return (
        <div>
        <div className={styles.gallery}>
            {images.map((img: any) => (
                <div key={img.id} className={styles.galleryItem}>
                    <Image
                        src={`/pravesh/${img.src}`}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        layout="responsive"
                        placeholder="blur"
                        blurDataURL={img.blurDataURL} // Optional for blur effect
                    />
                </div>
            ))}
        </div>
        </div>
    );
}