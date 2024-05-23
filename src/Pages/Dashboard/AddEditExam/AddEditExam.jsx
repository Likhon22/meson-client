import { Col, Form, message, Row, Select, Table, Button } from "antd";
import React, { useEffect, useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Tabs } from "antd";
import {
  addExam,
  deleteQuestionById,
  editExamById,
  getExamById,
  getQuestionByExamId,
} from "../../../Utils/exam";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
import AddEditQuestion from "../../../Components/AddEditQuestion/AddEditQuestion";
import DashboardContainer from "../../../Components/Dashboard/DashboardContainer/DashboardContainer";
import { useQuery } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";

const { TabPane } = Tabs;
const { Option } = Select;
const categories = ["gk", "physics", "chemistry", "math", "english", "bangla"];
const AddEditExam = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [examData, setExamData] = useState(null);
  const [showAddEditQuestionModal, setShowAddEditQuestionModal] =
    useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const params = useParams();
  const { data: questionData, refetch } = useQuery({
    queryKey: ["question", params?.id],
    queryFn: async () => await getQuestionByExamId(params?.id),
  });

  const onFinish = async (values) => {
    console.log("laskdfjhlsdfj");
    try {
      dispatch(ShowLoading());
      let response;

      if (params.id) {
        response = await editExamById(params?.id, { ...values });
      } else {
        response = await addExam(values);
      }
      if (response) {
        message.success("Succesfull");
        getExamData();
        refetch();
        navigate("/dashbaord/add-quiz");
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const getExamData = useCallback(async () => {
    try {
      dispatch(ShowLoading());
      const response = await getExamById(params?.id);

      dispatch(HideLoading());
      if (response) {
        setExamData(response);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  }, [dispatch, params?.id]);

  useEffect(() => {
    if (params.id) {
      getExamData();
    }
  }, [params.id, questionData]);

  const deleteQuestion = async (questionId) => {
    try {
      dispatch(ShowLoading());
      const response = await deleteQuestionById(questionId, params?.id);
      dispatch(HideLoading());
      if (response) {
        message.success("Successfully deleted");
        refetch();
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const questionsColumns = [
    {
      title: "Question",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Correct Option",
      dataIndex: "correctOption",
      key: "correctOption",
      render: (text, record) =>
        ` ${record.correctOption} : ${record.options[record.correctOption]}`,
    },
    {
      title: "Options",
      dataIndex: "options",
      key: "options",
      render: (text, record) => (
        <>
          {Object.keys(record.options)?.map((key) => (
            <div key={key}>
              {key} : {record.options[key]}
            </div>
          ))}
        </>
      ),
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <div className="flex gap-2">
          <MdDelete
            className="cursor-pointer"
            onClick={() => deleteQuestion(record._id)}
          />
        </div>
      ),
    },
  ];

  return (
    <DashboardContainer>
      {" "}
      <div>
        <div className="divider"></div>

        {(examData || !params.id) && (
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={examData && examData.length > 0 ? examData[0] : {}}
          >
            <Tabs defaultActiveKey="1">
              <TabPane tab="Exam Details" key="1">
                <Row gutter={[10, 10]}>
                  <Col span={8}>
                    <Form.Item
                      label="Exam Name"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please enter the exam name",
                        },
                      ]}
                    >
                      <input type="text" readOnly />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Exam Duration"
                      name="duration"
                      rules={[
                        {
                          required: true,
                          message: "Please enter the exam duration",
                        },
                      ]}
                    >
                      <input type="number" readOnly />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Category"
                      name="category"
                      rules={[
                        {
                          required: true,
                          message: "Please enter the exam duration",
                        },
                      ]}
                    >
                      <input className="capitalize" type="text" readOnly />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Total Marks"
                      name="totalMarks"
                      rules={[
                        {
                          required: true,
                          message: "Please enter the total marks",
                        },
                      ]}
                    >
                      <input type="number" readOnly />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Passing Marks"
                      name="passingMarks"
                      rules={[
                        {
                          required: true,
                          message: "Please enter the passing marks",
                        },
                      ]}
                    >
                      <input type="number" readOnly />
                    </Form.Item>
                  </Col>
                </Row>
                <div className="flex justify-end gap-2">
                  <Button
                    className="btn btn-sm bg-black text-white "
                    type="button"
                    onClick={() => navigate("/dashboard/add-quiz")}
                  >
                    Cancel
                  </Button>
                </div>
              </TabPane>
              {params.id && (
                <TabPane tab="Questions" key="2">
                  <div className="flex justify-end">
                    <Button
                      className="btn btn-sm bg-black text-white hover:bg-gray-600"
                      type="button"
                      onClick={() => setShowAddEditQuestionModal(true)}
                    >
                      Add Question
                    </Button>
                  </div>

                  <Table
                    pagination={false}
                    columns={questionsColumns}
                    dataSource={questionData?.map((question) => ({
                      ...question,
                      key: question._id,
                    }))}
                  />
                </TabPane>
              )}
            </Tabs>
          </Form>
        )}

        {showAddEditQuestionModal && (
          <AddEditQuestion
            setShowAddEditQuestionModal={setShowAddEditQuestionModal}
            showAddEditQuestionModal={showAddEditQuestionModal}
            examId={params.id}
            refreshData={getExamData}
            selectedQuestion={selectedQuestion}
            setSelectedQuestion={setSelectedQuestion}
            refetchData={refetch}
          />
        )}
      </div>
    </DashboardContainer>
  );
};

export default AddEditExam;
