import css from './ImageCard.module.css'

export default function ImageCard({item, openModal}) {
  return (
    <div className={css.container}>
      
           <img 
           className={css.image} 
           src={item.urls.small} 
           alt={item.alternative_slugs.en}
           onClick={() => openModal(item.urls.regular)} 
            />
    </div>
  )
}
