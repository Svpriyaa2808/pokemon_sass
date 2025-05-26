import { HomeGridArticleType } from "@/utils/types"
import Image from "next/image"

const HomeGridArticle = ({title,image,style}:HomeGridArticleType) => {
    return (
        <div className={`home-grid__article ${style}`}>
            <h3>{title}</h3>
            <Image src={image} alt={title} width={1000} height={800} />
        </div>
    )
}

export default HomeGridArticle