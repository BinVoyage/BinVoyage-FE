import ImagePicker from 'react-native-image-crop-picker';
import {pictureStore} from 'store/Store';

export const useImage = () => {
  const addImages = pictureStore(state => state.addImages);

  const Camera = async () => {
    try {
      const image = await ImagePicker.openCamera({
        width: 300,
        height: 300,
        cropping: true,
      });
      console.log('camera', image);
      if (image) {
        addImages({
          path: image.path,
          modificationDate: image.modificationDate!,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const Album = async () => {
    try {
      const imageList = await ImagePicker.openPicker({
        multiple: true,
        cropping: false,
        mediaType: 'photo',
      });

      for (const image of imageList) {
        try {
          const cropped = await ImagePicker.openCropper({
            path: image.path,
            width: 300,
            height: 300,
            mediaType: 'photo',
          });
          if (cropped) {
            addImages({
              path: cropped.path,
              modificationDate: cropped.modificationDate!,
            });
          }
        } catch (cropError) {
          console.error('Error cropping image: ', cropError);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {Camera, Album};
};