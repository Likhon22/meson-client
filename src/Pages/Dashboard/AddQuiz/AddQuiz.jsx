import { message, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteExamById, getAllExams } from "../../../Utils/exam";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
import DashboardContainer from "../../../Components/Dashboard/DashboardContainer/DashboardContainer";
import { useQuery } from "@tanstack/react-query";

const AddQuizzes = () => {
  const navigate = useNavigate();
  // const [exams, setExams] = useState([]);
  const dispatch = useDispatch();
  const { data: exams } = useQuery({
    queryKey: ["exams"],
    queryFn: async () => {
      return await getAllExams();
    },
  });

  const deleteExam = async (examId) => {
    try {
      dispatch(ShowLoading());
      const response = await deleteExamById({ examId });
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        getExamsData();
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: "Exam Name",
      dataIndex: "name",
    },
    {
      title: "Duration",
      dataIndex: "duration",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Total Marks",
      dataIndex: "totalMarks",
    },
    {
      title: "Passing Marks",
      dataIndex: "passingMarks",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <div className="flex gap-2">
          <i
            className="ri-pencil-line"
            onClick={() => navigate(`/dashboard/exams/edit/${record._id}`)}
          />
          <i
            className="ri-delete-bin-line"
            onClick={() => deleteExam(record._id)}
          />
        </div>
      ),
    },
  ];

  return (
    <DashboardContainer>
      <div>
        <div className="flex justify-between mt-2 items-end">
          <Link to="/dashboard/add-quiz/exam/add">
            <button className="primary-outlined-btn flex items-center">
              <i className="ri-add-line"></i>
              Add Exam
            </button>
          </Link>
        </div>
        <div className="divider"></div>
        <Table columns={columns} pagination={false} dataSource={exams} />
      </div>
    </DashboardContainer>
  );
};

export default AddQuizzes;
