import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import axios from "axios";
import Head from "next/head";

const Student = () => {
  const [students, setStudents] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    axios
      .get(`https://fejs-c7-api.herokuapp.com/api/students/${id}?populate=*`)
      .then((res) => {
        setStudents(res.data.data);
        console.log(res);
      });
  }, []);

  return (
    <div>
      {students && (
        <>
          <div className="mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded">
              <Zoom>
                {students.attributes.photo.data === null && (
                  <img src="/patrick.jpg" alt="student" />
                )}
                {students.attributes.photo.data !== null && (
                  <img
                    src={students.attributes.photo.data.attributes.url}
                    alt="student"
                  />
                )}
              </Zoom>
            </div>
            <div className="text-center lg:w-2/3 w-full">
              <div>
                <div className="text-xl">Nama Depan :</div>
                <div className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  {students.attributes.firstname}
                </div>
              </div>
              <div>
                <div className="text-xl">Nama Belakang :</div>
                <div className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  {students.attributes.lastname}
                </div>
              </div>
              <div>
                <div className="leading-relaxed">Lokasi :</div>
                <div className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  {students.attributes.location}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Student;
