import React from 'react'
import UseFireStore from '../hooks/UseFireStore';
import {motion} from 'framer-motion/dist/framer-motion';

const ImageGrid = ({setSelectedImg}) => {
    const {docs} = UseFireStore('images');
    console.log(docs);
  return (
    <div className='img-grid'>
        {docs && docs.map(doc => (
            <motion.div className='img-wrap' key={doc.id}
            layout
            whileHover={{opacity: 1}}
                onClick={()=> setSelectedImg(doc.url)}
            >
                <motion.img src={doc.url} alt='gallery franciose'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1}}
                />
            </motion.div>
        ))}
    </div>
  )
}

export default ImageGrid