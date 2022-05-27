import React, { useState, useEffect } from "react";
import axios from "axios";
import Zoom from "react-medium-image-zoom";
import { useRouter } from "next/dist/client/router";
import "react-medium-image-zoom/dist/styles.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const Home = () => {
  const router = useRouter();

  const [students, setStudents] = useState([]);

  useEffect(() => {
    const res = axios
      .get("https://fejs-c7-api.herokuapp.com/api/students/?populate=*")
      .then((res) => {
        setStudents([...res.data.data]);
        console.log(res);
      });
  }, []);
  return (
    <section className="text-gray-600 body-font my-5">
      <div className="container px-5 py-24 mx-auto">
        <div className="m-4 flex-wrap">
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full flex">
            {students.map((student) => (
              <div
                key={student.id}
                onClick={() => router.push(`/student/${student.id}`)}
                className="flex-basis: 25% flex-shrink-0 flex-grow-0"
              >
                <a className="block relative h-48 rounded overflow-hidden">
                  <Zoom>
                    {student.attributes.photo.data === null && (
                      <img
                        src="/patrick.jpg"
                        alt="student"
                        className="object-cover object-center w-full h-full block"
                      />
                    )}
                    {student.attributes.photo.data !== null && (
                      <img
                        src={student.attributes.photo.data.attributes.url}
                        alt="student"
                        className="object-cover object-center w-full h-full block"
                      />
                    )}
                  </Zoom>
                </a>
                <div className="mt-4">First Name :</div>
                <div className="title-font text-lg font-medium text-gray-900">
                  {student.attributes.firstname}
                </div>
                <div className="mt-4">Last Name :</div>
                <div className="title-font text-lg font-medium text-gray-900">
                  {student.attributes.lastname}
                </div>
                <div className="mt-4">Location :</div>
                <div className="title-font text-lg font-medium text-gray-900 mb-5">
                  {student.attributes.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
