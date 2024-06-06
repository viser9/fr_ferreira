"use client";
import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/custom-components/ShadcnButton";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/toaster";
import { ChangeEvent, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL, UploadTaskSnapshot } from "firebase/storage";
import { storage } from "@/firebase.config";

export default function () {
  const [image, setImage] = useState<File | null>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (image) {
      const storageRef = ref(storage, "images/" + image.name);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot: UploadTaskSnapshot) => { 
          const porgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log((`upload is ${porgress}% done`));
        },
        error => {
          console.log(error);
        }
      )
      const url = await getDownloadURL(uploadTask.snapshot.ref);
      console.log(url);
    }
  };

  return (
    <>
      <input type="file" onChange={handleChange}/>
        <button onClick={handleUpload} className="border-black bg-green-200">Upload</button>
    </>
  );
}
