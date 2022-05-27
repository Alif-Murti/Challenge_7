import axios from "axios";
import React, { useRef } from "react";
import Dropzone, { useDropzone } from "react-dropzone";

const Index = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const inputFirstname = useRef();
  const inputLastname = useRef();
  const inputLocation = useRef();
  const inputPhoto = useRef();

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const submittedData = {
      firstname: inputFirstname.current.value,
      lastname: inputLastname.current.value,
      location: inputLocation.current.value,
    };

    // console.log(inputPhoto.current.files)

    const formData = new FormData();

    formData.append("data", JSON.stringify(submittedData));
    acceptedFiles.forEach((file) => {
      formData.append("files.photo", file, file.path);
    });

    const res = await axios.post(
      "https://fejs-c7-api.herokuapp.com/api/students/",
      formData
    );
    console.log(res.data);
  };

  return (
    <div className="container">
      <form onSubmit={formSubmitHandler}>
        <section className="body-font text-gray-600">
          <div className="container mx-auto flex flex-wrap items-center px-5 py-24">
            <div className="pr-0 md:w-1/2 md:pr-16 lg:w-3/5 lg:pr-0">
              <img src="https://storage.googleapis.com/danacita-website-v3-prd/website_v3/images/Biaya_bootcamp_binar_academy_6.original.png" />
            </div>
            <div className="mt-10 flex w-full flex-col rounded-lg bg-gray-100 p-8 md:ml-auto md:mt-0 md:w-1/2 lg:w-2/6">
              <h2 className="title-font mb-5 text-lg font-medium text-gray-900">
                Masukkan Data
              </h2>
              <div className="relative mb-4">
                <label className="text-sm leading-7 text-gray-600">
                  Nama Awal
                </label>
                <input
                  type={"text"}
                  id={"full-name"}
                  name={"full-name"}
                  ref={inputFirstname}
                  required
                  className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  data-ms-editor="true"
                />
              </div>
              <div className="relative mb-4">
                <label className="text-sm leading-7 text-gray-600">
                  Nama Akhir
                </label>
                <input
                  type={"text"}
                  id={"lastname"}
                  name={"lastname"}
                  ref={inputLastname}
                  required
                  className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <div className="relative mb-4">
                <label className="text-sm leading-7 text-gray-600">
                  Lokasi
                </label>
                <input
                  type={"text"}
                  id={"location"}
                  name={"location"}
                  ref={inputLocation}
                  required
                  className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <div>
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <h1 className="my-4">
                    Klik teks ini untuk memasukkan gambar
                  </h1>
                </div>
              </div>
              <input
                type={"submit"}
                value={"SUBMIT FORM"}
                className="rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none"
              />
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Index;
