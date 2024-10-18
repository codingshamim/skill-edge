import { Courses } from "@/models/Courses";

const getCourseList = async () => {
  const list = await Courses.find({}).populate({
    path : "",
    
  });
  console.log(list);
  return list;
};

export default getCourseList;
