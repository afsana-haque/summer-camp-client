import React, { useContext, useEffect, useState } from "react";
import MyClassesCard from "./MyClassesCard";
import { AuthContext } from "../../../providers/AuthProvider";

const MyClasses = () => {
  // /classes?email=${user?.email
  const { user } = useContext(AuthContext);
  const [classes, setMyClasses] = useState([]);
  const { name } = classes;
  console.log(classes, "instructor class-------------");
  useEffect(() => {
    fetch(`https://music-school-server-bay.vercel.app/classes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyClasses(data));
  }, [user]);
  return (
    <div>
      <div className="mt-8">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Course Image</th>
                <th>Course Name</th>
                <th>Price</th>
                <th>Modules</th>
                <th>Duration</th>
                <th>Enrolled Students</th>
                <th>Status</th>
                <th>Feedback</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((course, index) => (
                <MyClassesCard
                  key={index}
                  index={index}
                  course={course}
                ></MyClassesCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;