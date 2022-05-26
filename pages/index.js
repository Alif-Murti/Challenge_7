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
    <div>
      {students.map((student) => (
        <div
          key={student.id}
          onClick={() => router.push(`/student/${student.id}`)}
        >
          <Zoom>
            {student.attributes.photo.data === null && (
              <img src="/patrick.jpg" alt="student" width="100" />
            )}
            {student.attributes.photo.data !== null && (
              <img
                src={student.attributes.photo.data.attributes.url}
                alt="student"
                width="100"
              />
            )}
          </Zoom>
          <div className="mt-4">First Name :</div>
          <div className="font-bold text-emerald-800">
            {student.attributes.firstname}
          </div>
          <div className="mt-4">Last Name :</div>
          <div className="font-bold text-emerald-800">
            {student.attributes.lastname}
          </div>
          <div className="mt-4">Location :</div>
          <div className="font-bold text-emerald-800">
            {student.attributes.location}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
