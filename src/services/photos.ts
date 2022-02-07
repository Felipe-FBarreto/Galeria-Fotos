import { Photo } from '../types/Photos'
import {storage} from '../libs/firebase'
import {ref,listAll,getDownloadURL,uploadBytes} from 'firebase/storage'
import { v4 as createid} from 'uuid'

export const getAll = async () =>{
    let list:Photo[] = []
    const imagesFolder = ref(storage,'images');// Pega a pasta que tem as imgs no storage
    const photoLst = await listAll(imagesFolder); // pega as imganes e lista elas

    for(let i in  photoLst.items){
      let photoUrl = await getDownloadURL(photoLst.items[i])// pega um link direto para acessar a foto (URL)

      list.push({
        name:photoLst.items[i].name,
        url:photoUrl,
      }) // montar o array e retornar na lista
    }

    return list
}


export const insert =async (file:File) => {
  if(['image/jpeg', 'images/jpg', 'images/png','images/svg'].includes(file.type)){

      let randomName = createid();
      let newFile = ref(storage, `images/${randomName}`);

      let upload = await uploadBytes(newFile,file);
      let photoUrl = await getDownloadURL(upload.ref);

      return {name: upload.ref.name,url:photoUrl} as Photo;

  }else{
    return new Error('Tipo de arquivo não permitido')
  }
}