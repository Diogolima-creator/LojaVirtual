import { storage } from '../libs/firebase.js'
import { ref, listAll, getDownloadURL} from 'firebase/storage';

export const getAll = async () => {
    let list = [];
    
    const imagesFolder = ref(storage, "images");
    const productsList = await listAll(imagesFolder);

    for(let i in productsList.items){
        let productsUrl = await getDownloadURL(productsList.items[i]);

        list.push({
            name: productsList.items[i].name,
            url: productsUrl
        });
    }
    return list;
}
