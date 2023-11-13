import React, { useState, useEffect, useRef } from 'react';

export default function ImageUploader({ bookData }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (bookData && bookData.image) {
      setSelectedImage(URL.createObjectURL(bookData.image));
      fileInputRef.current.value = '';
    }
  }, [bookData]);

  function handleImageUpload(event) {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        required
        ref={fileInputRef}
        onChange={handleImageUpload}
      />
      {selectedImage && <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px' }} />}
    </div>
  );
}
