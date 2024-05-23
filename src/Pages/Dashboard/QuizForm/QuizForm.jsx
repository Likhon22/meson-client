import {
  Col,
  Form,
  message,
  Row,
  Select,
  Table,
  Tabs,
  Upload,
  Button,
} from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import AddEditQuestion from "../../../Components/AddEditQuestion/AddEditQuestion";
import {
  addExam,
  deleteQuestionById,
  editExamById,
  getExamById,
} from "../../../Utils/exam";
import DashboardContainer from "../../../Components/Dashboard/DashboardContainer/DashboardContainer";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { uploadImage } from "../../../Utils/uploadFile";

const { TabPane } = Tabs;
const categories = ["gk", "physics", "chemistry", "math", "english", "bangla"];

const QuizForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [examData, setExamData] = useState(null);
  const [showAddEditQuestionModal, setShowAddEditQuestionModal] =
    useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [imageFile, setImageFile] = useState(null); // State to store the image file
  const params = useParams();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      if (imageFile) {
        const imageResponse = await uploadImage("image", imageFile);
        if (imageResponse && imageResponse) {
          values.image = imageResponse;
        } else {
          throw new Error("Image upload failed");
        }
      }

      let response;
      if (params.id) {
        response = await editExamById(params.id, values);
      } else {
        response = await addExam(values);
      }

      if (response) {
        message.success("Exam saved successfully");
        navigate("/dashboard/add-quiz");
      } else {
        message.error(response.message || "Failed to save exam");
      }

      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const getExamData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await getExamById(params.id);
      dispatch(HideLoading());
      if (response) {
        setExamData(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (params.id) {
      getExamData();
    }
  }, [params.id]);

  const deleteQuestion = async (questionId) => {
    try {
      dispatch(ShowLoading());
      const response = await deleteQuestionById(params.id, questionId);
      dispatch(HideLoading());
      if (response) {
        message.success(response.message);
        getExamData();
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
    },
    {
      title: "Options",
      dataIndex: "options",
      render: (text, record) =>
        Object.keys(record.options).map((key) => (
          <div key={key}>
            {key} : {record.options[key]}
          </div>
        )),
    },
    {
      title: "Correct Option",
      dataIndex: "correctOption",
      render: (text, record) =>
        `${record.correctOption} : ${record.options[record.correctOption]}`,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <div className="flex gap-2">
          <FaPencilAlt
            className="ri-pencil-line"
            onClick={() => {
              setSelectedQuestion(record);
              setShowAddEditQuestionModal(true);
            }}
          />
          <MdDelete
            className="ri-delete-bin-line"
            onClick={() => {
              deleteQuestion(record._id);
            }}
          />
        </div>
      ),
    },
  ];

  const handleImageUpload = (file) => {
    setImageFile(file);
    return false; // Prevent antd from auto-uploading
  };

  return (
    <DashboardContainer>
      <div>
        <div className="divider"></div>
        {(examData || !params.id) && (
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={examData || {}}
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
                      <input
                        type="text"
                        className="border p-1 rounded-md border-gray-400"
                      />
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
                      <input
                        type="number"
                        className="border p-1 rounded-md border-gray-400"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="Category" name="category">
                      <Select>
                        {categories.map((category) => (
                          <Select.Option key={category} value={category}>
                            {category.charAt(0).toUpperCase() +
                              category.slice(1)}
                          </Select.Option>
                        ))}
                      </Select>
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
                      <input
                        type="number"
                        className="border p-1 rounded-md border-gray-400"
                      />
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
                      <input
                        type="number"
                        className="border p-1 rounded-md border-gray-400"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="Cover Image" name="image">
                      <Upload
                        beforeUpload={handleImageUpload}
                        showUploadList={false}
                      >
                        <Button>Click to Upload</Button>
                        {imageFile && <p>image uploaded</p>}
                      </Upload>
                    </Form.Item>
                  </Col>
                </Row>
                <div className="flex justify-end gap-2">
                  <button
                    className="btn"
                    type="button"
                    onClick={() => navigate("/dashboard/add-quiz")}
                  >
                    Cancel
                  </button>
                  <button className="btn" type="submit">
                    Save
                  </button>
                </div>
              </TabPane>
              {params.id && (
                <TabPane tab="Questions" key="2">
                  <div className="flex justify-end">
                    <button
                      className="primary-outlined-btn"
                      type="button"
                      onClick={() => setShowAddEditQuestionModal(true)}
                    >
                      Add Question
                    </button>
                  </div>
                  <Table
                    columns={questionsColumns}
                    dataSource={examData?.questions.map((q) => ({
                      ...q,
                      key: q._id,
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
          />
        )}
      </div>
    </DashboardContainer>
  );
};

export default QuizForm;
