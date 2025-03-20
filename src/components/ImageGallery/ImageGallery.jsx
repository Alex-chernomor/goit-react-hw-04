import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGalley.module.css'


export default function ImageGallery({items, openModal}) {
    
  return (
    <ul className={css.imageList}>
        {items.map((item)=>(

            <li key = {item.id}>
                <ImageCard 
                item={item}
                openModal={openModal}
                className={css.imageCard}/>
            </li>
        ))}
    </ul>
  )
}
