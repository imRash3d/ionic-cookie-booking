import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { StorageService } from '../../services/storage.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-upload-image',
  templateUrl: './app-upload-image.component.html',
  styleUrls: ['./app-upload-image.component.scss'],
})
export class AppUploadImageComponent implements OnInit , OnChanges{
  @Input() type: 'image' | 'profile-photo' = 'image';
  @Input() editImgUrl = '';
  @Input() imageUrl = '../../../../assets/img-placeholder.png';
//  imageUrl = 'http://food.rash3d.xyz/images/1600630146716.jpg';
  private optionsGallery: CameraOptions = {
    quality: 100,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  constructor(
    private camera: Camera,
    private storageServcie: StorageService
  ) { }
  @Output() onUploadEvent = new EventEmitter()
  ngOnChanges(){
    if(this.editImgUrl){
      console.log(this.editImgUrl)
      this.imageUrl = this.editImgUrl
    }
  }
  ngOnInit() { }
  open() {

    
    this.camera.getPicture(this.optionsGallery).then((imageData) => {
      // this.file.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
      //   entry.file(file => {
      //     console.log(file);
      //     this.readFile(file);
      //   });
      // });
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image)

      // var imgBlob = this.dataURItoBlob(base64Image);
      // var fd = new FormData(document.forms[0]);

       const formData = new FormData();
      // formData.append('name', 'Hello');
      // formData.append('file', imgBlob, 'image01.jpg');
      // console.log(formData)

      const file = this.dataURLtoFile(base64Image)
      formData.append('file', file, 'image.jpg') 
      let obs$: Observable<any>;
      if (this.type === 'image') {
        obs$ = this.storageServcie.uploadImage(formData);
      } else {
        this.storageServcie.upProfileImage(formData)
      }
      obs$.subscribe(resposne => {
        if (resposne.result) {
          this.onUploadEvent.emit(resposne.data);
          this.imageUrl = resposne.data;
        } else {
          this.onUploadEvent.emit('https://cidco-smartcity.niua.org/wp-content/uploads/2017/08/No-image-found.jpg')
        }
        console.log(resposne.data)
      })
    }, (err) => {
      // Handle error
      console.log(err)
    })

    // this.fileChooser.open()
    //   .then(uri => {
    //     console.log(uri)
    //     this.imageUrl = uri
    //   })
    //   .catch(e => console.log(e));
  }
  dataURLtoFile(dataURI) {

    const splitDataURI = dataURI.split(',')
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

    const ia = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++)
        ia[i] = byteString.charCodeAt(i)

    return new Blob([ia], { type: mimeString })
  }
}
