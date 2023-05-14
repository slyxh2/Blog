import Image, { StaticImageData } from 'next/image';

type AvatarProps = {
    src: StaticImageData
    size: string
    alt: string
    className?: string
    id?: string
}

const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
    const { src, className, id, alt, size } = props;
    const styles: React.CSSProperties = {
        borderRadius: '50%',
        width: size,
        height: size,
        objectFit: 'cover'
    };
    return <Image
        src={src}
        alt={alt}
        className={className}
        id={id}
        style={styles}
    />
}


export default Avatar;